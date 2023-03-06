import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
};

const Title = ({children}: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
