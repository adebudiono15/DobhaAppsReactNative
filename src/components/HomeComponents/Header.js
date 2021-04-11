import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { GREY, HITAM, NAVHOME, PRIMARY, PUTIH } from '../../utils/constants';
import { IconButton } from 'react-native-paper';
import { IconCategory } from '../../assets';
import { photoProfil, photoBanner1 } from '../../images';

const HomeHeader = () => {
	return (
		<View>
			<View style={styles.container}>
				<View>
					<Image style={styles.icon} source={photoProfil} />
				</View>
				<View>
					<Text style={styles.textSecond}>Hai, Budi</Text>
				</View>
				<IconButton icon={IconCategory} color="grey" size={20} onPress={() => console.log('Pressed')} />
			</View>
			<View>
				<Text style={styles.text}>Find a best</Text>
				<Text style={styles.text}>Perfume in here !</Text>
			</View>
			<View style={styles.cardBanner}>
				<View>
				<Text style={styles.textBanner}>Certified BPOM and MUI</Text>
				<Text style={styles.textBanner}>Import quality perfume</Text>
				</View>
				<View>
				<Image style={styles.photoCard} source={photoBanner1} />
				</View>
			</View>
		</View>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignContent: 'center',
		marginVertical: 25,
		marginTop: 60
	},
	text: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 20,
		color: PRIMARY
	},
	textSecond: {
		fontFamily: 'Montserrat-Medium',
		fontSize: 15,
		color: PRIMARY,
		marginRight: 150
	},
	icon: {
		backgroundColor: GREY,
		borderRadius: 20,
		justifyContent: 'center',
		height: 40,
		width: 40
	},
	photoCard: {
		width: 120,
		height: 120,
		marginTop: -50
	},
	cardBanner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: HITAM,
		borderRadius: 8,
		marginTop: 50,
		height: 100
	},
	textBanner: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 12,
		color: PUTIH,
		marginHorizontal:25
	},
});
