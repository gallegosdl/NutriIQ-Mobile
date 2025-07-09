import React from 'react';
import { View, Text, Image, Pressable, useColorScheme } from 'react-native';
import styles from './styles';
import { colors } from '../../theme/colors';

export default function Header({ user, onLogout }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const logoSource = isDark
    ? require('../../../assets/images/NutriIQ-dark-preferred.png')
    : require('../../../assets/images/NutriIQ-light-preferred.png');

  return (
    <View style={[styles.container, { backgroundColor: isDark ? colors.background : colors.surface }]}>
      <View style={styles.logoContainer}>
        <Image source={logoSource} style={styles.logoImage} resizeMode="contain" />
        <View>
          <Text style={[styles.title, { color: isDark ? colors.text : colors.text }]}>
            Nutri <Text style={styles.titleAccent}>IQ</Text>
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Personalized nutrition planning
          </Text>
        </View>
      </View>

      {user && (
        <Pressable onPress={onLogout} style={styles.userContainer}>
          {user.avatar_url ? (
            <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarFallback}>
              <Text style={styles.avatarFallbackText}>?</Text>
            </View>
          )}
          <View style={styles.userTextContainer}>
            <Text style={styles.userLabel} numberOfLines={1}>Logged in as</Text>
            <Text style={styles.userName} numberOfLines={1}>{user.name}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}
