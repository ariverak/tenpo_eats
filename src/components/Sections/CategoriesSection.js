import React from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import categories from '../../api/categories';
import CategoryItem from '../ListItems/CategoryItem';
// import mcdonalds from '../../images/restaurants/mcdonalds.png';

function CategoriesSection() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>CATEGORÍAS</Text>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CategoryItem {...item} />}
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
    padding: 15,
  },
  title: {
    fontFamily: 'Gotham-Bold',
    fontSize: 16,
  },
});

export default CategoriesSection;
