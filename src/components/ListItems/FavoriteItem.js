import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

function FavoriteItem({name, image, rating, restaurantName, eta}) {
  return (
    <View style={styles.favoriteItem}>
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {name}
          </Text>
          <View style={styles.rating}>
            <Icon name="star" size={12} color="#FFCD47" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.restaurantName}>
            {restaurantName}
          </Text>
          <Text style={styles.ratingText}>{eta}</Text>
        </View>
      </View>
    </View>
  );
}

FavoriteItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.number,
  rating: PropTypes.number,
  restaurantName: PropTypes.string,
  eta: PropTypes.string,
};

const boxSize = 175;

const styles = StyleSheet.create({
  favoriteItem: {
    flex: 1,
    elevation: 2,
    width: boxSize * 1.5,
    height: boxSize,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  imgContainer: {
    flex: 0.7,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  name: {
    textAlign: 'left',
    fontFamily: 'GothamBook',
    maxWidth: '90%',
  },
  restaurantName: {
    color: 'teal',
    fontFamily: 'Gotham-Bold',
    fontSize: 14,
  },
  info: {
    flex: 0.3,
    justifyContent: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    overflow: 'hidden',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 50,
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

export default FavoriteItem;
