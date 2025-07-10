// src/screens/HomeScreen.js
import React, { useState, useMemo, useCallback } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Header from '../components/Header';
import HouseholdBox from '../components/HouseholdBox';
import BuildMealPlanWithPantryButton from '../components/BuildMealPlanWithPantryButton';
import MealPreferences from '../components/MealPreferences';
import PreferredFoods from '../components/PreferredFoods';
import AvoidedFoods from '../components/AvoidedFoods';
import DietaryGoals from '../components/DietaryGoals';
import DailyCaloriesChart from '../components/DailyCaloriesChart';
import DailyCaloriesSummary from '../components/DailyCaloriesSummary';
import ApiKeyInput from '../components/ApiKeyInput';
import AppleAuthButton from '../components/AppleAuthButton';
import FacebookAuthButton from '../components/FacebookAuthButton';
import GoogleAuthButton from '../components/GoogleAuthButton';
import CalendarMealPlan from '../components/CalendarMealPlan';
import CuisinePreferences from '../components/CuisinePreferences';
import FitbitDisplay from '../components/FitbitDisplay';
import StravaDisplay from '../components/StravaDisplay';
import DailyCalories from '../components/DailyCalories';
import MacronutrientSplit from '../components/MacronutrientSplit';

import { yourMealPlanData } from '../data/mealPlanData';
import { yourCuisineData } from '../data/cuisineData';

const HomeScreen = React.memo(() => {
  const [user] = useState({ name: 'Darrell', avatar_url: null });
  const [cuisinePreferences, setCuisinePreferences] = useState(yourCuisineData);
  const [macros, setMacros] = useState({ protein: 40, carbs: 40, fat: 20 });

  const handleCuisineChange = useCallback((cuisine, value) => {
    setCuisinePreferences(prev =>
      prev.map(item =>
        item.cuisine === cuisine ? { ...item, selected: value } : item
      )
    );
  }, []);

  const handleMacroChange = useCallback((macro, value) => {
    setMacros(prev => ({
      ...prev,
      [macro]: parseInt(value, 10)
    }));
  }, []);

  const preferences = useMemo(() => ({
    likes: 'Chicken, Rice, Broccoli',
    dislikes: 'Mushrooms, Seafood',
  }), []);

  const renderHeader = useCallback(() => (
    <Header user={user} />
  ), [user]);

  const sections = useMemo(() => [
    { key: 'household', Component: <HouseholdBox user={user} householdData={{ householdSize: 1, budget: 75, householdMembers: [{ id: 1, name: 'Darrell' }] }} handleChange={() => {}} /> },
    { key: 'buildMealPlan', Component: <BuildMealPlanWithPantryButton isLoading={false} setIsPantryModalOpen={() => {}} handleBuildMealPlanWithPantry={() => {}} isBuildingWithPantry={false} /> },
    { key: 'mealPreferences', Component: <MealPreferences likes={preferences.likes} dislikes={preferences.dislikes} handleChange={() => {}} /> },
    { key: 'preferredFoods', Component: <PreferredFoods likes={preferences.likes} /> },
    { key: 'avoidedFoods', Component: <AvoidedFoods dislikes={preferences.dislikes} /> },
    { key: 'dietaryGoals', Component: <DietaryGoals dietOptions={{ "Diet Types": ["High-Protein", "Low-Carb", "Keto"], "Health Goals": ["Weight Loss", "Heart-Healthy"], "Restrictions": ["Vegetarian", "Gluten-Free"] }} dietGoals={[]} toggleDietGoal={() => {}} /> },
    { key: 'apiKeyInput', Component: <ApiKeyInput /> },
    { key: 'appleAuthButton', Component: <AppleAuthButton /> },
    { key: 'facebookAuthButton', Component: <FacebookAuthButton onPress={() => console.log('Facebook Auth pressed')} /> },
    { key: 'googleAuthButton', Component: <GoogleAuthButton onPress={() => console.log('Google Auth pressed')} /> },
    { key: 'calendarMealPlan', Component: <CalendarMealPlan mealPlan={yourMealPlanData} /> },
    { key: 'cuisinePreferences', Component: <CuisinePreferences cuisinePreferences={cuisinePreferences} handleCuisineChange={handleCuisineChange} /> },
    { key: 'fitbitDisplay', Component: <FitbitDisplay /> },
    { key: 'stravaDisplay', Component: <StravaDisplay /> },
    { key: 'dailyCalories', Component: <DailyCalories formData={{ targetCalories: 2000 }} /> },
    { key: 'macronutrientSplit', Component: <MacronutrientSplit macros={macros} handleMacroChange={handleMacroChange} /> },
  ], [user, preferences, cuisinePreferences, handleCuisineChange, macros, handleMacroChange]);

  const renderItem = useCallback(({ item }) => (
    <View style={styles.section}>
      {item.Component}
    </View>
  ), []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
        initialNumToRender={6}
        windowSize={12}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 16,
  },
  section: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
});
