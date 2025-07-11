import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import moment from 'moment';
//import api from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';
import createStyles from './styles';

// Helper to always get array
const normalizeMealPlans = (data) => {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
};

const UserMealPlanCalendar = forwardRef(({ userId, mealPlanData }, ref) => {
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  const styles = createStyles(isDarkMode);

  const [mealPlans, setMealPlans] = useState(normalizeMealPlans(mealPlanData));
  const [loading, setLoading] = useState(!mealPlanData);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState(moment());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch
  /* const fetchMealPlans = async () => {
    if (!userId) return;

    try {
      setIsRefreshing(true);
      setError(null);

      const startDate = moment().startOf('week').format('YYYY-MM-DD');
      const endDate = moment().endOf('week').add(2, 'weeks').format('YYYY-MM-DD');

      const res = await api.get(`/api/meal-plans/user-meal-plans/${userId}?startDate=${startDate}&endDate=${endDate}`);
      setMealPlans(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load calendar data.');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };*/

  /*useImperativeHandle(ref, () => ({
    refresh: fetchMealPlans,
  }));

  useEffect(() => {
    if (!mealPlanData && userId) {
      fetchMealPlans();
    }
  }, [userId]);*/

  // Handle prop updates
  useEffect(() => {
    setMealPlans(normalizeMealPlans(mealPlanData));
  }, [mealPlanData]);

  // Events on current day
  const getMealsForCurrentDate = () => {
    const dateStr = currentDate.format('YYYY-MM-DD');
    const meals = [];

    normalizeMealPlans(mealPlans).forEach(plan => {
      const dayData = plan.dates?.[dateStr];
      if (dayData && dayData.meals) {
        Object.entries(dayData.meals).forEach(([mealType, meal]) => {
          meals.push({
            id: `${dateStr}-${mealType}`,
            mealType,
            meal,
          });
        });
      }
    });

    return meals;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={{ color: '#3b82f6' }}>Loading Calendar...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorBox}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const mealsToday = getMealsForCurrentDate();

  return (
    <ScrollView style={styles.container}>
      {/* Date Navigation */}
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={() => setCurrentDate(prev => moment(prev).subtract(1, 'day'))}>
          <Text style={styles.refreshText}>◀</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.dateText}>{currentDate.format('dddd')}</Text>
          <Text style={styles.dateSubText}>{currentDate.format('MMMM Do, YYYY')}</Text>
        </View>
        <TouchableOpacity onPress={() => setCurrentDate(prev => moment(prev).add(1, 'day'))}>
          <Text style={styles.refreshText}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Refresh */}
      {/*<TouchableOpacity style={styles.refreshButton} onPress={fetchMealPlans} disabled={isRefreshing}>
        <Text style={styles.refreshText}>{isRefreshing ? 'Refreshing...' : 'Refresh Data'}</Text>
      </TouchableOpacity>*/}

      {/* Meals List */}
      {mealsToday.length === 0 ? (
        <Text style={[styles.refreshText, { textAlign: 'center', marginTop: 16 }]}>
          No meals planned for this date.
        </Text>
      ) : (
        mealsToday.map((event) => (
          <View key={event.id} style={[styles.mobileCard, {
            borderLeftWidth: 4,
            borderLeftColor:
              event.mealType === 'breakfast' ? '#fbbf24'
                : event.mealType === 'lunch' ? '#10b981'
                : '#3b82f6',
          }]}>
            <Text style={styles.mealTypeText}>{event.mealType}</Text>
            <Text style={styles.mealTitle}>{event.meal?.recipe?.name || 'Unknown meal'}</Text>
            {event.meal?.plannedMacros && (
              <>
                <View style={styles.macroRow}>
                  <Text style={styles.macroLabel}>Calories:</Text>
                  <Text style={styles.macroValue}>{event.meal.plannedMacros.calories} kcal</Text>
                </View>
                <View style={styles.macroRow}>
                  <Text style={styles.macroLabel}>Protein:</Text>
                  <Text style={styles.macroValue}>{event.meal.plannedMacros.protein_g}g</Text>
                </View>
                <View style={styles.macroRow}>
                  <Text style={styles.macroLabel}>Carbs:</Text>
                  <Text style={styles.macroValue}>{event.meal.plannedMacros.carbs_g}g</Text>
                </View>
                <View style={styles.macroRow}>
                  <Text style={styles.macroLabel}>Fat:</Text>
                  <Text style={styles.macroValue}>{event.meal.plannedMacros.fat_g}g</Text>
                </View>
              </>
            )}
          </View>
        ))
      )}
    </ScrollView>
  );
});

export default UserMealPlanCalendar;
