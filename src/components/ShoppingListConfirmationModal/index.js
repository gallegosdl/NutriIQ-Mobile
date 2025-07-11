import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './styles';
import { categorizeIngredient } from '../../utils/categorizeIngredient';
//import api from '../../services/api';

const ShoppingListConfirmationModal = ({
  isOpen,
  onClose,
  ingredients,
  onConfirm
}) => {
  const [categorizedIngredients, setCategorizedIngredients] = useState({});
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [userPantryItems, setUserPantryItems] = useState(new Set());

  /** Load Pantry Items **/
  useEffect(() => {
    if (!isOpen) return;

    const fetchPantryItems = async () => {
      try {
        //const res = await api.get('/api/pantry');
        const pantryItems = new Set(
          Object.values(res.data).flat()
            .map(item => item.item_name?.toLowerCase())
            .filter(Boolean)
        );
        setUserPantryItems(pantryItems);

        // Pre-check items that exist in the pantry
        const preChecked = new Set(
          ingredients
            .filter(ing => pantryItems.has(ing.name?.toLowerCase()))
            .map(ing => ing.name)
        );
        setCheckedItems(preChecked);
      } catch (error) {
        console.error('Error fetching pantry:', error);
      }
    };

    fetchPantryItems();
  }, [isOpen, ingredients]);

  /** Categorize Ingredients **/
  useEffect(() => {
    if (!ingredients) return;

    const categorized = ingredients.reduce((acc, ing) => {
      if (!ing?.name) return acc;
      const category = categorizeIngredient(ing.name);
      if (!acc[category]) acc[category] = [];
      acc[category].push(ing);
      return acc;
    }, {});
    setCategorizedIngredients(categorized);
    setExpandedCategories(new Set(Object.keys(categorized)));
  }, [ingredients]);

  /** Handle Check **/
  const handleToggleItem = useCallback((ingredient) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      newSet.has(ingredient.name)
        ? newSet.delete(ingredient.name)
        : newSet.add(ingredient.name);
      return newSet;
    });
  }, []);

  /** Confirm Handler **/
  const handleConfirm = useCallback(() => {
    const shoppingList = ingredients.filter(ing => !checkedItems.has(ing.name));
    onConfirm(shoppingList);
  }, [ingredients, checkedItems, onConfirm]);

  /** Filter Search **/
  const filteredIngredients = useMemo(() => {
    if (!searchTerm) return categorizedIngredients;
    const filtered = {};
    Object.entries(categorizedIngredients).forEach(([cat, items]) => {
      const matched = items.filter(item =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matched.length) filtered[cat] = matched;
    });
    return filtered;
  }, [searchTerm, categorizedIngredients]);

  /** Render Item **/
  const IngredientItem = React.memo(({ item, checked, onToggle }) => (
    <TouchableOpacity style={styles.ingredientItem} onPress={() => onToggle(item)}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]} />
      <View style={styles.ingredientInfo}>
        <Text style={styles.ingredientText}>
          {item.display_text || item.name}
        </Text>
        {userPantryItems.has(item.name?.toLowerCase()) && (
          <Text style={styles.inPantryLabel}>In Pantry</Text>
        )}
      </View>
    </TouchableOpacity>
  ));

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Confirm Shopping List</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subHeader}>
          <Text style={styles.subText}>
            ✓ Items detected in your pantry are pre-selected
          </Text>
          <Text style={styles.subText}>
            Unchecked items will be added to your shopping list
          </Text>
          <Text style={styles.counts}>
            To Buy: {ingredients.length - checkedItems.size} | In Pantry: {checkedItems.size}
          </Text>
        </View>

        <TextInput
          style={styles.searchInput}
          placeholder="Search ingredients..."
          placeholderTextColor="#9CA3AF"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <ScrollView style={styles.listContainer}>
          {Object.entries(filteredIngredients).map(([category, items]) => (
            <View key={category} style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryHeader}
                onPress={() => {
                  setExpandedCategories(prev => {
                    const newSet = new Set(prev);
                    newSet.has(category) ? newSet.delete(category) : newSet.add(category);
                    return newSet;
                  });
                }}
              >
                <Text style={styles.categoryTitle}>{category}</Text>
                <Text style={styles.expandIndicator}>
                  {expandedCategories.has(category) ? '-' : '+'}
                </Text>
              </TouchableOpacity>
              {expandedCategories.has(category) && (
                <FlatList
                  data={items}
                  keyExtractor={(item) => item.name}
                  renderItem={({ item }) => (
                    <IngredientItem
                      item={item}
                      checked={checkedItems.has(item.name)}
                      onToggle={handleToggleItem}
                    />
                  )}
                />
              )}
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.footerButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.footerButtonText}>
              Create List ({ingredients.length - checkedItems.size})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ShoppingListConfirmationModal;
