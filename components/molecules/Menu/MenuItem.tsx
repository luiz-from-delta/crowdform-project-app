import React from 'react';
import {Text, View} from 'react-native';
import useNavigation from '../../../hooks/useNavigation';
import {Tab} from './Menu';
import {styles} from './styles';

const MenuItem = ({icon, label, screen}: Tab) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.menuItemContainer}
      {...(screen && {onTouchEnd: () => navigation.navigate(screen)})}>
      {icon}
      <Text style={styles.menuItemLabel}>{label}</Text>
    </View>
  );
};

export default MenuItem;
