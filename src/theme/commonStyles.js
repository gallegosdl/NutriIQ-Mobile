import { StyleSheet } from 'react-native';
import { colors } from './colors';


export const commonStyles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
