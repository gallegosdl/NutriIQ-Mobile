import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function StravaDisplay() {
  // MOCK DATA
  const data = {
    displayName: 'Darrell Gallegos',
    memberSince: '2021-05-01',
    activities: [
      {
        type: 'Run',
        distance: 8.3,
        calories: 620,
        duration: 52
      },
      {
        type: 'Bike',
        distance: 20.5,
        calories: 750,
        duration: 95
      },
      {
        type: 'Walk',
        distance: 3.0,
        calories: 180,
        duration: 40
      }
    ]
  };

  return (
    <View style={styles.card}>
      <Text style={styles.header}>🚴‍♂️ Strava Connected</Text>
      <Text style={styles.subheader}>Welcome, {data.displayName}</Text>
      <Text style={styles.meta}>Member Since: {data.memberSince}</Text>

      <Text style={styles.sectionTitle}>Recent Activities</Text>
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
}
