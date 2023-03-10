import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    padding: 20,
    rowGap: 10,
    width: '100%',
  },

  infoContainer: {
    rowGap: 4,
  },

  infoData: {
    alignItems: 'flex-end',
    columnGap: 4,
    flexDirection: 'row',
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

  infoTitle: {
    fontFamily: 'Sora',
    fontSize: 12,
  },

  infoValues: {
    alignItems: 'center',
    columnGap: 3,
    flexDirection: 'row',
    paddingBottom: 3,
    paddingLeft: 2,
  },
});
