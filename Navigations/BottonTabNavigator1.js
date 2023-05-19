import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import LearnScreen from '../Screens/LearnScreen/LearnScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function BottonTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#ff6600',//activeTintColor
                tabBarInactiveTintColor:"#060606",//inactiveTintColor
                tabBarShowLabel:true,//showLabel
                tabBarLabelStyle:{ //labelStyle
                    fontSize:12
                },
                tabBarStyle:{//style
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Learn" 
                component={LearnScreen}
                options={{
                    tabBarLabel:"Aprende",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
