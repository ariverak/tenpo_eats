import React from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import favorites from '../../api/favorites';
import FavoriteItem from '../ListItems/FavoriteItem';
// import mcdonalds from '../../images/restaurants/mcdonalds.png';

function FavoritesSection() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>TUS FAVORITOS</Text>
      <FlatList
        horizontal
        data={favorites}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <FavoriteItem {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 0,
    paddingTop: 25,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 15,
    fontFamily: 'Gotham-Bold',
    fontSize: 16,
  },
});

export default FavoritesSection;
