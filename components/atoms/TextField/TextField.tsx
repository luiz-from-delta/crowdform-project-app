import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {styles} from './styles';

type Props = {
  label: string;
  placeholder?: string;
} & Omit<Partial<TextInputProps>, 'placeholder'>;

const TextField = ({label, placeholder, ...props}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextField;
