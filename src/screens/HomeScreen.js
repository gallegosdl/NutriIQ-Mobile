// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import HouseholdBox from '../components/HouseholdBox';
import BuildMealPlanWithPantryButton from '../components/BuildMealPlanWithPantryButton';
import MealPreferences from '../components/MealPreferences';
import PreferredFoods from '../components/PreferredFoods';
import AvoidedFoods from '../components/AvoidedFoods';
import DietaryGoals from '../components/DietaryGoals';

export default function HomeScreen() {
  const [user] = useState({ name: 'Darrell', avatar_url: null });

  const preferences = {
    likes: 'Chicken, Rice, Broccoli',
    dislikes: 'Mushrooms, Seafood',
  };

  return (
    <View style={styles.mainContainer}>
      <Header user={user} />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
        <HouseholdBox
          user={user}
          householdData={{
            householdSize: 1,
            budget: 75,
            householdMembers: [{ id: 1, name: 'Darrell' }],
          }}
          handleChange={() => {}}
        />
      </View>

      <View style={styles.section}>
        <BuildMealPlanWithPantryButton
          isLoading={false}
          setIsPantryModalOpen={() => {}}
          handleBuildMealPlanWithPantry={() => {}}
          isBuildingWithPantry={false}
        />
      </View>

      <View style={styles.section}>
        <MealPreferences
          likes={preferences.likes}
          dislikes={preferences.dislikes}
          handleChange={() => {}}
        />
      </View>

      <View style={styles.section}>
        <PreferredFoods likes={preferences.likes} />
      </View>

      <View style={styles.section}>
        <AvoidedFoods dislikes={preferences.dislikes} />
      </View>

      <View style={styles.section}>
        <DietaryGoals
          dietOptions={{
            "Diet Types": ["High-Protein", "Low-Carb", "Keto"],
            "Health Goals": ["Weight Loss", "Heart-Healthy"],
            "Restrictions": ["Vegetarian", "Gluten-Free"]
          }}
          dietGoals={[]}
          toggleDietGoal={() => {}}
        />
      </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
});
