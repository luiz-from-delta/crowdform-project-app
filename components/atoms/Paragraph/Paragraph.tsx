import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
};

const Paragraph = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Paragraph;
