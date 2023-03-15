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
  underlined?: boolean;
};

const TabSelector = ({
  current,
  setCurrent,
  tabs,
  underlined = false,
}: Props) => {
  return (
    <View style={[styles.container, underlined && styles.underlinedContainer]}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.button,
            tab.id === current && styles.activeButton,
            underlined && styles.underlinedButton,
            underlined && tab.id === current && styles.underlinedActiveButton,
          ]}
          onPress={() => setCurrent(tab.id)}>
          <Text
            style={[
              styles.buttonLabel,
              tab.id === current && styles.activeButtonLabel,
              underlined &&
                tab.id === current &&
                styles.underlinedActiveButtonLabel,
            ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSelector;
