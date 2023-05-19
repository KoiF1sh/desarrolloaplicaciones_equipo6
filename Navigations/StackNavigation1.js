import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LearnScreen from '../Screens/LearnScreen/LearnScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export default function StackNavigation1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{ headerShown: true, headerTitle: 'Presentacion' }}
            />

            <Stack.Screen name="LearnScreen" component={LearnScreen}
                options={{ headerShown: true, headerTitle: 'Volver' }}
            />

            <Stack.Screen name="LoginScreen" component={LoginScreen}
                options={{ headerShown: true, headerTitle: 'Volver' }}
            />
        </Stack.Navigator>

    )
}