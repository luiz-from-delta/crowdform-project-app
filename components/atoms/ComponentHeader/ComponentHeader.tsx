import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ComponentHeader = ({children, icon, style}: Props) => {
  console.log({icon});
  return (
    <View style={[styles.container, style]}>
      <View>{icon}</View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default ComponentHeader;
