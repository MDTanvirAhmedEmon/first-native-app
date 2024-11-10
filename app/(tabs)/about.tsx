import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (

        <View style={styles.container}>

            <ImageBackground
                style={styles.bgImage}
                resizeMode="cover"
                source={require('../../assets/images/bg.jpg')}
            >
                <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: 100}}>
                    <View style={styles.overlay}>
                        <Text style={styles.text}>About</Text>

                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>
                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>
                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>
                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>
                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>
                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>
                        {/* Card Component */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>About Us</Text>
                            <Text style={styles.cardDescription}>
                                This app is designed to provide users with an immersive experience and valuable insights. Learn more about our journey and mission here.
                            </Text>
                        </View>

                    </View>
                </ScrollView>
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
    card: {
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});
