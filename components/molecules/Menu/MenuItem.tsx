import React from 'react';
import {Text, View} from 'react-native';
import {Tab} from './Menu';
import {styles} from './styles';

const MenuItem = ({icon, label, isActive}: Tab) => {
  return (
    <View style={styles.menuItemContainer}>
      {icon}
      <Text style={styles.menuItemLabel}>{label}</Text>
    </View>
  );
};

export default MenuItem;
