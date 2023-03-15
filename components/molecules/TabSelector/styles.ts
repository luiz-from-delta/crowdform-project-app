import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: '#F7EFFF',
  },

  activeButtonLabel: {color: '#770FDF'},

  button: {
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    height: 35,
    justifyContent: 'center',
    width: 35,
  },

  buttonLabel: {
    color: '#A0A0A0',
    fontFamily: 'Sora',
    fontSize: 15,
    fontWeight: '600',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
});
