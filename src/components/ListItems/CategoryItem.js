import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function CategoryItem({name, image}) {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </View>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.number,
};

const boxSize = 100;

const styles = StyleSheet.create({
  imgContainer: {
    width: boxSize * 2,
    height: boxSize,
    flex: 1,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  nameContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    opacity: 0.9,
    fontFamily: 'Gotham-Bold',
  },
});

export default CategoryItem;
