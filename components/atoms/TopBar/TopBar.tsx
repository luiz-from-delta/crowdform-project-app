import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type Props = {
  children?: React.ReactNode;
  extra?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const TopBar = ({children, extra, left, right}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {left || <View />}
        {children}
        {right || <View />}
      </View>
      {extra}
    </View>
  );
};

export default TopBar;
