import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation as useReactNavigation} from '@react-navigation/core';

export type Screen = 'Home' | 'Login' | 'SignUp' | 'Trade';

type RootStackParamList = {
  [K in Screen]: undefined;
};

type Route = NativeStackNavigationProp<RootStackParamList>;

export default function useNavigation() {
  const navigation = useReactNavigation<Route>();

  return navigation;
}
