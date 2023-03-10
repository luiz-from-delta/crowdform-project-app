import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

import Menu from '../../molecules/Menu';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

import WindIcon from '../../../assets/images/wind.svg';
import SunIcon from '../../../assets/images/sun.svg';
import NatureIcon from '../../../assets/images/nature.svg';

import BellIcon from '../../../assets/images/bell.svg';
import UserIcon from '../../../assets/images/user.svg';

import FundCard from '../../molecules/FundCard';
import ComponentHeader from '../../atoms/ComponentHeader';
import LearnMoreCard from '../../molecules/LearnMoreCard';
import InfoCard from '../../molecules/InfoCard';
import PortfolioInfo from '../../molecules/PortfolioInfo';
import {toCurrency} from '../../../utils/number';

export type Fund = {
  data: number[];
  icon: React.ReactNode;
  id: string;
  percent: number;
  title: string;
  value: number;
};

type Funds = Fund[];

const funds: Funds = [
  {
    data: [5, 72, 34, 50, 19, 76, 72, 30],
    icon: <WindIcon />,
    id: '1',
    percent: 0.0351,
    title: 'Wind Fund',
    value: 1032.23,
  },
  {
    data: [97, 34, 60, 24, 45, 60, 8, 23],
    icon: <SunIcon />,
    id: '2',
    percent: -0.0013,
    title: 'Solar Fund',
    value: 986.61,
  },
  {
    data: [67, 23, 32, 57, 80, 32, 12, 45],
    icon: <NatureIcon />,
    id: '3',
    percent: 0.0351,
    title: 'Nature Fund',
    value: 1122.23,
  },
];

export type Info = {
  description: string;
  id: string;
  title: string;
};

type InfoList = Info[];

const info: InfoList = [
  {
    description:
      'Eu occaecat sint dolor officia. Culpa sunt aute culpa laborum aliqua pariatur est nisi ut officia. Ex qui reprehenderit culpa aute adipisicing esse eu.',
    id: '1',
    title: 'Why should you invest here?',
  },
  {
    description:
      'Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '2',
    title: 'Why should you invest here?',
  },
  {
    description:
      'Eiusmod duis adipisicing esse quis cillum do non. Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '3',
    title: 'Why should you invest here?',
  },
];

const HomePage = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <TopBar
        extra={<PortfolioInfo />}
        left={<UserIcon />}
        right={<BellIcon />}>
        <Text style={{fontSize: 14, fontWeight: '600'}}>
          Account: {toCurrency(1457.23)}
        </Text>
      </TopBar>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'flex-start',
          flexGrow: 1,
          paddingBottom: 24,
          rowGap: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <ComponentHeader>Funds</ComponentHeader>

        <FlatList
          data={funds}
          horizontal
          keyExtractor={fund => fund.id}
          renderItem={fund => <FundCard key={fund.item.id} {...fund.item} />}
          style={styles.horizontalList}
          contentContainerStyle={{
            paddingHorizontal: 18,
            columnGap: 18,
          }}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{paddingHorizontal: 20}}>
          <LearnMoreCard />
        </View>

        <FlatList
          data={info}
          horizontal
          keyExtractor={info => info.id}
          renderItem={info => <InfoCard key={info.item.id} {...info.item} />}
          style={styles.horizontalList}
          contentContainerStyle={{
            paddingHorizontal: 18,
            columnGap: 18,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default HomePage;
