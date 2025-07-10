import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const CalendarMealPlan = React.memo(({ mealPlan }) => {
  const data = useMemo(() => {
    return Array.isArray(mealPlan) ? mealPlan : [];
  }, [mealPlan]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.meal}</Text>
      <Text style={styles.itemSubtitle}>
        Calories: {item.calories} | Protein: {item.protein}g
      </Text>
    </View>
  );

  if (!data.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Meal Plan</Text>
        <Text style={styles.subtitle}>No meals available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Plan</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
});

export default CalendarMealPlan;
