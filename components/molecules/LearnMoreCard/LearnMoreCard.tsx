import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

import StatisticsVector from '../../../assets/images/statistics.svg';

const LearnMoreCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Learn more about carbon credits</Text>
        <Text style={styles.description}>Check out our top tips!</Text>
      </View>
      <StatisticsVector />
    </View>
  );
};

export default LearnMoreCard;
