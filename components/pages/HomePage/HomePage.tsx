import React from 'react';
import {View} from 'react-native';

import Menu from '../../molecules/Menu';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

const HomePage = () => {
  return (
    <View style={{height: '100%'}}>
      <TopBar />
      <View style={{flex: 1}} />
      <Menu />
    </View>
  );
};

export default HomePage;
