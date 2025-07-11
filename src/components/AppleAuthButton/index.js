// src/components/AppleAuthButton/index.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import styles from './styles';
import { useColorScheme } from 'react-native';
import { colors } from '../../theme/colors';
import { Platform } from 'react-native';

const AppleAuthButton = React.memo(({ onSuccess, onError, isLoading = false }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log('[AppleAuthButton] Received credential:', credential);
      onSuccess && onSuccess(credential);

    } catch (error) {
      if (error.code === 'ERR_CANCELED') {
        console.log('[AppleAuthButton] User canceled Apple Sign-in');
      } else {
        console.error('[AppleAuthButton] Error:', error);
        onError && onError(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color={isDark ? colors.textLight : colors.text} />
      ) : (
        Platform.OS === 'ios' && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={isDark
            ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE
            : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={8}
          style={styles.button}
          onPress={handleAppleLogin}
        />
        )
      )}
    </View>
  );
});

export default AppleAuthButton;
