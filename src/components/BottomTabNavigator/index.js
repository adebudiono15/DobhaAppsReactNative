import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GREY, HITAM, PUTIH } from '../../utils/constants';
import TabItem from '../TabItem';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined ? options.title : route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key
					});
				};

				return (
					<TabItem
						key={index}
						isFocused={isFocused}
						label={label}
						onLongPress={onLongPress}
						onPress={onPress}
					/>
				);
			})}
		</View>
	);
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignContent: 'center',
		// marginHorizontal:20,
		// marginVertical:20,
		padding: 10,
		borderTopLeftRadius: 16,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 7
		},
		shadowOpacity: 0.43,
		shadowRadius: 9.51,

		elevation: 15
	}
});
