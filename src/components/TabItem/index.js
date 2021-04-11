import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
	IconHomeActive,
	IconNewsActive,
	IconChatActive,
	IconUserActive,
	IconHomeNonActive,
	IconNewsNonActive,
	IconChatNonActive,
	IconUserNonActive
} from '../../assets';

const TabItem = ({ label, isFocused, onPress, onLongPress }) => {
	const Icon = () => {
		if (label === 'Home') {
			return isFocused ? <IconHomeActive /> : <IconHomeNonActive />;
		}
		if (label === 'News') {
			return isFocused ? <IconNewsActive /> : <IconNewsNonActive />;
		}
		if (label === 'Chat') {
			return isFocused ? <IconChatActive /> : <IconChatNonActive />;
		}
		if (label === 'Profil') {
			return isFocused ? <IconUserActive /> : <IconUserNonActive />;
		}
	};

	return (
		<TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
			<Icon key={isFocused} />
		</TouchableOpacity>
	);
};

export default TabItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignContent: 'center',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
