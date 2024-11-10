import FirstComponent from '@/components/FirstComponent';
import { Router, useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgImage} resizeMode="cover" source={require('../assets/images/bg.jpg')}>
                {/* Semi-transparent overlay to simulate gradient */}
                <View style={styles.overlay}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Hello Bro Good</Text>
                        <FirstComponent />
                        <View style={{ marginTop: 20 }}></View>
                        <Pressable style={styles.button} onPress={() => router.push('/about')}>
                            <Text style={styles.buttonText}>Start Now</Text>
                        </Pressable>
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
    button: {
        backgroundColor: '#1ABC9C', // Teal color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});

