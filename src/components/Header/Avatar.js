import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar as ElementAvatar} from 'react-native-elements';

function Avatar({image}) {
  return (
    <ElementAvatar
      rounded
      source={{uri: image}}
      containerStyle={styles.avatar}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 15,
  },
});

export default Avatar;
