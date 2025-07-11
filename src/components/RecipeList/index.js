import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Recipe from '../Recipe';
import styles from './styles';
//import api from '../../services/api';

const RecipeList = React.memo(() => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*const fetchRecipes = useCallback(async () => {
    try {
      const response = await api.get('/api/recipes');
      setRecipes(response.data || []);
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Failed to fetch recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);*/

  /*useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);*/

  const renderItem = useCallback(({ item }) => <Recipe recipe={item} />, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!recipes.length) {
    return (
      <View style={styles.centered}>
        <Text style={styles.empty}>No recipes found. Generate a meal plan to add recipes.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id?.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
});

export default RecipeList;
