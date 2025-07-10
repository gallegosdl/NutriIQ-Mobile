import React, { useCallback, useMemo } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import styles from './styles';

const CuisinePreferences = React.memo(({ cuisinePreferences = [], handleCuisineChange }) => {
  const data = useMemo(() => {
    return Array.isArray(cuisinePreferences) ? cuisinePreferences : [];
  }, [cuisinePreferences]);

  const onPressItem = useCallback((cuisine, selected) => {
    handleCuisineChange && handleCuisineChange(cuisine, !selected);
  }, [handleCuisineChange]);

  const renderItem = useCallback(({ item }) => (
    <Pressable
      onPress={() => onPressItem(item.cuisine, item.selected)}
      style={[
        styles.cuisineItem,
        item.selected && styles.cuisineItemSelected,
      ]}
    >
      <Text
        style={[
          styles.cuisineText,
          item.selected && styles.cuisineTextSelected,
        ]}
      >
        {item.cuisine}
      </Text>
    </Pressable>
  ), [onPressItem]);

  if (!data.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No cuisine data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cuisine Preferences</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.cuisine}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
      />
    </View>
  );
});

export default CuisinePreferences;
