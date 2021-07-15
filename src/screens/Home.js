import React from 'react';
import MainBanner from '../components/Banners/MainBanner';
import {ScrollView, View, StyleSheet} from 'react-native';
import RestaurantsSection from '../components/Sections/RestaurantsSection';
import CategoriesSection from '../components/Sections/CategoriesSection';
import FavoritesSection from '../components/Sections/FavoritesSection';

function Home() {
  return (
    <ScrollView>
      <MainBanner />
      <View style={styles.content}>
        <RestaurantsSection />
        <CategoriesSection />
        <FavoritesSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 25,
  },
});

export default Home;
