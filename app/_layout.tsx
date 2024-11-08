import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* The "index" route is typically the root of the app */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

            {/* The path for the about screen should be relative to the folder structure */}
            <Stack.Screen name="about" options={{  headerShown: false }} />
        </Stack>
    );
}
