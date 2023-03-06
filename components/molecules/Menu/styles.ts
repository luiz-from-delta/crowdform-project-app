import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    left: 0,
    position: 'absolute',
    width: '100%',
  },

  menuItemContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    rowGap: 4,
  },

  menuItemLabel: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '700',
  },
});
