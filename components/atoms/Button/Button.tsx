import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
  extra?: React.ReactNode;
};

const Button = ({children, extra}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>{children}</Text>
      </TouchableOpacity>
      {extra}
    </View>
  );
};

export default Button;
