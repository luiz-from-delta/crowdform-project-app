import React from 'react';

import {View} from 'react-native';

import HomeIcon from '../../../assets/images/home.svg';
import TradeIcon from '../../../assets/images/trade.svg';
import PortfolioIcon from '../../../assets/images/portfolio.svg';

import MenuItem from './MenuItem';
import {styles} from './styles';

export type Tab = {
  icon: React.ReactNode;
  isActive?: boolean;
  key: string;
  label: string;
};

type Tabs = Tab[];

const tabs: Tabs = [
  {
    icon: <HomeIcon />,
    key: 'home',
    label: 'Home',
  },
  {
    icon: <TradeIcon />,
    key: 'trade',
    label: 'Trade',
  },
  {
    icon: <PortfolioIcon />,
    key: 'portfolio',
    label: 'Portfolio',
  },
];

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      {tabs.map(({key, ...tab}) => (
        <MenuItem key={key} {...tab} />
      ))}
    </View>
  );
};

export default Menu;
