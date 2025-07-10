// src/components/DailyCaloriesChart/styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  goalSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  label: {
    marginRight: 8,
    fontSize: 14
  },
  picker: {
    flex: 1,
    height: 40
  },
  goalTextContainer: {
    padding: 8,
    backgroundColor: colors.surfaceLight,
    borderRadius: 6
  },
  goalText: {
    fontSize: 14
  },
  chart: {
    borderRadius: 12
  },
  activityInfo: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  activityText: {
    fontSize: 12
  }
});
