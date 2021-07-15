import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar as ElementAvatar} from 'react-native-elements';
import PropTypes from 'prop-types';

function Avatar({image}) {
  return (
    <ElementAvatar
      rounded
      source={{uri: image}}
      containerStyle={styles.avatar}
    />
  );
}

Avatar.propTypes = {
  image: PropTypes.string,
};

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 15,
  },
});

export default Avatar;
