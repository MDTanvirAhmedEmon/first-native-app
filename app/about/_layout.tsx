
import { Tabs } from 'expo-router';

export default function RootLayout() {
    return (
        <Tabs>
            {/* The "index" route for the home tab */}
            <Tabs.Screen
                name="about/contact"
                options={{
                    headerShown: false,
                    // tabBarIcon: () => <Icon name="home" size={24} /> // You can replace Icon with any icon from your library
                }}
            />

            {/* The "about" tab */}
            <Tabs.Screen
                name="about/index"
                options={{
                    headerShown: false,
                    // tabBarIcon: () => <Icon name="info" size={24} /> // Example icon
                }}
            />
        </Tabs>
    );
}
