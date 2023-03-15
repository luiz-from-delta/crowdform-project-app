import React, {useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Menu from '../../molecules/Menu';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

import WindIcon from '../../../assets/images/wind.svg';

import cover1 from '../../../assets/images/cover-1.png';
import cover2 from '../../../assets/images/cover-2.png';
import cover3 from '../../../assets/images/cover-3.png';
import logo1 from '../../../assets/images/logo-1.png';
import logo2 from '../../../assets/images/logo-2.png';
import logo3 from '../../../assets/images/logo-3.png';

import PortfolioIcon from '../../../assets/images/portfolio.svg';

import ComponentHeader from '../../atoms/ComponentHeader';
import FundInfo from '../../molecules/FundInfo';
import TabSelector from '../../molecules/TabSelector';
import InfoStatsList from '../../molecules/InfoStatsList';
import BreakdownCard from '../../molecules/BreakdownCard';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';

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

const breakdowns = ['Highlighted', 'Value', 'Vintage', 'Registry'] as const;
const periods = ['1h', '1d', '1w', '1m', '1y', 'All'] as const;

type Breakdown = (typeof breakdowns)[number];
type Period = (typeof periods)[number];

export type Card = {
  content: string;
  cover: ImageSourcePropType;
  id: string;
  logo: ImageSourcePropType;
};

type Cards = Card[];

const cards: Cards = [
  {
    content:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
    cover: cover1,
    id: '1',
    logo: logo1,
  },
  {
    content:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
    cover: cover2,
    id: '2',
    logo: logo2,
  },
  {
    content:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
    cover: cover3,
    id: '3',
    logo: logo3,
  },
];

const TradePage = () => {
  const [currentBreakdown, setCurrentBreakdown] =
    useState<Breakdown>('Highlighted');
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
          paddingTop: 10,
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

        <ComponentHeader>Fund Breakdown</ComponentHeader>

        <TabSelector
          current={currentBreakdown}
          setCurrent={setCurrentBreakdown}
          tabs={breakdowns.map(breakdown => ({
            id: breakdown,
            label: breakdown,
          }))}
          underlined
        />

        <FlatList
          data={cards}
          horizontal
          keyExtractor={card => card.id}
          renderItem={card => (
            <BreakdownCard key={card.item.id} {...card.item} />
          )}
          style={styles.horizontalList}
          contentContainerStyle={{
            paddingHorizontal: 18,
            columnGap: 18,
          }}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.portfolioContainer}>
          <ComponentHeader
            icon={<PortfolioIcon />}
            style={{marginHorizontal: 0, marginBottom: 15}}>
            Your Portfolio
          </ComponentHeader>

          <FundInfo
            data={fund}
            style={{
              marginBottom: 12,
              paddingHorizontal: 2,
            }}
          />

          <View style={styles.portfolioButtons}>
            <Button
              buttonStyle={{
                backgroundColor: '#FFFFFF',
                borderColor: '#CFCFCF',
                borderWidth: 1,
              }}
              labelStyle={{
                color: '#770FDF',
              }}
              style={{
                flex: 1,
              }}>
              Sell
            </Button>
            <Button
              buttonStyle={{backgroundColor: '#0FDF8F'}}
              style={{flex: 1}}>
              Retire credits
            </Button>
          </View>

          <Text style={styles.text}>
            You've previously retired 28 credits of this asset
          </Text>

          <Paragraph>
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order. The information provided is
            not investment advice, and should not be used as a recommendation to
            buy or sell assets.
          </Paragraph>

          <Button style={{width: '100%'}}>Buy</Button>
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default TradePage;
