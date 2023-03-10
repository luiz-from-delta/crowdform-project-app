import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#770FDF',
    borderRadius: 10,
    columnGap: 24,
    display: 'flex',
    flexDirection: 'row',
    height: 115,
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },

  description: {
    color: '#FFFFFF',
    fontFamily: 'Sora',
    fontSize: 12,
  },

  textContainer: {
    display: 'flex',
    flex: 1,
    rowGap: 8,
  },

  title: {
    color: '#FFFFFF',
    fontFamily: 'Sora',
    fontSize: 16,
    fontWeight: '600',
  },
});
