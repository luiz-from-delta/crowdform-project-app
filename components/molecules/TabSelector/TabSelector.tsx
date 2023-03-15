import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type Tab = {
  id: string;
  label: string;
};

type Tabs = Tab[];

type Props = {
  current: string;
  setCurrent: Function;
  tabs: Tabs;
};

const TabSelector = ({current, setCurrent, tabs}: Props) => {
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.button, tab.id === current && styles.activeButton]}
          onPress={() => setCurrent(tab.id)}>
          <Text
            style={[
              styles.buttonLabel,
              tab.id === current && styles.activeButtonLabel,
            ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSelector;
