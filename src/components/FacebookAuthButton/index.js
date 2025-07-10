// src/components/FacebookAuthButton/index.js
import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../theme/colors';

const FacebookAuthButton = React.memo(({ onPress, isLoading = false }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        disabled={isLoading}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: '#1877F2', opacity: pressed || isLoading ? 0.7 : 1 }
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Ionicons name="logo-facebook" size={20} color="#fff" />
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </>
        )}
      </Pressable>
    </View>
  );
});

export default FacebookAuthButton;
