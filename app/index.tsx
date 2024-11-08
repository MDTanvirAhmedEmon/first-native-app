import FirstComponent from '@/components/FirstComponent';
import { Router, useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgImage} resizeMode="cover" source={require('../assets/images/bg.jpg')}>
                {/* Semi-transparent overlay to simulate gradient */}
                <View style={styles.overlay}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Hello Bro</Text>
                        <FirstComponent />
                        <Text onPress={() => router.push('/about')} style={styles.linkText}>About</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden', // Prevent scroll by hiding overflow
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center', // Ensures the content is centered
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for gradient effect
        justifyContent: 'center', // Centers the content vertically
    },
    contentContainer: {
        alignItems: 'center', // Centers content horizontally
        paddingHorizontal: 20, // Padding to prevent overflow
    },
    text: {
        fontSize: 50,
        marginBottom: 20,
        color: "white",
    },
    linkText: {
        fontSize: 20,
        color: "white",
    },
});
