// src/components/GoogleAuthButton/styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '500'
  },
  loadingText: {
    fontSize: 16,
    color: colors.textSecondary
  }
});
