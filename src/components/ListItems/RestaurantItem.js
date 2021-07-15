import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

function RestaurantItem({name, image, rating, eta}) {
  return (
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
}

RestaurantItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.number,
  rating: PropTypes.number,
  eta: PropTypes.string,
};

const boxSize = 100;

const styles = StyleSheet.create({
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

export default RestaurantItem;
