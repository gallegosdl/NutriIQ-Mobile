// src/views/MealPlannerForm/index.js
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';
import createStyles from './styles';

// Example: import subcomponents (to implement)
import HouseholdBox from '../../components/HouseholdBox';
import DietaryGoals from '../../components/DietaryGoals';
import DailyCalories from '../../components/DailyCalories';
import FitbitDisplay from '../../components/FitbitDisplay';
import StravaDisplay from '../../components/StravaDisplay';
import MealPreferences from '../../components/MealPreferences';
import PreferredFoods from '../../components/PreferredFoods';
import AvoidedFoods from '../../components/AvoidedFoods';
import UploadReceipt from '../../components/UploadReceipt';
import ApiKeyInput from '../../components/ApiKeyInput';
import { useWindowDimensions } from 'react-native';
import { colors } from '../../theme/colors';
import { useIsDarkMode } from '../../contexts/ThemeContext';
const MealPlannerForm = ({ user, onGenerateMealPlan }) => {
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [dietGoals, setDietGoals] = useState([]);
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  const styles = createStyles(isDarkMode);

  const [useStreaming, setUseStreaming] = useState(false);
  const [totalDays, setTotalDays] = useState(2);
  const [loading, setLoading] = useState(false);

  const toggleDietGoal = useCallback((goal) => {
    setDietGoals((prevGoals) =>
      prevGoals.includes(goal)
        ? prevGoals.filter((g) => g !== goal)
        : [...prevGoals, goal]
    );
  }, []);

  const handlePreferencesChange = useCallback((field, value) => {
    if (field === 'likes') setLikes(value);
    if (field === 'dislikes') setDislikes(value);
  }, []);

  const handleGenerate = () => {
    setLoading(true);
    // Simulate generation
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Meal Plan Generated', `Streaming: ${useStreaming}, Days: ${totalDays}`);
      if (onGenerateMealPlan) onGenerateMealPlan();
    }, 1500);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Household and Pantry */}
      <View style={styles.card}>
        <HouseholdBox user={user} />
      </View>

      {/* UserMealPlanContainer placeholder */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Your Meal Plan</Text>
        <Text style={styles.sectionDescription}>
          View and manage your generated meal plan here.
        </Text>
        {/* Insert <UserMealPlanContainer /> here in your real app */}
      </View>

      {/* Dietary Goals */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Dietary Goals</Text>
        <DietaryGoals 
          dietOptions={dietOptions}
          dietGoals={dietGoals}
          toggleDietGoal={toggleDietGoal}
        />
      </View>

      {/* Daily Calories */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Daily Calories</Text>
        <DailyCalories />
      </View>

      {/* Fitbit / Strava */}
      <View style={isSmallScreen ? styles.column : styles.row}>
        <View style={styles.cardHalf}>
          <FitbitDisplay />
        </View>
        <View style={styles.cardHalf}>
          <StravaDisplay />
        </View>
      </View>

      {/* Meal Preferences */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Meal Preferences</Text>
        <MealPreferences
          likes={likes}
          dislikes={dislikes}
          handleChange={handlePreferencesChange}
        />
        <PreferredFoods likes={likes} />
        <AvoidedFoods dislikes={dislikes} />
      </View>

      {/* Upload Receipt */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Upload Receipt</Text>
        <UploadReceipt />
      </View>

      {/* API Key Input */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>OpenAI API Key</Text>
        <ApiKeyInput />
      </View>

      {/* Streaming Controls */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionHeader}>Enable Streaming</Text>
          <Switch
            value={useStreaming}
            onValueChange={setUseStreaming}
            trackColor={{ false: '#9ca3af', true: '#facc15' }}
            thumbColor={useStreaming ? '#facc15' : '#f3f4f6'}
          />
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.inputLabel}>Days:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(totalDays)}
            onChangeText={(v) => setTotalDays(Number(v) || 1)}
          />
        </View>
        <Text style={styles.caption}>
          {useStreaming
            ? `Will generate ${totalDays} days using NEW streaming method`
            : 'Will use ORIGINAL generation method (2 days)'}
        </Text>
      </View>

      {/* Generate Button */}
      <TouchableOpacity
        onPress={handleGenerate}
        style={styles.generateButton}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.generateText}>Generate Your Meal Plan</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

MealPlannerForm.propTypes = {
  user: PropTypes.object,
  onGenerateMealPlan: PropTypes.func,
};

const dietOptions = {
  'Diet Types': [
    'High-Protein',
    'Low-Carb',
    'Low-Calorie',
    'Keto',
    'Paleo',
    'Mediterranean'
  ],
  'Health Goals': [
    'Heart-Healthy',
    'Weight Loss',
    'Muscle Gain',
    'Blood Sugar Control'
  ],
  'Restrictions': [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Pescatarian',
    'Nut-Free'
  ]
};

export default MealPlannerForm;
