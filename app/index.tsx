import FirstComponent from '@/components/FirstComponent';
import { Link } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.bg}>
            <Text style={styles.text}>Hello Bro</Text>
            <FirstComponent />
            <Link to={'/about'}>About</Link>
        </View>
    );
}

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
