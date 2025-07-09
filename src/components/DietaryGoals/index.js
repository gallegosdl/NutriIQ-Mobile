
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { commonStyles } from '../../theme/commonStyles';
import styles from './styles';

export default function DietaryGoals({
  dietOptions,
  dietGoals,
  toggleDietGoal,
}) {
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
                onPress={() => toggleDietGoal && toggleDietGoal(goal)}
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
}
