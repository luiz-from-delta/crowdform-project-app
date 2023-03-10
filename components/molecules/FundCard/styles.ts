import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderColor: '#E6E6E6',
    borderRadius: 4,
    borderWidth: 1,
    display: 'flex',
    height: 160,
    justifyContent: 'center',
    padding: 10,
    rowGap: 10,
    width: 152,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  footerText: {
    fontFamily: 'Sora',
    fontSize: 14,
  },

  negative: {
    color: '#EE8688',
  },

  percentContainer: {
    alignItems: 'center',
    columnGap: 1,
    flexDirection: 'row',
  },

  positive: {
    color: '#0FDF8F',
  },

  title: {
    fontFamily: 'Sora',
    fontSize: 12,
    fontWeight: '600',
  },
});
