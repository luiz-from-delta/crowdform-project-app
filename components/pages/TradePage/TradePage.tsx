import React, {useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

import Menu from '../../molecules/Menu';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

import WindIcon from '../../../assets/images/wind.svg';

import ComponentHeader from '../../atoms/ComponentHeader';
import FundInfo from '../../molecules/FundInfo';
import TabSelector from '../../molecules/TabSelector';
import InfoStatsList from '../../molecules/InfoStatsList';

export type Fund = {
  data: number[];
  icon: React.ReactNode;
  id: string;
  percent: number;
  title: string;
  value: number;
};

const fund: Fund = {
  data: [5, 72, 34, 50, 19, 76, 72, 30],
  icon: <WindIcon />,
  id: '1',
  percent: 0.0351,
  title: 'Wind Fund',
  value: 1032.23,
};

export type Info = {
  description: string;
  id: string;
  title: string;
  value: string;
};

export type InfoList = Info[];

const info: InfoList = [
  {
    description:
      'Eu occaecat sint dolor officia. Culpa sunt aute culpa laborum aliqua pariatur est nisi ut officia. Ex qui reprehenderit culpa aute adipisicing esse eu.',
    id: '1',
    title: 'AUM',
    value: '$430.88m',
  },
  {
    description:
      'Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '2',
    title: 'Issue Date',
    value: '18/04/2022',
  },
  {
    description:
      'Eiusmod duis adipisicing esse quis cillum do non. Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '3',
    title: 'Vintage Range',
    value: '2019 - 2022',
  },
  {
    description:
      'Eiusmod duis adipisicing esse quis cillum do non. Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '4',
    title: 'TER',
    value: '0.15%',
  },
  {
    description:
      'Eiusmod duis adipisicing esse quis cillum do non. Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '5',
    title: 'Price at Close',
    value: '$17.68',
  },
  {
    description:
      'Eiusmod duis adipisicing esse quis cillum do non. Ex qui reprehenderit culpa aute adipisicing esse eu. Eiusmod duis adipisicing esse quis cillum do non.',
    id: '5',
    title: 'Price at Open',
    value: '$17.74',
  },
];

const periods = ['1h', '1d', '1w', '1m', '1y', 'All'] as const;

type Period = (typeof periods)[number];

const TradePage = () => {
  const [currentPeriod, setCurrentPeriod] = useState<Period>('1d');

  return (
    <View style={{width: '100%', height: '100%'}}>
      <TopBar>
        <View style={{alignItems: 'center', rowGap: 2}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Wind Fund</Text>
          <Text style={{color: '#808080', fontSize: 13, fontWeight: '600'}}>
            WFND
          </Text>
        </View>
      </TopBar>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'flex-start',
          flexGrow: 1,
          paddingBottom: 24,
          rowGap: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <FundInfo data={fund} />

        <TabSelector
          current={currentPeriod}
          setCurrent={setCurrentPeriod}
          tabs={periods.map(period => ({
            id: period,
            label: period,
          }))}
        />

        <ComponentHeader>Info & Stats</ComponentHeader>

        {/* <FlatList
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
        /> */}

        <InfoStatsList data={info} />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default TradePage;