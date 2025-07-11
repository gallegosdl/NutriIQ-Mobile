import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import styles from './styles';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const getImageUrl = (imageUrl) => {
  if (!imageUrl) return '';
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://meal-planner-app-3m20.onrender.com'
    : '';
  return `${baseUrl}${imageUrl}`;
};

const Recipe = React.memo(({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prev => !prev);
  };

  const nutritionInfo = useMemo(() => (
    <>
      <Text style={styles.nutritionItem}>Calories: {recipe.calories}</Text>
      <Text style={styles.nutritionItem}>Protein: {recipe.protein}g</Text>
      <Text style={styles.nutritionItem}>Carbs: {recipe.carbs}g</Text>
      <Text style={styles.nutritionItem}>Fat: {recipe.fat}g</Text>
    </>
  ), [recipe]);

  return (
    <View style={styles.card}>
      {recipe.image_url && !imageError && (
        <Image
          source={{ uri: getImageUrl(recipe.image_url) }}
          style={styles.image}
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.subTitle}>Difficulty: {recipe.difficulty}</Text>
        <Text style={styles.subTitle}>Prep Time: {recipe.prepTime}</Text>
        <View style={styles.nutrition}>
          {nutritionInfo}
        </View>
        <TouchableOpacity style={styles.expandButton} onPress={toggleExpanded}>
          <Text style={styles.expandButtonText}>
            {expanded ? 'Hide Details' : 'Show Details'}
          </Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.details}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            {recipe.ingredients?.map((ing, idx) => (
              <Text key={idx} style={styles.detailItem}>• {ing.name} - {ing.amount}</Text>
            ))}
            <Text style={styles.sectionTitle}>Instructions</Text>
            {recipe.instructions?.split('\n').map((step, idx) => (
              <Text key={idx} style={styles.detailItem}>{step}</Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
});

export default Recipe;
