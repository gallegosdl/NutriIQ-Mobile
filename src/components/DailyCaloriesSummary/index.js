// src/components/DailyCaloriesSummary/index.js
import React from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from 'react-native';
import styles from './styles';
import { colors } from '@theme/colors';

const DailyCaloriesSummary = React.memo(({ calorieStats }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  if (!calorieStats) return null;

  const {
    meals,
    fitbit,
    strava,
    totalBurned,
    target,
    net,
    balance
  } = calorieStats;

  const mealPercent = Math.min(100, (meals / target) * 100).toFixed(0);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? colors.surfaceDark : colors.surface }]}>
      {(meals > 0 || totalBurned > 0) ? (
        <>
          <View style={[styles.summaryBox, { borderColor: isDark ? colors.borderDark : colors.border }]}>
            <Text style={[styles.summaryText, { color: isDark ? colors.textLight : colors.text }]}>
              You consumed <Text style={styles.highlightBlue}>{meals} cal</Text> and burned{' '}
              <Text style={styles.highlightGreen}>{totalBurned} cal</Text>
              {` (`}
              {fitbit > 0 && `Fitbit ${fitbit} `}
              {fitbit > 0 && strava > 0 && `+ `}
              {strava > 0 && `Strava ${strava}`}
              {`)`}
              , resulting in a <Text style={net < 0 ? styles.deficit : styles.surplus}>
                {net < 0 ? 'Deficit' : 'Surplus'} of {Math.abs(net)} cal
              </Text> today.
            </Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBarBackground, { backgroundColor: isDark ? colors.surfaceDark : colors.surfaceLight }]}>
              <View style={[styles.progressBarFill, { width: `${mealPercent}%`, backgroundColor: colors.primary }]} />
            </View>
            <Text style={[styles.progressLabel, { color: isDark ? colors.textSecondary : colors.text }]}>
              Meals: {mealPercent}% of target
            </Text>
          </View>
          <View style={styles.grid}>
            <View style={[styles.gridItem, { backgroundColor: isDark ? colors.surfaceDark : colors.surfaceLight }]}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>Meals</Text>
              <Text style={styles.valueBlue}>{meals} cal</Text>
            </View>
            <View style={[styles.gridItem, { backgroundColor: isDark ? colors.surfaceDark : colors.surfaceLight }]}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>Burned</Text>
              <Text style={styles.valueGreen}>{totalBurned} cal</Text>
            </View>
            <View style={[styles.gridItem, { backgroundColor: isDark ? colors.surfaceDark : colors.surfaceLight }]}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>Net</Text>
              <Text style={net < 0 ? styles.valueRed : styles.valueYellow}>{net} cal</Text>
            </View>
            <View style={[styles.gridItem, { backgroundColor: isDark ? colors.surfaceDark : colors.surfaceLight }]}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>Balance</Text>
              <Text style={styles.valuePurple}>{balance} cal</Text>
            </View>
          </View>
          <View style={[styles.insightBox, { backgroundColor: isDark ? colors.primaryDarkFade : colors.primaryLightFade }]}>
            <Text style={styles.insightIcon}>💡</Text>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Daily Insight</Text>
              <Text style={[styles.insightText, { color: isDark ? colors.textSecondary : colors.text }]}>
                {net < 0
                  ? `You're in a ${Math.abs(net)} cal deficit today. This may lead to ~${(Math.abs(net) / 3500).toFixed(2)} lbs weight loss if maintained.`
                  : `You're in a ${net} cal surplus today. Consider ${net > 500 ? 'increasing' : 'maintaining'} your activity level to meet your goals.`}
              </Text>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>🏃‍♂️📊</Text>
          <Text style={[styles.emptyTitle, { color: isDark ? colors.textLight : colors.text }]}>
            Ready to Start Your Journey?
          </Text>
          <Text style={[styles.emptySubtitle, { color: isDark ? colors.textSecondary : colors.text }]}>
            Time to turn goals into reality! Generate your meal plan and connect your fitness trackers to see your daily metrics.
          </Text>
          <View style={styles.emptyChecklist}>
            <Text style={styles.checkItem}>✓ Generate a meal plan to track your nutrition</Text>
            <Text style={styles.checkItem}>✓ Connect Fitbit or Strava to log your activities</Text>
            <Text style={styles.checkItem}>✓ Watch your daily metrics transform!</Text>
          </View>
        </View>
      )}
    </View>
  );
});

export default DailyCaloriesSummary;
