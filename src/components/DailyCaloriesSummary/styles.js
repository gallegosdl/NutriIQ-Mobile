// src/components/DailyCaloriesSummary/styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12
  },
  summaryBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16
  },
  summaryText: {
    fontSize: 14,
    lineHeight: 20
  },
  highlightBlue: {
    color: colors.primary
  },
  highlightGreen: {
    color: colors.success
  },
  deficit: {
    color: colors.error,
    fontWeight: '600'
  },
  surplus: {
    color: colors.warning,
    fontWeight: '600'
  },
  progressContainer: {
    marginBottom: 16
  },
  progressBarBackground: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4
  },
  progressLabel: {
    fontSize: 12,
    textAlign: 'right'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  gridItem: {
    width: '48%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8
  },
  label: {
    fontSize: 12,
    marginBottom: 4
  },
  valueBlue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary
  },
  valueGreen: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.success
  },
  valueRed: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.error
  },
  valueYellow: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.warning
  },
  valuePurple: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.purple
  },
  insightBox: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    alignItems: 'flex-start'
  },
  insightIcon: {
    fontSize: 20,
    marginRight: 8
  },
  insightContent: {
    flex: 1
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 4
  },
  insightText: {
    fontSize: 13,
    lineHeight: 18
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  emptyEmoji: {
    fontSize: 32,
    marginBottom: 8
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12
  },
  emptyChecklist: {
    marginTop: 8
  },
  checkItem: {
    fontSize: 13,
    color: colors.success,
    marginBottom: 4
  }
});
