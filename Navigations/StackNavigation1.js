import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import LearnScreen from '../Screens/LearnScreen/LearnScreen';
// Se importa la navegacion para combinarla
import TopTabNavigator1 from './TopTabNavigator1';
import BottonTabNavigator1 from './BottonTabNavigator1';

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

            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
                options={{ headerShown: true, headerTitle: 'Volver' }}
            />

            <Stack.Screen name="AddAnimalsScreen" component={TopTabNavigator1}
                options={{ headerShown: true, headerTitle: 'Volver' }}
            />

            <Stack.Screen name="AddEnclosureScreen" component={BottonTabNavigator1}
                options={{ headerShown: true, headerTitle: 'Volver' }}
            />
        </Stack.Navigator>

    )
}