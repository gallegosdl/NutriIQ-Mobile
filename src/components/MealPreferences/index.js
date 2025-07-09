import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { commonStyles } from '../../theme/commonStyles';
import styles from './styles';

export default function MealPreferences({ likes, dislikes, handleChange }) {
  return (
    <View style={commonStyles.card}>
      <Text style={styles.title}>Meal Preferences</Text>
      <Text style={styles.description}>
        Separate multiple foods with commas. This helps prioritize ingredients for meal planning.
      </Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Foods You Like</Text>
        <TextInput
          style={styles.input}
          value={likes}
          onChangeText={(text) => handleChange('likes', text)}
          placeholder="e.g. Chicken, Rice, Broccoli"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Foods to Avoid</Text>
        <TextInput
          style={styles.input}
          value={dislikes}
          onChangeText={(text) => handleChange('dislikes', text)}
          placeholder="e.g. Mushrooms, Seafood"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}
