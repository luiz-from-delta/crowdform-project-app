import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 5,
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
