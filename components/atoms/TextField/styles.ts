import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    rowGap: 5,
    width: '100%',
  },

  inputContainer: {
    height: 58,
    position: 'relative',
    width: '100%',
  },

  inputElement: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    color: '#000000',
    fontFamily: 'Sora',
    fontSize: 14,
    height: 58,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },

  inputIconContainer: {
    height: 20,
    position: 'absolute',
    right: 10,
    top: 19,
    width: 20,
  },

  label: {
    color: '#A0A0A0',
    fontFamily: 'Sora',
    fontSize: 11,
    fontWeight: '500',
  },
});
