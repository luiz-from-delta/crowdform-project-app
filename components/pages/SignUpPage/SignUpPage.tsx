import React from 'react';
import {Text, View} from 'react-native';
import useNavigation from '../../../hooks/useNavigation';

import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import Link from '../../atoms/Link';
import TextField from '../../atoms/TextField';
import Title from '../../atoms/Title';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

const SignUpPage = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

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
        <Checkbox>
          I am over 18 years of age and I have read and agree to the Terms of
          Service and Privacy Policy.
        </Checkbox>
        <Button
          extra={
            <Text style={styles.extra}>
              Already have an account? <Link screen="Login">Log in here</Link>.
            </Text>
          }
          onPress={handleNavigateToHome}>
          Create Account
        </Button>
      </View>
    </>
  );
};

export default SignUpPage;
