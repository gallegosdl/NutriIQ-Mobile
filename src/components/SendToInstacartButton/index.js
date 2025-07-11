import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, Linking, ScrollView } from 'react-native';
import styles from './styles';
//import api from '../../services/api';
import ShoppingListConfirmationModal from '../ShoppingListConfirmationModal';
import { toast } from 'react-native-toast-message';

const SendToInstacartButton = React.memo(({ mealPlan }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shoppingListUrl, setShoppingListUrl] = useState(null);
  const [storePrices, setStorePrices] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [currentStore, setCurrentStore] = useState(null);

  const stores = useMemo(() => [
    "Smith's", 'Albertsons', 'Walmart', 'Sprouts Farmers Market'
  ], []);

  const extractIngredients = useCallback(() => {
    const map = new Map();

    mealPlan.days.forEach(day =>
      Object.values(day.meals).forEach(meal =>
        meal.ingredients.forEach(ing => {
          if (!ing.name) return;
          const key = ing.name.toLowerCase();
          const amount = parseFloat(ing.amount) || 1;

          if (map.has(key)) {
            const existing = map.get(key);
            existing.quantity += amount;
          } else {
            map.set(key, { ...ing, quantity: amount });
          }
        })
      )
    );

    return Array.from(map.values());
  }, [mealPlan]);

  /*const createShoppingList = useCallback(async (ingredients) => {
    try {
      setIsCreating(true);
      const sessionToken = await api.getSessionToken();
      if (!sessionToken) throw new Error('Not authenticated');

      const res = await api.post('/api/instacart/create-link', {
        title: 'Weekly Meal Plan Ingredients',
        link_type: 'shopping_list',
        expires_in: 7,
        line_items: ingredients
      }, { headers: { 'x-session-token': sessionToken } });

      if (res.data?.url) {
        setShoppingListUrl(res.data.url);
        Linking.openURL(res.data.url);
        toast.show({ type: 'success', text1: 'Shopping list created!', text2: 'Link opened in browser.' });
      } else {
        throw new Error('No URL returned');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create Instacart shopping list.');
    } finally {
      setIsCreating(false);
    }
  }, []);*/

  /*const checkPrices = useCallback(async (store) => {
    if (!shoppingListUrl) {
      Alert.alert('Error', 'Please create a shopping list first.');
      return;
    }

    try {
      setIsChecking(true);
      setCurrentStore(store);

      const res = await api.post('/api/instacart/scrape-prices', {
        listUrl: shoppingListUrl,
        store
      });

      setStorePrices(prev => ({
        ...prev,
        [store]: res.data
      }));

      toast.show({ type: 'success', text1: `Prices fetched for ${store}` });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', `Failed to get prices for ${store}.`);
    } finally {
      setIsChecking(false);
      setCurrentStore(null);
    }
  }, [shoppingListUrl]);*/

  /*const handleConfirmList = useCallback((filteredIngredients) => {
    createShoppingList(filteredIngredients);
    setIsModalOpen(false);
  }, [createShoppingList]);*/

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[styles.button, isCreating && styles.disabledButton]}
        disabled={isCreating}
        onPress={() => setIsModalOpen(true)}
      >
        {isCreating
          ? <ActivityIndicator color="#fff" />
          : <Text style={styles.buttonText}>Send to Instacart Shopping List</Text>}
      </TouchableOpacity>

      {shoppingListUrl && (
        <View style={styles.pricesContainer}>
          <Text style={styles.sectionTitle}>Compare Store Prices</Text>
          <View style={styles.storeButtons}>
            {stores.map(store => (
              <TouchableOpacity
                key={store}
                style={[
                  styles.storeButton,
                  isChecking && currentStore === store && styles.storeButtonActive
                ]}
                disabled={isChecking && currentStore === store}
                onPress={() => checkPrices(store)}
              >
                {isChecking && currentStore === store
                  ? <ActivityIndicator color="#fff" size="small" />
                  : <Text style={styles.storeButtonText}>
                      {store} {storePrices[store] ? ` - $${storePrices[store].total}` : ''}
                    </Text>
                }
              </TouchableOpacity>
            ))}
          </View>

          {Object.keys(storePrices).length > 0 && (
            <View style={styles.priceComparison}>
              <Text style={styles.priceHeader}>Price Comparison</Text>
              {Object.entries(storePrices)
                .sort(([,a],[,b]) => a.total - b.total)
                .map(([store, data]) => (
                  <View key={store} style={styles.priceRow}>
                    <Text style={styles.priceStore}>{store}</Text>
                    <Text style={styles.priceValue}>${data.total}</Text>
                  </View>
                ))}
            </View>
          )}
        </View>
      )}

      <ShoppingListConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ingredients={extractIngredients()}
        //onConfirm={handleConfirmList}
      />
    </ScrollView>
  );
});

export default SendToInstacartButton;
