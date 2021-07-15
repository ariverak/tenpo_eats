import React from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import restaurants from '../../api/restaurants';
import RestaurantItem from '../ListItems/RestaurantItem';
// import mcdonalds from '../../images/restaurants/mcdonalds.png';

function RestaurantsSection() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>RESTAURANTES</Text>
      <FlatList
        horizontal
        data={restaurants}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <RestaurantItem {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 0,
    paddingTop: 25,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 15,
    fontFamily: 'Gotham-Bold',
    fontSize: 16,
  },
});

export default RestaurantsSection;
