import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
};

const Button = ({children}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
