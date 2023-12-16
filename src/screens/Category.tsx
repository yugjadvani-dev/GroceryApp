import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Search from '../components/Search';
import {color, fontFamily} from '../assets/styles/GlobalStyles';
import {categoryList} from '../data/contacts';
import {CategoryListProps} from '../types/types';

const categoryTypes: string[] = [
  'All Category',
  'Popular',
  'Best Price',
  'Best Deal',
  'Package',
];

const Item = ({name, image, bgColor}: CategoryListProps) => (
  <View style={[{backgroundColor: bgColor}, styles.productCard]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.proName}>{name}</Text>
  </View>
);

const Category: React.FC = () => {
  const [category, setCategory] = React.useState('All');

  const handleCategoryChange = category => setCategory(category);

  const categoryFilterData = categoryList.filter(para => {
    if (category === 'All') return true;
    else return para.type === category;
  });

  return (
    <View style={styles.container}>
      <Search />

      <ScrollView horizontal={true}>
        {categoryTypes.map(item => (
          <>
            <Text style={[styles.category]} key={item}>
              {' '}
              {item}
            </Text>
            {/* <View style={styles.activeDots} /> */}
          </>
        ))}
      </ScrollView>

      <View style={styles.cardContainer}>
        <FlatList
          numColumns={2}
          data={categoryList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item {...item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.colorWhite,
    flex: 1,
    padding: 15,
  },
  cardContainer: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  category: {
    color: '#D9D8D3',
    fontFamily: fontFamily.montserrat,
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 13,
  },
  active: {
    color: '#3D3014',
  },
  activeDots: {
    width: 8,
    height: 4,
    backgroundColor: '#EEBB4D',
    borderRadius: 5,
  },
  productCard: {
    padding: 16,
    borderRadius: 20,
    width: '47%',
    marginRight: 20,
    marginBottom: 15,
  },
  image: {
    marginBottom: 12,
  },
  proName: {
    color: '#3D3014',
    fontFamily: fontFamily.montserrat,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Category;
