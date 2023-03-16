import React from 'react';

import {View} from 'react-native';

import HomeIcon from '../../../assets/images/home.svg';
import TradeIcon from '../../../assets/images/trade.svg';
import PortfolioIcon from '../../../assets/images/portfolio.svg';
import HomeActiveIcon from '../../../assets/images/home-active.svg';
import TradeActiveIcon from '../../../assets/images/trade-active.svg';
import PortfolioActiveIcon from '../../../assets/images/portfolio-active.svg';

import MenuItem from './MenuItem';
import {styles} from './styles';
import {Screen} from '../../../hooks/useNavigation';

type TabKey = 'home' | 'trade' | 'portfolio';

export type Tab = {
  icon: React.ReactNode;
  key: TabKey;
  label: string;
  screen?: Screen;
};

type Tabs = Tab[];

const getTabs = (currentTab: TabKey): Tabs => [
  {
    icon: currentTab === 'home' ? <HomeActiveIcon /> : <HomeIcon />,
    key: 'home',
    label: 'Home',
    screen: 'Home',
  },
  {
    icon: currentTab === 'trade' ? <TradeActiveIcon /> : <TradeIcon />,
    key: 'trade',
    label: 'Trade',
    screen: 'Trade',
  },
  {
    icon:
      currentTab === 'portfolio' ? <PortfolioActiveIcon /> : <PortfolioIcon />,
    key: 'portfolio',
    label: 'Portfolio',
  },
];

type Props = {
  currentTab: TabKey;
};

const Menu = ({currentTab}: Props) => {
  return (
    <View style={styles.menuContainer}>
      {getTabs(currentTab).map(({key, ...tab}) => (
        <MenuItem key={key} {...tab} />
      ))}
    </View>
  );
};

export default Menu;
