import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import Title from '../../atoms/Title';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

const LoginPage = () => {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <Title>Login</Title>
        <TextField
          keyboardType="email-address"
          label="Email"
          placeholder="Type your email here"
        />
        <TextField
          label="Password"
          placeholder="Minimum 8 characters"
          type="password"
        />
        <Button
          extra={
            <Text style={styles.extra}>
              Don't have an account yet? Sign up here.
            </Text>
          }>
          Login
        </Button>
      </View>
    </>
  );
};

export default LoginPage;
