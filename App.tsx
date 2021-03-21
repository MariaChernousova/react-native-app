import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from "./Components/Settings";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { PhotoDetails } from "./Components/PhotoDetails";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PhotosList } from './Components/PhotoList';


export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if (route.name === 'PhotosList') {
                            iconName = "list-ul";
                        } else if (route.name === 'Settings') {
                            iconName = "cogs";
                        }
                        // @ts-ignore
                        return <FontAwesome5 name={iconName} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="PhotosList" component={PhotosList} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

