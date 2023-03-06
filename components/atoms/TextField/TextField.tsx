import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

import EyeIcon from '../../../assets/images/eye.svg';

import useToggle from '../../../hooks/useToggle';

type Props = {
  label: string;
  placeholder?: string;
  type?: 'default' | 'password';
} & Omit<Partial<TextInputProps>, 'placeholder'>;

const TextField = ({label, placeholder, type = 'default', ...props}: Props) => {
  const [hasSecureEntryProp, toggleHasSecureEntryProp] = useToggle(
    type === 'password',
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          placeholder={placeholder}
          secureTextEntry={hasSecureEntryProp}
          style={styles.inputElement}
        />
        {type === 'password' && (
          <View style={styles.inputIconContainer}>
            <TouchableOpacity onPress={toggleHasSecureEntryProp}>
              <EyeIcon />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TextField;
