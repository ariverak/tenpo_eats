import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import marker from '../../images/marker.png';

function AddressSelector() {
  return (
    <TouchableOpacity>
      <View style={styles.root}>
        <Image style={styles.marker} source={marker} />
        <Text style={styles.message}>Agregar dirección de entrega</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#D4F9F5',
    justifyContent: 'center',
  },
  marker: {
    marginTop: 15,
  },
  message: {
    marginTop: 20,
    marginLeft: 10,
    color: 'teal',
    fontFamily: 'GothamBook',
  },
});

export default AddressSelector;
