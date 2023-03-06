import React from 'react';
import {View} from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';

const LoginPage = () => {
  return (
    <View>
      <TextField
        keyboardType="email-address"
        label="Email"
        placeholder="Type your email here"
      />
      <TextField
        label="Password"
        placeholder="Minimum 8 characters"
        secureTextEntry
      />
      <Button>Login</Button>
    </View>
  );
};

export default LoginPage;
