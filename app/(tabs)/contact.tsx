import { StyleSheet, Text, View } from 'react-native'


const Contact = () => {
    return (
        <View style={styles.bg}>
            <Text style={styles.text}>Contact</Text>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "red",
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
