import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { News, Home, Chat, Profil } from '../pages';
import { BottomTabNavigator } from '../components';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
	return (
		<Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
			<Tab.Screen name="Home" key={Home} component={Home} />
			<Tab.Screen name="News" key={News} component={News} />
			<Tab.Screen name="Chat" key={Chat} component={Chat} />
			<Tab.Screen name="Profil" key={Profil} component={Profil} />
		</Tab.Navigator>
	);
};

const Router = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
		</Stack.Navigator>
	);
};

export default Router;

const styles = StyleSheet.create({});
