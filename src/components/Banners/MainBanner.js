import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import logo from '../../images/logo.png';
import image from '../../images/image.png';

function MainBanner() {
  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <Image source={logo} />
        <Text style={styles.logoText}>DELIVER APP</Text>
      </View>
      <View style={styles.img}>
        <Image source={image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 256,
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