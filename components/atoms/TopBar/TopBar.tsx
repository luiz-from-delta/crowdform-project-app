import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type Props = {
  children?: React.ReactNode;
};

const Button = ({children}: Props) => {
  return (
    <View style={styles.container}>
      {children && <View style={styles.header}>{children}</View>}
    </View>
  );
};

export default Button;
