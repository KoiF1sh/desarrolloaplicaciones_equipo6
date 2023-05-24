import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen'
import AddAnimalsScreen from '../Screens/AddAnimalsScreen/AddAnimalsScreen';
import ListAnimalsScreen from '../Screens/ListAnimalsScreen/ListAnimalsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Registro Animal"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#40CFFF',//activeTintColor
                tabBarInactiveTintColor:"#ffff",//inactiveTintColor
                tabBarShowLabel:true,//showLabel
                tabBarLabelStyle:{ //labelStyle
                    fontSize:12,
                    fontWeight: 'bold',
                },
                tabBarStyle:{//style
                    paddingTop: 5,
                    paddingBottom:5,
                    backgroundColor:"#000"
                }
            }}
        >
            <Tab.Screen 
                name="Registro Animal" 
                component={AddAnimalsScreen}
                options={{
                    tabBarLabel:"Registro Animal",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"create"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Listado Animal" 
                component={ListAnimalsScreen}
                options={{
                    tabBarLabel:"Listado Animal",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"list"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
