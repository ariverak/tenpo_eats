import React from 'react';
import MainBanner from '../components/Banners/MainBanner';
import {ScrollView, View, StyleSheet} from 'react-native';
import RestaurantsSection from '../components/Sections/RestaurantsSection';
import CategoriesSection from '../components/Sections/CategoriesSection';
import FavoritesSection from '../components/Sections/FavoritesSection';
import PagerView from 'react-native-pager-view';
import AddressSelector from '../components/Sections/AddressSelector';

function Home() {
  return (
    <ScrollView>
      <PagerView style={styles.pager}>
        <View key="1">
          <MainBanner title="DELIVER APP" />
        </View>
        <View key="2">
          <MainBanner title="AWESOME APP" />
        </View>
        <View key="3">
          <MainBanner title="FAST APP" />
        </View>
      </PagerView>
      <AddressSelector />
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
  },
  pager: {
    height: 200,
  },
});

export default Home;
