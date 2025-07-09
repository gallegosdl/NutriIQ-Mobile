import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { commonStyles } from '../../theme/commonStyles';

export default function PreferredFoods({ likes }) {
  const items = likes ? likes.split(',').map((item) => item.trim()).filter(Boolean) : [];

  return (
    <View style={commonStyles.card}>
      <Text style={styles.title}>Preferred Foods</Text>
      <View style={styles.tagContainer}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Text key={index} style={styles.tag}>
              {item}
            </Text>
          ))
        ) : (
          <Text style={styles.placeholder}>Enter preferred foods in Meal Preferences</Text>
        )}
      </View>
    </View>
  );
}
