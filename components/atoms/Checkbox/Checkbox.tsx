import React from 'react';
import {Text, View} from 'react-native';
import useToggle from '../../../hooks/useToggle';
import {styles} from './styles';

import CheckIcon from '../../../assets/images/check.svg';

type Props = {
  children: React.ReactNode;
};

const Checkbox = ({children}: Props) => {
  const [isChecked, toggleIsChecked] = useToggle(true);

  return (
    <View onTouchEnd={toggleIsChecked} style={styles.container}>
      <View
        style={[
          styles.checkboxContainer,
          isChecked && styles.activeCheckboxContainer,
        ]}>
        {isChecked && (
          <View style={styles.checkboxIcon}>
            <CheckIcon width={18} />
          </View>
        )}
      </View>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
};

export default Checkbox;
