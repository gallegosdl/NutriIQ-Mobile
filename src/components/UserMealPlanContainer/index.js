import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import UserMealPlan from '../UserMealPlan';
import UserMealPlanCalendar from '../UserMealPlanCalendar';
import GuestView from '../../views/GuestView';
import { useTheme } from '../../contexts/ThemeContext';
//import api from '../../services/api';
import createStyles from './styles';

const UserMealPlanContainer = ({ userId, setUser, guestData = null }) => {
  const [activeTab, setActiveTab] = useState('report');
  const [mealPlanData, setMealPlanData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reportCardRef = useRef();
  const calendarRef = useRef();
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  const styles = createStyles(isDarkMode);

  // Fetch for logged-in user only
  /*useEffect(() => {
    if (userId && userId !== 'guest' && !guestData) {
      setLoading(true);
      setError(null);
      api
        .get(`/api/meal-plans/user-meal-plans/${userId}`)
        .then((res) => setMealPlanData(res.data))
        .catch(() => setError('Failed to load meal plan.'))
        .finally(() => setLoading(false));
    }
  }, [userId, guestData]);*/

  // Load guest data directly if provided
  useEffect(() => {
    if (guestData) {
      setMealPlanData(guestData);
      setLoading(false);
      setError(null);
    }
  }, [guestData]);

  const handleRefresh = () => {
    if (activeTab === 'report' && reportCardRef.current) {
      reportCardRef.current.refresh();
    } else if (activeTab === 'calendar' && calendarRef.current) {
      calendarRef.current.refresh();
    }
  };

  if (!userId && !guestData) {
    return <GuestView setUser={setUser} />;
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Loading Meal Plan...</Text>
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
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab('report')}
          style={styles.tabButton(activeTab === 'report', isDarkMode)}
        >
          <Text style={styles.tabButtonText(activeTab === 'report', isDarkMode)}>Report Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('calendar')}
          style={styles.tabButton(activeTab === 'calendar', isDarkMode)}
        >
          <Text style={styles.tabButtonText(activeTab === 'calendar', isDarkMode)}>Calendar View</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {activeTab === 'report' ? (
          <UserMealPlan ref={reportCardRef} userId={userId} mealPlanData={mealPlanData} />
        ) : (
          <UserMealPlanCalendar ref={calendarRef} userId={userId} mealPlanData={mealPlanData} />
        )}
      </View>
    </View>
  );
};

export default UserMealPlanContainer;
