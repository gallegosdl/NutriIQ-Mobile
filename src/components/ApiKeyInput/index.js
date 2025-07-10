// src/components/ApiKeyInput/index.js
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ApiKeyInput = React.memo(() => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const clearApiKey = useCallback(() => {
    setApiKey('');
    setError(null);
  }, []);

  const handleApiKeyChange = useCallback(async (value) => {
    setApiKey(value);
    setError(null);

    if (!value) {
      clearApiKey();
      return;
    }

    setIsAuthenticating(true);
    try {
      // Simulate auth request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('API Key validated:', value);

      // TODO: Secure storage
    } catch (err) {
      console.error(err);
      setError('Failed to validate API key. Please try again.');
    } finally {
      setIsAuthenticating(false);
    }
  }, [clearApiKey]);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>OpenAI API Key</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Enter your OpenAI API key"
          placeholderTextColor="#888"
          secureTextEntry
          value={apiKey}
          onChangeText={setApiKey}
          editable={!isAuthenticating}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Pressable
          style={styles.clearButton}
          onPress={clearApiKey}
          disabled={isAuthenticating}
          accessibilityLabel="Clear API Key"
        >
          <Ionicons name="close" size={20} color="#888" />
        </Pressable>
      </View>

      {error && (
        <View style={styles.errorBox}>
          <Ionicons name="alert-circle" size={20} color="#f87171" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {isAuthenticating && (
        <View style={styles.loadingBox}>
          <ActivityIndicator size="small" color="#60a5fa" />
          <Text style={styles.loadingText}>Validating API key...</Text>
        </View>
      )}

      <Text style={styles.disclaimer}>
        Your API key is stored locally and never sent to our servers.
      </Text>
    </View>
  );
});

export default ApiKeyInput;
