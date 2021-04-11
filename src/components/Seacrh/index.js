import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Search = () => {
	const [ searchQuery, setSearchQuery ] = React.useState('');

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<View
			style={{
				maxHeight: 1,
				marginTop: 30
			}}
		>
			<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({});
