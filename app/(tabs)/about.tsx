import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.bgImage} 
                resizeMode="cover" 
                source={require('../../assets/images/bg.jpg')}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>About</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden', // Prevents overflow scrolling
    },
    bgImage: {
        flex: 1,
        justifyContent: "center", // Centers the content vertically
    },
    overlay: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 50,
        marginBottom: 20,
        color: "white",
    },
});
