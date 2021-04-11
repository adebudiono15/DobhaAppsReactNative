import React from 'react';
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';
import { IconBus, IconHotel, IconVisa,IconTour } from '../../assets';
import { GREY, HITAM } from '../../utils/constants';
import { IconButton, Colors } from 'react-native-paper';
import { photoCard1,photoCard2,photoCard3,photoCard4, photoCard5 } from '../../images';

const CardHome = () => {
	return (
		<View>
			<View style={styles.page}>
				<Text style={styles.text}>Popular Categories</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<ScrollView horizontal={true}>
					<View style={styles.cartContainer}>
						<Image source={photoCard1} style={styles.cardBorder}/>
						<Text style={styles.cartText}>Pen</Text>
					</View>
					<View style={styles.cartContainer}>
						<Image source={photoCard2} style={styles.cardBorder}/>
						<Text style={styles.cartText}>Spray</Text>
					</View>
					<View style={styles.cartContainer}>
						<Image source={photoCard3} style={styles.cardBorder}/>
						<Text style={styles.cartText}>Roll</Text>
					</View>
					<View style={styles.cartContainer}>
						<Image source={photoCard4} style={styles.cardBorder}/>
						<Text style={styles.cartText}>Freshesener</Text>
					</View>
				</ScrollView>
			</View>

			<View style={styles.page}>
				<Text style={styles.text}>Recomended for you</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<ScrollView horizontal={true}>
					<View style={styles.cartContainer}>
						<Image source={photoCard5} style={styles.cardBorderSecond}/>
						<Text style={styles.cartText}>Pen</Text>
					</View>
					<View style={styles.cartContainer}>
						<Image source={photoCard2} style={styles.cardBorderSecond}/>
						<Text style={styles.cartText}>Spray</Text>
					</View>
					<View style={styles.cartContainer}>
						<Image source={photoCard3} style={styles.cardBorderSecond}/>
						<Text style={styles.cartText}>Roll</Text>
					</View>
					<View style={styles.cartContainer}>
						<Image source={photoCard4} style={styles.cardBorderSecond}/>
						<Text style={styles.cartText}>Freshesener</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default CardHome;

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		marginTop: 40,
	},
	cartContainer: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: HITAM,
		fontFamily: 'Montserrat-Bold',
		fontSize: 15
	},
	cardBorder: {
		marginHorizontal:10,
		width: 80,
		height: 80,
		marginTop:15,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: GREY,
		borderRadius: 4,
	},
	cardBorderSecond: {
		marginHorizontal:10,
		width: 150,
		height: 150,
		marginTop:15,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: GREY,
		borderRadius: 4,
	},
	cartText: {
		fontFamily: 'Montserrat-Medium',
		fontSize: 10,
		color: HITAM,
		marginTop:10
	}
});
