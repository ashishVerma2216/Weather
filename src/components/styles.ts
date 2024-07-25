import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  listHeading: {
    margin: 10,
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000',
  },
  itemContainer: {
    paddingBottom: 8,
    marginHorizontal: 10,
  },
  listSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {width: 32, height: 32, marginHorizontal: 8},
  text: {gap: 10, flexDirection: 'row'},
});
