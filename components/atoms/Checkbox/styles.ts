import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activeCheckboxContainer: {
    backgroundColor: '#770FDF',
    borderColor: '#770FDF',
  },

  checkboxContainer: {
    borderColor: '#E6E6E6',
    borderRadius: 2,
    borderWidth: 2,
    height: 20,
    position: 'relative',
    width: 20,
  },

  checkboxIcon: {
    height: 10,
    position: 'absolute',
    top: -3,
    left: -1,
    width: 10,
  },

  container: {
    alignItems: 'center',
    columnGap: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },

  label: {
    color: '#A0A0A0',
    flex: 1,
    fontFamily: 'Sora',
    fontSize: 12,
    fontWeight: '400',
  },
});
