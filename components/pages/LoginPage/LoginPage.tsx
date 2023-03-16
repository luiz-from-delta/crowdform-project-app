import React from 'react';
import {Text, View} from 'react-native';
import useNavigation from '../../../hooks/useNavigation';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import TextField from '../../atoms/TextField';
import Title from '../../atoms/Title';
import TopBar from '../../atoms/TopBar';

import {styles} from './styles';

const LoginPage = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

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
              Don't have an account yet?{' '}
              <Link screen="SignUp">Sign up here</Link>.
            </Text>
          }
          onPress={handleNavigateToHome}>
          Login
        </Button>
      </View>
    </>
  );
};

export default LoginPage;
