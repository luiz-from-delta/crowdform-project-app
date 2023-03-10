import React from 'react';
import {Text, View} from 'react-native';
import {toCurrency, toPercent} from '../../../utils/number';
import {styles} from './styles';

import ArrowDownIcon from '../../../assets/images/arrow-down.svg';
import ArrowUpIcon from '../../../assets/images/arrow-up.svg';
import CoinIcon from '../../../assets/images/coin.svg';

import Button from '../../atoms/Button';

const infoMock = {
  equityValue: 1245.23,
  percent: 0.3182,
};

const PortfolioInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Portfolio</Text>
        <View style={styles.infoData}>
          <Text style={styles.infoEquityValue}>
            {toCurrency(infoMock.equityValue)}
          </Text>
          <View style={styles.infoValues}>
            {infoMock.percent >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <Text
              style={[
                styles.infoPercent,
                {color: infoMock.percent >= 0 ? '#0FDF8F' : '#EE8688'},
              ]}>
              {toPercent(infoMock.percent)}
            </Text>
          </View>
        </View>
      </View>
      <Button
        buttonStyle={{backgroundColor: '#F7EFFF', minHeight: 36}}
        icon={<CoinIcon />}
        labelStyle={{color: '#770FDF', fontSize: 11}}
        style={{width: 130}}>
        Earn Rewards
      </Button>
    </View>
  );
};

export default PortfolioInfo;
