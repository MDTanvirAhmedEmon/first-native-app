import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false, // Hides the header for all screens
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#333',
                    borderTopWidth: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                    height: 60,
                    left: 10,
                    right: 10,
                    borderRadius: 10,
                    bottom: 10,
                },
                tabBarItemStyle: {
                    // marginHorizontal: 0, // Adds space between tabs
                },
                tabBarActiveTintColor: '#FFD700',   // Active icon color
                tabBarInactiveTintColor: '#A9A9A9', // Inactive icon color
            }}
        >
            {/* The "Contact" route */}
            <Tabs.Screen
                name="contact"
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: focused ? '#ededed' : 'transparent',
                            width: 50,
                            height: 50,
                            borderRadius: 40, // half of width/height for a full circle
                        }}>
                            <AntDesign name="contacts" size={18} color={focused ? 'black' : '#A9A9A9'} />
                            <Text style={{ fontSize: 10, color: focused ? 'black' : '#A9A9A9' }}>
                                Contact
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* The "About" tab */}
            <Tabs.Screen
                name="about"
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: focused ? '#ededed' : 'transparent',
                            width: 50,
                            height: 50,
                            borderRadius: 40, // half of width/height for a full circle
                        }}>
                            <Entypo name="grid" size={18} color={focused ? 'black' : '#A9A9A9'} />
                            <Text style={{ fontSize: 10, color: focused ? 'black' : '#A9A9A9' }}>
                                About
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
