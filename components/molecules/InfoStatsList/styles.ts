import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cell: {flex: 1},

  container: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 10,
    rowGap: 18,
    width: '100%',
  },

  row: {
    flexDirection: 'row',
    width: '100%',
  },

  titleContainer: {
    alignItems: 'center',
    columnGap: 4,
    flexDirection: 'row',
  },

  titleText: {
    color: '#A0A0A0',
    fontFamily: 'Sora',
    fontSize: 14,
  },

  value: {
    fontFamily: 'Sora',
    fontSize: 14,
  },
});
