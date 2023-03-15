import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    rowGap: 10,
    width: '100%',
  },

  infoData: {
    columnGap: 4,
  },

  infoEquityValue: {
    fontFamily: 'Sora',
    fontSize: 24,
    fontWeight: '600',
  },

  infoPercent: {
    fontFamily: 'Sora',
    fontSize: 14,
  },

  infoValues: {
    alignItems: 'center',
    columnGap: 3,
    flexDirection: 'row',
    paddingBottom: 3,
    paddingLeft: 2,
  },
});
