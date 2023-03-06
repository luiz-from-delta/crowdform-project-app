import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderColor: '#E6E6E6',
    borderRadius: 4,
    borderWidth: 1,
    display: 'flex',
    height: 145,
    justifyContent: 'center',
    padding: 10,
    rowGap: 14,
    width: 140,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  title: {
    fontFamily: 'Sora',
    fontSize: 12,
    fontWeight: '600',
  },
});
