// src/components/AvoidedFoods/index.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { commonStyles } from '../../theme/commonStyles';  

export default function AvoidedFoods({ dislikes }) {
  const items = dislikes ? dislikes.split(',').map((item) => item.trim()).filter(Boolean) : [];

  return (
    <View style={commonStyles.card}>
      <Text style={styles.title}>Avoided Foods</Text>
      <View style={styles.tagContainer}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Text key={index} style={styles.tag}>
              {item}
            </Text>
          ))
        ) : (
          <Text style={styles.placeholder}>Enter avoided foods in Meal Preferences</Text>
        )}
      </View>
    </View>
  );
}
