import React from 'react';
import {View} from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import Title from '../../atoms/Title';

const LoginPage = () => {
  return (
    <View>
      <Title>Login</Title>
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
