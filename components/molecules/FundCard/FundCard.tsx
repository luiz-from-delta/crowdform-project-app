import React from 'react';
import {Text, View} from 'react-native';
import {toCurrency, toPercent} from '../../../utils/number';
import {Fund} from '../../pages/HomePage/HomePage';
import {styles} from './styles';

type Props = Omit<Fund, 'id'>;

const FundCard = ({icon, percent, title, value}: Props) => {
  const percentRange = percent >= 0 ? 'positive' : 'negative';

  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
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
