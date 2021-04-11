import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { CardHome, HomeHeader, Destination } from '../../components';

const Home = () => {
	return (
		<View style={styles.page}>
			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
				<StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
				<HomeHeader />
				<CardHome />
			</ScrollView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		marginHorizontal: 17
	}
});
