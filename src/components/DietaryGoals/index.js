import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import { commonStyles } from '../../theme/commonStyles';
import styles from './styles';

const DietaryGoals = React.memo(({ dietOptions, dietGoals, toggleDietGoal }) => {
  const handleToggle = useCallback((goal) => {
    toggleDietGoal && toggleDietGoal(goal);
  }, [toggleDietGoal]);

  return (
    <View style={commonStyles.card}>
      <Text style={styles.title}>Dietary Goals</Text>
      {Object.entries(dietOptions || {}).map(([category, options]) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.category}>{category}</Text>
          <View style={styles.buttonRow}>
            {options.map((goal) => (
              <Pressable
                key={goal}
                onPress={() => handleToggle(goal)}
                style={[
                  styles.button,
                  dietGoals?.includes(goal)
                    ? styles.activeButton
                    : styles.inactiveButton,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    dietGoals?.includes(goal) && styles.activeButtonText,
                  ]}
                >
                  {goal}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
});

export default DietaryGoals;
