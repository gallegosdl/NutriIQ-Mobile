import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  listContainer: {
    paddingBottom: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cuisineButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  cuisineButtonSelected: {
    backgroundColor: colors.primary,
  },
  cuisineButtonUnselected: {
    backgroundColor: colors.surfaceVariant,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cuisineText: {
    fontSize: 16,
  },
  cuisineTextSelected: {
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
  cuisineTextUnselected: {
    color: colors.textSecondary,
  },
});
