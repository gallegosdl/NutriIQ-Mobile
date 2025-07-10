// src/components/GoogleAuthButton/index.js
import React from 'react';
import { View, Text, Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../theme/colors';

const GoogleAuthButton = React.memo(({ onPress, isLoading = false }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        disabled={isLoading}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: '#fff', opacity: pressed || isLoading ? 0.7 : 1 }
        ]}
      >
        {isLoading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <>
            <Ionicons name="logo-google" size={20} color="#DB4437" />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </>
        )}
      </Pressable>
    </View>
  );
});

export default GoogleAuthButton;
