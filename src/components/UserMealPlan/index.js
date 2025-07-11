import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
//import api from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';
import createStyles from './styles';

const UserMealPlan = forwardRef(({ userId, mealPlanData }, ref) => {
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  const styles = createStyles(isDarkMode);

  const [mealPlans, setMealPlans] = useState(
    mealPlanData
      ? Array.isArray(mealPlanData) ? mealPlanData : [mealPlanData]
      : []
  );
  const [loading, setLoading] = useState(!mealPlanData);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({});
  const [showChartView, setShowChartView] = useState(true);

  // Fetch meals
  /*const fetchMealPlans = async () => {
    if (!userId) return;

    try {
      setLoading(true);
      const res = await api.get(`/api/meal-plans/user-meal-plans/${userId}`);
      setMealPlans(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load meal plans.');
    } finally {
      setLoading(false);
    }
  };*/

  /*useImperativeHandle(ref, () => ({
    refresh: fetchMealPlans,
  }));*/

  /*useEffect(() => {
    if (!mealPlanData && userId) {
      //fetchMealPlans();
    }
  }, [userId]);*/

  useEffect(() => {
    if (!mealPlanData) {
      setMealPlans([]);
    } else if (Array.isArray(mealPlanData)) {
      setMealPlans(mealPlanData);
    } else {
      setMealPlans([mealPlanData]);
    }
  }, [mealPlanData]);

  // Calculate stats
  useEffect(() => {
    if (!mealPlans || mealPlans.length === 0) return;
    let total = 0;
    let cal = 0, protein = 0, carbs = 0, fat = 0;

    mealPlans.forEach(plan => {
      Object.values(plan.dates || {}).forEach(day => {
        Object.values(day.meals || {}).forEach(meal => {
          if (meal.plannedMacros) {
            cal += meal.plannedMacros.calories || 0;
            protein += meal.plannedMacros.protein_g || 0;
            carbs += meal.plannedMacros.carbs_g || 0;
            fat += meal.plannedMacros.fat_g || 0;
            total += 1;
          }
        });
      });
    });

    if (total > 0) {
      setStats({
        totalMeals: total,
        averageCalories: Math.round(cal / total),
        averageProtein: Math.round(protein / total),
        averageCarbs: Math.round(carbs / total),
        averageFat: Math.round(fat / total),
      });
    }
  }, [mealPlans]);

  // Chart data
  const generateChartData = () => {
    const labels = [];
    const calories = [];
    const protein = [];
    const carbs = [];
    const fat = [];
  
    mealPlans.forEach(plan => {
      Object.entries(plan.dates || {}).forEach(([date, day]) => {
        Object.entries(day.meals || {}).forEach(([type, meal]) => {
          const macros = meal?.plannedMacros;
          if (!macros) return;
  
          // Validate all numbers
          const cal = Number(macros.calories);
          const prot = Number(macros.protein_g);
          const carb = Number(macros.carbs_g);
          const f = Number(macros.fat_g);
  
          if (
            !isFinite(cal) ||
            !isFinite(prot) ||
            !isFinite(carb) ||
            !isFinite(f)
          ) {
            console.warn(`Skipping meal with invalid macros:`, meal);
            return;
          }
  
          labels.push(`${type[0].toUpperCase()} ${date.slice(5)}`);
          calories.push(cal);
          protein.push(prot);
          carbs.push(carb);
          fat.push(f);
        });
      });
    });
  
    if (labels.length === 0) {
      console.warn('No valid chart data available');
      return {
        labels: ['No Data'],
        datasets: [
          { data: [0], color: () => 'rgba(200,200,200,1)', strokeWidth: 2 }
        ],
        legend: ['No Data']
      };
    }
  
    return {
      labels,
      datasets: [
        { data: calories, color: () => 'rgba(75, 192, 192, 1)', strokeWidth: 2 },
        { data: protein, color: () => 'rgba(255, 99, 132, 1)', strokeWidth: 2 },
        { data: carbs, color: () => 'rgba(54, 162, 235, 1)', strokeWidth: 2 },
        { data: fat, color: () => 'rgba(255, 206, 86, 1)', strokeWidth: 2 }
      ],
      legend: ['Calories', 'Protein', 'Carbs', 'Fat']
    };
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={{ color: '#3b82f6' }}>Loading Meal Plan...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meal Report</Text>
        {/*<TouchableOpacity style={styles.refreshButton} onPress={fetchMealPlans}>
          <Text style={styles.toggleText}>Refresh</Text>
        </TouchableOpacity>*/}
      </View>

      <ScrollView>
        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Total Meals</Text>
            <Text style={styles.summaryValue}>{stats.totalMeals || 0}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Avg. Calories</Text>
            <Text style={[styles.summaryValue, { color: 'rgb(75,192,192)' }]}>{stats.averageCalories || 0}g</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Avg. Protein</Text>
            <Text style={[styles.summaryValue, { color: 'rgb(255,99,132)' }]}>{stats.averageProtein || 0}g</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Avg. Carbs</Text>
            <Text style={[styles.summaryValue, { color: 'rgb(54,162,235)' }]}>{stats.averageCarbs || 0}g</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Avg. Fat</Text>
            <Text style={[styles.summaryValue, { color: 'rgb(255,206,86)' }]}>{stats.averageFat || 0}g</Text>
          </View>
        </View>

        {showChartView && (
          <View style={styles.chartContainer}>
            <LineChart
              data={generateChartData()}
              width={Dimensions.get('window').width - 32}
              height={220}
              chartConfig={{
                backgroundColor: isDarkMode ? '#252B3B' : '#ffffff',
                backgroundGradientFrom: isDarkMode ? '#252B3B' : '#ffffff',
                backgroundGradientTo: isDarkMode ? '#252B3B' : '#ffffff',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: () => (isDarkMode ? '#e5e7eb' : '#111827'),
              }}
              bezier
              style={{ borderRadius: 16 }}
            />
          </View>
        )}

        <TouchableOpacity style={styles.toggleButton} onPress={() => setShowChartView(!showChartView)}>
          <Text style={styles.toggleText}>{showChartView ? 'Hide Chart' : 'Show Chart'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
});

export default UserMealPlan;
