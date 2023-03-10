import React from 'react';
import {Text, View} from 'react-native';
import {toCurrency, toPercent} from '../../../utils/number';
import LineChart from '../../atoms/LineChart';
import {Fund} from '../../pages/HomePage/HomePage';
import {styles} from './styles';

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
        <Text style={[styles.footerText, styles[percentRange]]}>
          {toPercent(percent)}
        </Text>
      </View>
    </View>
  );
};

export default FundCard;
