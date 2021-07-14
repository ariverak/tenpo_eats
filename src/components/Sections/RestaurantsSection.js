import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import restaurants from '../../api/restaurants';
// import mcdonalds from '../../images/restaurants/mcdonalds.png';

const boxSize = 100;

function RestaurantsSection() {
  return (
    <Card containerStyle={styles.root}>
      <Text style={styles.title}>Restaurantes</Text>
      <FlatList
        horizontal
        data={restaurants}
        renderItem={({item}) => <RestaurantItem {...item} />}
        keyExtractor={item => item.id}
      />
    </Card>
  );
}

const RestaurantItem = ({name, image, rating, eta}) => (
  <View style={styles.restaurantItem}>
    <View style={styles.imgContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.ratingContainer}>
      <Icon name="star" size={12} color="#FFCD47" />
      <Text style={styles.ratingText}>{rating}</Text>
      <Text style={styles.etaText}>{eta}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    margin: 0,
    paddingTop: 25,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Gotham-Bold',
    fontSize: 20,
  },
  imgContainer: {
    width: boxSize,
    height: boxSize,
    // backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'GothamBook',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'GothamBook',
    fontSize: 12,
  },
  etaText: {
    fontFamily: 'GothamBook',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default RestaurantsSection;
