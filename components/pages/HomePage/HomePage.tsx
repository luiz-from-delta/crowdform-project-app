import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';

import Menu from '../../molecules/Menu';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

import WindIcon from '../../../assets/images/wind.svg';
import SunIcon from '../../../assets/images/sun.svg';
import NatureIcon from '../../../assets/images/nature.svg';
import FundCard from '../../molecules/FundCard';
import ComponentHeader from '../../atoms/ComponentHeader';
import LearnMoreCard from '../../molecules/LearnMoreCard';

export type Fund = {
  icon: React.ReactNode;
  id: string;
  percent: number;
  title: string;
  value: number;
};

type Funds = Fund[];

const funds: Funds = [
  {
    icon: <WindIcon />,
    id: '1',
    percent: 3.51,
    title: 'Wind Fund',
    value: 1032.23,
  },
  {
    icon: <SunIcon />,
    id: '2',
    percent: -0.13,
    title: 'Solar Fund',
    value: 986.61,
  },
  {
    icon: <NatureIcon />,
    id: '3',
    percent: 3.51,
    title: 'Nature Fund',
    value: 1122.23,
  },
];

const HomePage = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <TopBar />
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          rowGap: 20,
        }}>
        <ComponentHeader>Funds</ComponentHeader>

        <FlatList
          data={funds}
          horizontal
          keyExtractor={fund => fund.id}
          renderItem={fund => <FundCard key={fund.item.id} {...fund.item} />}
          style={styles.horizontalList}
          contentContainerStyle={{
            paddingHorizontal: 20,
            columnGap: 20,
          }}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{paddingHorizontal: 20}}>
          <LearnMoreCard />
        </View>
      </View>
      <Menu />
    </View>
  );
};

export default HomePage;
