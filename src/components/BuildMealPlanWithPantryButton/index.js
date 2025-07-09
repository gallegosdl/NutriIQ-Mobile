import React from 'react';
import { View, Text, Pressable, ActivityIndicator, useColorScheme } from 'react-native';
import styles from './styles';
import { colors } from '../../theme/colors';
import { commonStyles } from '../../theme/commonStyles';


export default function BuildMealPlanWithPantryButton({
  isLoading,
  setIsPantryModalOpen,
  handleBuildMealPlanWithPantry,
  isBuildingWithPantry
}) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const buttonColor = isDark ? colors.primaryDark : colors.primary;
  const cardBg = isDark ? colors.surfaceDark : colors.surface;

  return (
    <View style={[commonStyles.card, { backgroundColor: cardBg }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? colors.textLight : colors.text }]}>
          Plan with Pantry
        </Text>
        <Pressable
          onPress={() => setIsPantryModalOpen(true)}
          style={({ pressed }) => [
            styles.openPantryButton,
            { backgroundColor: pressed ? colors.secondary : buttonColor }
          ]}
        >
          <Text style={styles.buttonText}>Open Pantry</Text>
        </Pressable>
      </View>

      <Text style={[styles.description, { color: isDark ? colors.textSecondary : colors.text }]}>
        🍽️ Manage your pantry items and generate meal plans with them as preferred ingredients.
      </Text>

      <Pressable
        onPress={handleBuildMealPlanWithPantry}
        disabled={isBuildingWithPantry || isLoading}
        style={({ pressed }) => [
          styles.buildButton,
          { backgroundColor: pressed ? colors.secondary : buttonColor },
          (isBuildingWithPantry || isLoading) && styles.disabledButton
        ]}
      >
        {isBuildingWithPantry ? (
          <>
            <ActivityIndicator color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Building with Pantry...</Text>
          </>
        ) : (
          <Text style={styles.buttonText}>
            Build Meal Plan with Pantry Items
          </Text>
        )}
      </Pressable>
    </View>
  );
}
