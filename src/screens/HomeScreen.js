// src/screens/HomeScreen.js
import React, { useState, useCallback } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import MealPlannerForm from '../views/MealPlannerForm';
import Header from '../components/Header';

const HomeScreen = () => {
  const [user, setUser] = useState({
    name: 'Darrell',
    avatar_url: null,
    id: 'darrell123'
  });

  const handleLogout = useCallback(() => {
    console.log('Logging out...');
    setUser(null);
  }, []);

  const handleMealPlanGenerated = useCallback(() => {
    console.log('Meal Plan has been generated!');
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header user={user} handleLogout={handleLogout} />
        <MealPlannerForm
          user={user}
          setUser={setUser}
          handleLogout={handleLogout}
          onMealPlanGenerated={handleMealPlanGenerated}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
