import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: colors.text,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 1,
  },
  clearButton: {
    padding: 8,
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.errorBackground,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  errorText: {
    color: colors.error,
    marginLeft: 8,
    fontSize: 14,
  },
  loadingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryBackground,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  loadingText: {
    color: colors.primary,
    marginLeft: 8,
    fontSize: 14,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
