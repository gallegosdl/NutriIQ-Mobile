// src/components/MealPlanResults/index.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import SendToInstacartButton from '../SendToInstacartButton';
import RecipeList from '../RecipeList';
import CalendarMealPlan from '../CalendarMealPlan';
import styles from './styles';

const getDailyTotals = (meals) => {
  const totals = { calories: 0, protein_g: 0, carbs_g: 0, fat_g: 0 };
  Object.values(meals).forEach((meal) => {
    if (meal.nutrition) {
      totals.calories += Number(meal.nutrition.calories) || 0;
      totals.protein_g += meal.nutrition.protein_g || 0;
      totals.carbs_g += meal.nutrition.carbs_g || 0;
      totals.fat_g += meal.nutrition.fat_g || 0;
    }
  });
  return totals;
};

const MealPlanResults = ({
  mealPlan,
  viewMode,
  setViewMode,
  activeTab,
  setActiveTab,
  onDailyTotalsCalculated
}) => {
  const [imageErrors, setImageErrors] = useState({});

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '';
    const baseUrl = process.env.NODE_ENV === 'production'
      ? 'https://meal-planner-app-3m20.onrender.com'
      : '';
    return `${baseUrl}${imageUrl}`;
  };

  useEffect(() => {
    if (mealPlan?.days) {
      const dailyCalorieTotals = mealPlan.days.map(day => getDailyTotals(day.meals).calories);
      onDailyTotalsCalculated(dailyCalorieTotals);
    }
  }, [mealPlan, onDailyTotalsCalculated]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Your Meal Plan</Text>
        <SendToInstacartButton mealPlan={mealPlan} />
      </View>

      <View style={styles.viewModeButtons}>
        {['tabs', 'recipes', 'tiles', 'calendar'].map((mode) => (
          <TouchableOpacity
            key={mode}
            style={[
              styles.viewModeButton,
              viewMode === mode && styles.viewModeButtonActive
            ]}
            onPress={() => setViewMode(mode)}
          >
            <Text style={[
              styles.viewModeButtonText,
              viewMode === mode && styles.viewModeButtonTextActive
            ]}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)} View
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {viewMode === 'tabs' && (
        <>
          <View style={styles.tabRow}>
            {[1, 2, 3, 4, 5].map((dayNum) => (
              <TouchableOpacity
                key={dayNum}
                onPress={() => setActiveTab(dayNum)}
                style={[
                  styles.tabButton,
                  activeTab === dayNum && styles.tabButtonActive
                ]}
              >
                <Text style={[
                  styles.tabButtonText,
                  activeTab === dayNum && styles.tabButtonTextActive
                ]}>
                  Day {dayNum}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {mealPlan.days.map((day) => (
            <View key={day.day} style={[activeTab === day.day ? styles.activeDay : styles.hidden]}>
              <View style={styles.dayCard}>
                <Text style={styles.dayTitle}>
                  Day {day.day} - {getDailyTotals(day.meals).calories} kcal
                </Text>
                {Object.entries(day.meals).map(([mealType, meal]) => (
                  <View key={mealType} style={styles.mealSection}>
                    <Text style={styles.mealType}>{mealType}: {meal.name}</Text>
                    <View style={styles.mealContent}>
                      {meal.image_url && !imageErrors[`${day.day}-${mealType}`] && (
                        <Image
                          source={{ uri: getImageUrl(meal.image_url) }}
                          style={styles.mealImage}
                          onError={() => setImageErrors(prev => ({
                            ...prev,
                            [`${day.day}-${mealType}`]: true
                          }))}
                        />
                      )}
                      <View style={styles.mealDetails}>
                        {meal.nutrition && (
                          <View style={styles.nutritionBox}>
                            <Text style={styles.nutritionText}>Calories: {meal.nutrition.calories}</Text>
                            <Text style={styles.nutritionText}>Protein: {meal.nutrition.protein_g}g</Text>
                            <Text style={styles.nutritionText}>Carbs: {meal.nutrition.carbs_g}g</Text>
                            <Text style={styles.nutritionText}>Fat: {meal.nutrition.fat_g}g</Text>
                          </View>
                        )}
                        <Text style={styles.sectionTitle}>Ingredients:</Text>
                        {meal.ingredients.map((ing, i) => (
                          <Text key={i} style={styles.ingredientText}>
                            • {ing.name} - {ing.amount}{ing.cost ? ` ($${ing.cost})` : ''}
                          </Text>
                        ))}
                        <Text style={styles.sectionTitle}>Instructions:</Text>
                        <Text style={styles.instructions}>{meal.instructions}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </>
      )}

      {viewMode === 'recipes' && (
        <RecipeList recipes={mealPlan.recipes} />
      )}
      {viewMode === 'calendar' && (
        <CalendarMealPlan mealPlan={mealPlan} />
      )}
    </ScrollView>
  );
};

export default MealPlanResults;
