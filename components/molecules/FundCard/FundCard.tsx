import React from 'react';
import {Text, View} from 'react-native';
import {toCurrency, toPercent} from '../../../utils/number';
import LineChart from '../../atoms/LineChart';
import {Fund} from '../../pages/HomePage/HomePage';
import {styles} from './styles';

import ArrowDownIcon from '../../../assets/images/arrow-down.svg';
import ArrowUpIcon from '../../../assets/images/arrow-up.svg';

type Props = Omit<Fund, 'id'>;

const FundCard = ({data, icon, percent, title, value}: Props) => {
  const percentRange = percent >= 0 ? 'positive' : 'negative';

  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <LineChart data={data} percentRange={percentRange} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>{toCurrency(value)}</Text>
        <View style={styles.percentContainer}>
          {percentRange === 'positive' ? <ArrowUpIcon /> : <ArrowDownIcon />}
          <Text style={[styles.footerText, styles[percentRange]]}>
            {toPercent(percent)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FundCard;
