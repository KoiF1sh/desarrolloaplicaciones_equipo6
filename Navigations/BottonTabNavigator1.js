import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddEnclosureScreen from '../Screens/AddEnclosureScreen/AddEnclosureScreen'
import ListEnclosureScreen from '../Screens/ListEnclosureScreen/ListEnclosureScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function BottonTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Registro Recinto"
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
                name="Registro Recinto" 
                component={AddEnclosureScreen}
                options={{
                    tabBarLabel:"Registro Recinto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"create"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Listado Recinto" 
                component={ListEnclosureScreen}
                options={{
                    tabBarLabel:"Listado Recinto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"list"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
