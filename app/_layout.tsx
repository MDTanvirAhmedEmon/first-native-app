import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* Root screen */}
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />

            {/* About screen as a modal */}
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false, presentation: 'modal' }}
            />
        </Stack>
    );
}
