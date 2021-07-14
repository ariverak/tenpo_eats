import React from 'react';
import MainBanner from '../components/Banners/MainBanner';
import {View, ScrollView, StyleSheet} from 'react-native';
import {bannerHeight} from '../config/constants';
import RestaurantsSection from '../components/Sections/RestaurantsSection';
import CategoriesSection from '../components/Sections/CategoriesSection';
import FavoritesSection from '../components/Sections/FavoritesSection';

function Home() {
  return (
    <View>
      <MainBanner />
      <ScrollView style={styles.scroll}>
        <RestaurantsSection />
        <CategoriesSection />
        <FavoritesSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    position: 'absolute',
    width: '100%',
    top: bannerHeight - 20,
  },
});

export default Home;
