// src/components/AppleAuthButton/styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    elevation: 2
  },
  button: {
    width: '100%',
    height: 44,
  }
});
