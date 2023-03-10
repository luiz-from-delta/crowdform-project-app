import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 80,
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
