import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import logo from '../../images/logo.png';
import image from '../../images/image.png';
import PropTypes from 'prop-types';

function MainBanner({title}) {
  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <Image source={logo} />
        <Text style={styles.logoText}>{title}</Text>
      </View>
      <View style={styles.img}>
        <Image source={image} />
      </View>
    </View>
  );
}

MainBanner.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'GothamBook',
    fontWeight: '900',
    marginLeft: -18,
  },
});

MainBanner.propTypes = {};

export default MainBanner;
