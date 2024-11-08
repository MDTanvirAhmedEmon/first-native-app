import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Example icon library



export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{headerShown:false}}
        >
            {/* The "Contact" route for the home tab */}
            <Tabs.Screen
                name="about/contact"
                options={{
                    // headerShown: false,
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="contacts" color={color} size={size} />
                    ),
                }}
            />

            {/* The "About" tab */}
            <Tabs.Screen
                name="about/index"
                options={{
                    // headerShown: false,
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="info" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}
