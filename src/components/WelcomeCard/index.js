import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { colors } from '../../theme/colors';

export default function WelcomeCard() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDark ? colors.surface : colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Welcome to Nutri IQ!</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Start building your personalized meal plan today.
      </Text>
    </View>
  );
}
