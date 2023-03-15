import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {toCurrency, toPercent} from '../../../utils/number';
import {styles} from './styles';

import ArrowDownIcon from '../../../assets/images/arrow-down.svg';
import ArrowUpIcon from '../../../assets/images/arrow-up.svg';

import {Fund} from '../../pages/TradePage/TradePage';

type Props = {
  data: Fund;
  style?: StyleProp<ViewStyle>;
};

const FundInfo = ({data, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.infoData}>
        <Text style={styles.infoEquityValue}>{toCurrency(data.value)}</Text>
        <View style={styles.infoValues}>
          {data.percent >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          <Text
            style={[
              styles.infoPercent,
              {color: data.percent >= 0 ? '#0FDF8F' : '#EE8688'},
            ]}>
            {toPercent(data.percent)}
          </Text>
        </View>
      </View>
      <Text style={styles.infoEquityValue}>2022</Text>
    </View>
  );
};

export default FundInfo;
