import React from 'react';
import {Text, View} from 'react-native';
import {Fund} from '../../pages/HomePage/HomePage';
import {styles} from './styles';

type Props = Omit<Fund, 'id'>;

const FundCard = ({icon, percent, title, value}: Props) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.footer}>
        <Text>{value}</Text>
        <Text>{percent}</Text>
      </View>
    </View>
  );
};

export default FundCard;
