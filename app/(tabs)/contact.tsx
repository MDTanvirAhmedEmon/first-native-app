import { ImageBackground, StyleSheet, Text, View } from 'react-native'


const Contact = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1, justifyContent: "center" }} resizeMode="cover" source={require('../../assets/images/bg.jpg')}>
                <View style={styles.overlay}>
                <Text style={styles.text}>Contact</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden', // Prevents overflow scrolling
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
