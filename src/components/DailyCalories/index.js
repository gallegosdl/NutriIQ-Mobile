import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import DailyCaloriesChart from '../DailyCaloriesChart';
import DailyCaloriesSummary from '../DailyCaloriesSummary';
import styles from './styles';

const DailyCalories = React.memo(({
  formData = {},
  handleChange = () => {},
  mealPlan,
  isFormMode = false,
  stravaActivities = [],
  fitbitActivities = [],
  userId
}) => {
  const targetCalories = formData.targetCalories || 2000;

  const getCurrentGoal = useCallback(() => {
    if (targetCalories <= 1800) return 'lose';
    if (targetCalories >= 2300) return 'gain';
    return 'maintain';
  }, [targetCalories]);

  const goals = useMemo(() => ({
    maintain: 2000,
    lose: 1800,
    gain: 2300
  }), []);

  const [calorieStats, setCalorieStats] = useState({
    meals: 0,
    fitbit: 0,
    strava: 0,
    totalBurned: 0,
    target: targetCalories,
    net: 0,
    balance: 0
  });

  const handleGoalChange = useCallback((newGoal) => {
    const newTarget = goals[newGoal];
    handleChange('targetCalories', newTarget);
  }, [goals, handleChange]);

  const chartData = useMemo(() => ({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    totals: [1800, 1900, 2000, 2100, 1950, 1850, 2050]
  }), []);

  const activityCalories = useMemo(() => ({
    strava: 300,
    fitbit: 200,
    total: 500
  }), []);

  useEffect(() => {
    setCalorieStats(prev => ({
      ...prev,
      target: targetCalories,
      balance: targetCalories - prev.meals
    }));
  }, [targetCalories]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.chartContainer}>
      <DailyCaloriesChart
        targetCalories={targetCalories}
        goals={goals}
        handleGoalChange={handleGoalChange}
        getCurrentGoal={getCurrentGoal}
        chartDataCalculation={chartData}
        activityCalories={activityCalories}
      />
      </View>
      <View style={styles.summaryContainer}>
        <DailyCaloriesSummary calorieStats={calorieStats} />
      </View>
    </ScrollView>
  );
});

export default DailyCalories;
