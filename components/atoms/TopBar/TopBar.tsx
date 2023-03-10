import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type Props = {
  children?: React.ReactNode;
  extra?: React.ReactNode;
};

const TopBar = ({children, extra}: Props) => {
  return (
    <View style={styles.container}>
      {children && <View style={styles.header}>{children}</View>}
      {extra}
    </View>
  );
};

export default TopBar;
