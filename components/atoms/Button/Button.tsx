import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

type Props = {
  buttonStyle?: StyleProp<ViewStyle>;
  children: string;
  extra?: React.ReactNode;
  icon?: React.ReactNode;
  labelStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({
  buttonStyle,
  children,
  extra,
  icon,
  labelStyle,
  onPress = () => {},
  style,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
        {icon}
        <Text style={[styles.label, labelStyle]}>{children}</Text>
      </TouchableOpacity>
      {extra}
    </View>
  );
};

export default Button;
