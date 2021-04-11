import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { IconSearch } from '../../assets';
import { GREY, PUTIH } from '../../utils/constants';
import { Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
	return (
		<View style={styles.page}>
				<Searchbar style={styles.search} placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		marginHorizontal: 17
	},
	search: {
		flex: 1,
		backgroundColor: GREY,
        height:39,
		borderRadius:8
	},
});
