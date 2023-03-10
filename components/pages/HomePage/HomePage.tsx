import React from 'react';
import {FlatList, View} from 'react-native';

import Menu from '../../molecules/Menu';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

import WindIcon from '../../../assets/images/wind.svg';
import SunIcon from '../../../assets/images/sun.svg';
import NatureIcon from '../../../assets/images/nature.svg';
import FundCard from '../../molecules/FundCard';
import ComponentHeader from '../../atoms/ComponentHeader';
import LearnMoreCard from '../../molecules/LearnMoreCard';
import InfoCard from '../../molecules/InfoCard';

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
    percent: 0.0351,
    title: 'Wind Fund',
    value: 1032.23,
  },
  {
    icon: <SunIcon />,
    id: '2',
    percent: -0.0013,
    title: 'Solar Fund',
    value: 986.61,
  },
  {
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

        <FlatList
          data={info}
          horizontal
          keyExtractor={info => info.id}
          renderItem={info => <InfoCard key={info.item.id} {...info.item} />}
          style={styles.horizontalList}
          contentContainerStyle={{
            paddingHorizontal: 20,
            columnGap: 20,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Menu />
    </View>
  );
};

export default HomePage;
