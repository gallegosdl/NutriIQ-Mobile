// src/components/DailyCaloriesChart/index.js
import React, { useMemo } from 'react';
import { View, Text, Dimensions, ActivityIndicator, Picker, Platform } from 'react-native';
import styles from './styles';
import { useIsDarkMode } from '../../contexts/ThemeContext';
import { colors } from '../../theme/colors';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const DailyCaloriesChart = React.memo(({
  targetCalories,
  goals,
  handleGoalChange,
  getCurrentGoal,
  mealPlanLoading,
  chartDataCalculation,
  activityCalories
}) => {
  const isDark = useIsDarkMode();

  const { totals: mealCalories = [], labels: mealLabels = [] } = chartDataCalculation;

  const chartLabels = mealLabels.length > 0
    ? mealLabels
    : ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  const datasets = useMemo(() => {
    const baseData = [
      {
        data: new Array(chartLabels.length).fill(targetCalories),
        color: () => isDark ? colors.primaryLight : colors.primary,
        strokeWidth: 2,
        withDots: false
      }
    ];

    if (mealCalories.length) {
      baseData.unshift({
        data: mealCalories,
        color: () => isDark ? colors.accentLight : colors.accent,
        strokeWidth: 3
      });
    }

    return baseData;
  }, [mealCalories, chartLabels, targetCalories, isDark]);

  const chartConfig = {
    backgroundGradientFrom: isDark ? colors.surfaceDark : '#ffffff',
    backgroundGradientTo: isDark ? colors.surfaceDark : '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => isDark
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => isDark
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: isDark ? colors.accentLight : colors.accent
    },
    propsForBackgroundLines: {
      stroke: isDark ? colors.borderDark : colors.border
    }
  };

  return (
    <View style={[{ backgroundColor: isDark ? colors.surfaceDark : '#ffffff' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? colors.textLight : colors.text }]}>
          Daily Calories
        </Text>
        {mealPlanLoading && <ActivityIndicator size="small" color={colors.primary} />}
      </View>

      <View style={styles.goalSelector}>
        <Text style={[styles.label, { color: isDark ? colors.textSecondary : colors.text }]}>
          Goal:
        </Text>
        {Platform.OS === 'ios' ? (
          <Picker
            selectedValue={getCurrentGoal()}
            style={[styles.picker, { color: isDark ? colors.textLight : colors.text }]}
            onValueChange={handleGoalChange}
          >
            <Picker.Item label="Maintain" value="maintain" />
            <Picker.Item label="Lose" value="lose" />
            <Picker.Item label="Gain" value="gain" />
          </Picker>
        ) : (
          <View style={[styles.goalTextContainer, { backgroundColor: isDark ? colors.surfaceDark : '#ffffff' }]}>
            <Text style={[styles.goalText, { color: isDark ? colors.textLight : colors.text }]}>{getCurrentGoal()}</Text>
          </View>
        )}
      </View>

      <LineChart
        data={{
          labels: chartLabels,
          datasets
        }}
        width={screenWidth - 32}
        height={220}
        yAxisSuffix=" cal"
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        fromZero
      />

      <View style={styles.activityInfo}>
        <Text style={[styles.activityText, { color: isDark ? colors.textSecondary : colors.text }]}>
          Strava: {activityCalories?.strava || 0} cal
        </Text>
        <Text style={[styles.activityText, { color: isDark ? colors.textSecondary : colors.text }]}>
          Fitbit: {activityCalories?.fitbit || 0} cal
        </Text>
      </View>
    </View>
  );
});

export default DailyCaloriesChart;
