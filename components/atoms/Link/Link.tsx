import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import useNavigation, {Screen} from '../../../hooks/useNavigation';
import {styles} from './styles';

type Props = {
  children: string;
  screen: Screen;
  style?: StyleProp<TextStyle>;
};

const Title = ({children, screen, style}: Props) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate(screen);
  }

  return (
    <Text onPress={handlePress} style={[styles.title, style]}>
      {children}
    </Text>
  );
};

export default Title;
