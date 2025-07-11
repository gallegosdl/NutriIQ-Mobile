// components/DailyCalories/styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  chartContainer: {
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: colors.surface,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  selectedGoal: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.surfaceLight,
    width: 140,
    height: 40,
    justifyContent: 'center'
  },
  summaryContainer: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: colors.surface,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  }
});
