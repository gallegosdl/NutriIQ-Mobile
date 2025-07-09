// src/components/DietaryGoals/styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { commonStyles } from '../../theme/commonStyles';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  categoryContainer: {
    marginBottom: 12,
  },
  category: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
    marginBottom: 8,
  },
  inactiveButton: {
    backgroundColor: colors.surface,
  },
  activeButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.text,
  },
  activeButtonText: {
    color: colors.card,
  },
});
