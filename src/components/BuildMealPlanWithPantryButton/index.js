import React, { useCallback } from 'react';
import { View, Text, Pressable, ActivityIndicator, useColorScheme } from 'react-native';
import styles from './styles';
import { colors } from '../../theme/colors';
import { commonStyles } from '../../theme/commonStyles';

const BuildMealPlanWithPantryButton = React.memo(({
  isLoading,
  setIsPantryModalOpen,
  handleBuildMealPlanWithPantry,
  isBuildingWithPantry
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const buttonColor = isDark ? colors.primaryDark : colors.primary;
  const cardBg = isDark ? colors.surfaceDark : colors.surface;
  const textColor = isDark ? colors.textLight : colors.text;
  const descriptionColor = isDark ? colors.textSecondary : colors.text;

  const handleOpenPantry = useCallback(() => {
    setIsPantryModalOpen(true);
  }, [setIsPantryModalOpen]);

  const handleBuildWithPantry = useCallback(() => {
    handleBuildMealPlanWithPantry();
  }, [handleBuildMealPlanWithPantry]);

  return (
    <View style={[commonStyles.card, { backgroundColor: cardBg }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>
          Plan with Pantry
        </Text>
        <Pressable
          onPress={handleOpenPantry}
          style={({ pressed }) => [
            styles.openPantryButton,
            { backgroundColor: pressed ? colors.secondary : buttonColor }
          ]}
        >
          <Text style={styles.buttonText}>Open Pantry</Text>
        </Pressable>
      </View>

      <Text style={[styles.description, { color: descriptionColor }]}>
        🍽️ Manage your pantry items and generate meal plans with them as preferred ingredients.
      </Text>

      <Pressable
        onPress={handleBuildWithPantry}
        disabled={isBuildingWithPantry || isLoading}
        style={({ pressed }) => [
          styles.buildButton,
          { backgroundColor: pressed ? colors.secondary : buttonColor },
          (isBuildingWithPantry || isLoading) && styles.disabledButton
        ]}
      >
        {isBuildingWithPantry || isLoading ? (
          <>
            <ActivityIndicator color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>
              Building with Pantry...
            </Text>
          </>
        ) : (
          <Text style={styles.buttonText}>
            Build Meal Plan with Pantry Items
          </Text>
        )}
      </Pressable>
    </View>
  );
});

export default BuildMealPlanWithPantryButton;
