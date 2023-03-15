import React from 'react';
import {Image, Text, View} from 'react-native';
import {Card} from '../../pages/TradePage/TradePage';
import {styles} from './styles';

type Props = Omit<Card, 'id'>;

const BreakdownCard = ({content, cover, logo}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={cover} />
      <View style={styles.infoContainer}>
        <Image source={logo} />
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default BreakdownCard;
