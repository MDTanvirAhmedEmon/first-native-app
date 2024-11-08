import { StyleSheet, Text, View } from 'react-native'


const About = () => {
    return (
        <View style={styles.bg}>
            <Text style={styles.text}>About</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "green",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 50,
        marginBottom: 20,
        color: "white",
    },
});
