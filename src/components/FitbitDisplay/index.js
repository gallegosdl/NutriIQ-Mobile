import React, { useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

const FitbitDisplay = React.memo(() => {
  const data = useMemo(() => ({
    displayName: 'Darrell Gallegos',
    memberSince: '2022-01-01',
    calories: 850,
    activities: [
      { type: 'Run', distance: 5.2, calories: 400, duration: 45 },
      { type: 'Walk', distance: 2.0, calories: 150, duration: 30 },
      { type: 'Workout', distance: 0, calories: 300, duration: 60 },
    ],
  }), []);

  return (
    <View>
      <Text style={styles.header}>🏃‍♂️ Fitbit Connected</Text>
      <Text style={styles.subheader}>Welcome, {data.displayName}</Text>
      <Text style={styles.meta}>Member Since: {data.memberSince}</Text>
      <Text style={styles.meta}>Calories Burned Today: {data.calories}</Text>

      <Text style={styles.sectionTitle}>Today's Activities</Text>
      <ScrollView horizontal style={styles.activityScroll} showsHorizontalScrollIndicator={false}>
        {data.activities.map((activity, index) => (
          <View key={index} style={styles.activityCard}>
            <Text style={styles.activityType}>{activity.type}</Text>
            <Text style={styles.activityDetail}>Distance: {activity.distance} km</Text>
            <Text style={styles.activityDetail}>Calories: {activity.calories} cal</Text>
            <Text style={styles.activityDetail}>Duration: {activity.duration} min</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
});

export default FitbitDisplay;
