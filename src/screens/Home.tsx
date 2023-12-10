import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '../assets/styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import CategoryList from '../components/CategoryList';
import BestPrice from '../components/BestPrice';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listHead}>
        <View>
          <Text style={styles.helloText}>
            Hello,<Text style={styles.orangeText}> Fahmi </Text>
          </Text>
          <Text style={styles.des}>find the right one for</Text>
          <Text style={styles.des}>a healthy body</Text>
        </View>
        <View style={styles.notificationIcon}>
          <Icon name="bell" size={16} color="#EEBB4D" />
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.flex}>
        <View style={styles.searchContainerStyle}>
          <Icon name="search" size={16} color="#573B004D" />
          <TextInput style={styles.searchFiled} placeholder="Search" />
        </View>
        <View style={[styles.notificationIcon, styles.notificationIconBg]}>
          <Icon name="filter" size={16} color="#EEBB4D" />
        </View>
      </View>

      {/* Category */}
      <View style={styles.listHead}>
        <Text style={styles.head}>Category</Text>
        <Text style={styles.showAll}>Show All</Text>
      </View>
      <CategoryList />

      {/* Best Deal */}
      <Text style={styles.head}>Best Deal</Text>
      <Image
        style={styles.bestDealImg}
        source={require('../assets/images/bestDeal.png')}
      />

      {/* Best Price */}
      <View style={styles.listHead}>
        <Text style={styles.head}>Best Price</Text>
        <Text style={styles.showAll}>Show All</Text>
      </View>
      <BestPrice />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.colorWhite,
    flex: 1,
    padding: 15,
  },
  flex: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
  },
  helloText: {
    color: '#3D3014',
    fontFamily: fontFamily.montserrat,
    fontSize: fontSize.size_base,
    fontWeight: '400',
    marginBottom: 5,
  },
  orangeText: {
    color: '#EEA54D',
    fontFamily: fontFamily.montserrat,
    fontSize: fontSize.size_base,
    fontWeight: '700',
  },
  des: {
    color: '#3D3014',
    fontFamily: fontFamily.montserrat,
    fontSize: fontSize.size_base,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  notificationIcon: {
    borderRadius: 15,
    borderColor: '#F9F3D0',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  notificationIconBg: {
    backgroundColor: '#fcf9e8',
  },
  searchContainerStyle: {
    backgroundColor: '#fdfdf9',
    borderRadius: 15,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    width: '85%',
    borderColor: '#F0E9D2',
    borderWidth: 1,
  },
  searchFiled: {
    paddingLeft: 17,
    placeholderTextColor: '#e5e1d6',
  },
  listHead: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  head: {
    color: color.colorGray,
    fontFamily: fontFamily.montserrat,
    fontSize: 14,
    fontWeight: '700',
  },
  showAll: {
    color: color.colorGray,
    fontFamily: fontFamily.montserrat,
    fontSize: 10,
    fontWeight: '400',
  },
  bestDealImg: {
    width: '100%',
    height: 190,
    marginBottom: 15,
  },
});
