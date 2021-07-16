import React from 'react';
import {Image, StyleSheet} from 'react-native';
import search from '../../images/search.png';
import PropTypes from 'prop-types';

function Search() {
  return <Image style={styles.search} source={search} />;
}

Search.propTypes = {
  image: PropTypes.string,
};

const styles = StyleSheet.create({
  search: {
    marginRight: 15,
  },
});

export default Search;
