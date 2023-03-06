import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import Title from '../../atoms/Title';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

const SignUpPage = () => {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <Title>Create your account</Title>
        <TextField label="First Name" placeholder="Type your first name here" />
        <TextField label="Last Name" placeholder="Type your second name here" />
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
              Already have an account? Log in here.
            </Text>
          }>
          Create Account
        </Button>
      </View>
    </>
  );
};

export default SignUpPage;
