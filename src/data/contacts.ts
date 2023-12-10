// import category1 from '../assets/images/category1.png';

import {CategoryListProps, ProductProps} from '../types/types';

export const categoryList: CategoryListProps[] = [
  {
    id: '1',
    image: require('../assets/images/category1.png'),
    name: 'Vegetables',
    bgColor: '#D3E6F7',
    type: 'popular',
  },
  {
    id: '2',
    image: require('../assets/images/category2.png'),
    name: 'Fruit',
    bgColor: '#EFF7D3',
    type: 'bestPrice',
  },
  {
    id: '3',
    image: require('../assets/images/category3.png'),
    name: 'Spice',
    bgColor: '#F7D3EA',
    type: 'bestDeal',
  },
  {
    id: '4',
    image: require('../assets/images/category4.png'),
    name: 'Ingridients',
    bgColor: '#D3F7DF',
    type: 'Package',
  },
  {
    id: '5',
    image: require('../assets/images/category5.png'),
    name: 'Side Dishes',
    bgColor: '#F7E4D3',
    type: 'popular',
  },
  {
    id: '6',
    image: require('../assets/images/category6.png'),
    name: 'Meat',
    bgColor: '#DBD3F7',
    type: 'bestDeal',
  },
  {
    id: '7',
    image: require('../assets/images/category1.png'),
    name: 'Vegetables',
    bgColor: '#D3E6F7',
    type: 'popular',
  },
];

export const productList: ProductProps[] = [
  {
    id: '1',
    name: 'Tempe',
    weight: '1 Package 500 Ons',
    price: '20.000',
    image: require('../assets/images/category3.png'),
  },
  {
    id: '2',
    name: 'Chicken',
    weight: '1 Kilograms',
    price: '15.000',
    image: require('../assets/images/chicken.png'),
  },
  {
    id: '3',
    name: 'Meat',
    weight: '2 Kilograms',
    price: '10.000',
    image: require('../assets/images/category6.png'),
  },
  {
    id: '4',
    name: 'Tempe',
    weight: '1 Package 500 Ons',
    price: '20.000',
    image: require('../assets/images/category3.png'),
  },
  {
    id: '5',
    name: 'Tempe',
    weight: '1 Package 500 Ons',
    price: '20.000',
    image: require('../assets/images/category3.png'),
  },
  {
    id: '6',
    name: 'Chicken',
    weight: '1 Kilograms',
    price: '15.000',
    image: require('../assets/images/chicken.png'),
  },
  {
    id: '7',
    name: 'Meat',
    weight: '2 Kilograms',
    price: '10.000',
    image: require('../assets/images/category6.png'),
  },
  {
    id: '8',
    name: 'Tempe',
    weight: '1 Package 500 Ons',
    price: '20.000',
    image: require('../assets/images/category3.png'),
  },
];
