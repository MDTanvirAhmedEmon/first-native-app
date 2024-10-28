// import { Stack } from 'expo-router';

// export default function RootLayout() {
//     return (
//         <Stack>
//             {/* The "index" route is typically the root of the app */}
//             <Stack.Screen name="index" options={{ title: 'Home' }} />
            
//             {/* The path for the about screen should be relative to the folder structure */}
//             <Stack.Screen name="about/index" options={{ title: 'About' }} />
//         </Stack>
//     );
// }

import { Tabs } from 'expo-router';

export default function RootLayout() {
    return (
        <Tabs>
            {/* The "index" route for the home tab */}
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: 'Home', 
                    tabBarLabel: 'Home',
                    // tabBarIcon: () => <Icon name="home" size={24} /> // You can replace Icon with any icon from your library
                }} 
            />
            
            {/* The "about" tab */}
            <Tabs.Screen 
                name="about/index" 
                options={{ 
                    title: 'About', 
                    tabBarLabel: 'About',
                    // tabBarIcon: () => <Icon name="info" size={24} /> // Example icon
                }} 
            />
        </Tabs>
    );
}
