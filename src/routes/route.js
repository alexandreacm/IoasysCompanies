import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

const { Navigator, Screen } = createBottomTabNavigator();


import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Filter from '../pages/Filter';
import Profile from '../pages/Profile';
import About from '../pages/About';


export function Tabs() {
    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: '#FFF',
                inactiveTintColor: '#FFF',
                activeBackgroundColor: '#000',
                inactiveBackgroundColor: '#808080',
                labelStyle: {
                    fontSize: 14
                },
                style: {
                    backgroundColor: '#000'
                }
            }}>
            <Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome name="home" color={color} size={20} />
                    }
                }} />
            <Screen name="Filter" component={Filter}
                options={{
                    title: 'Filtrar empresas',
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" color={color} size={20} />
                    )
                }} />
            <Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={20} />
                    )
                }} />
        </Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="SignIn">
                <stack.Screen name="SignIn" component={SignIn}
                    options={{
                        headerShown: false
                    }} />
                <stack.Screen name="Home" component={Tabs}
                    options={{
                        header: null,
                        headerShown: false
                    }} />
                <stack.Screen name="About" component={About} />
            </stack.Navigator>
        </NavigationContainer>
    );
}