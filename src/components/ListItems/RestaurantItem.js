import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import {Badge} from 'react-native-elements';

function RestaurantItem({name, image, rating, eta, discount}) {
  return (
    <View style={styles.restaurantItem}>
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.image} />
        {discount && (
          <Badge
            value={<Text style={styles.badgeText}>{discount}% DCTO</Text>}
            containerStyle={styles.badgeContainer}
            badgeStyle={styles.badge}
          />
        )}
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
  discount: PropTypes.number,
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
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
  badge: {
    width: 33,
    height: 33,
    borderRadius: 15,
    backgroundColor: '#00BAA4',
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
    textAlign: 'center',
  },
});

export default RestaurantItem;
