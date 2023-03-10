import React from 'react';
import {Text, View} from 'react-native';
import {Info} from '../../pages/HomePage/HomePage';
import {styles} from './styles';

type Props = Omit<Info, 'id'>;

const InfoCard = ({description, title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default InfoCard;
