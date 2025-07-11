import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import AuthModal from '../../components/AuthModal';
import { useTheme } from '../../contexts/ThemeContext';
import api from '../../services/api';
import createStyles from './styles';

const GuestView = ({ setUser }) => {
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  const styles = createStyles(isDarkMode);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guestData, setGuestData] = useState(null);
  const [error, setError] = useState(null);

  const handleAuthModalClose = (userData) => {
    setShowAuthModal(false);
    if (userData?.sessionToken) {
      setUser(userData);
    }
  };

  const handleToggleDemo = async () => {
    if (showDemo) {
      setShowDemo(false);
      setGuestData(null);
      setUser(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/api/meal-plans/guest-meal-plans');
      setGuestData(res.data);
      setShowDemo(true);
    } catch (err) {
      console.error('Error fetching guest meal plan:', err);
      setError('Failed to load demo meal plan');
    } finally {
      setLoading(false);
    }
  };

  // Auto-switch if demo mode is on
  if (showDemo && guestData) {
    setUser({
      id: 'guest',
      email: 'demo@guest.com',
      guest: true,
      guestData
    });
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/NutriIQ-dark-preferred.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Nutri <Text style={styles.titleAccent}>IQ</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowAuthModal(true)}
          style={styles.signInButton}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>
          Welcome to <Text style={styles.titleAccent}>Nutri IQ</Text>
        </Text>
        <Text style={styles.welcomeSubtitle}>
          Experience personalized meal planning powered by AI
        </Text>

        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <Text style={styles.cardHeader}>Guest Mode Limitations</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bullet}>• Meal plans are not saved</Text>
              <Text style={styles.bullet}>• No personalized recommendations</Text>
              <Text style={styles.bullet}>• Limited recipe customization</Text>
              <Text style={styles.bullet}>• No progress tracking</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardHeader}>Create an Account to</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bullet}>• Save and track meal plans</Text>
              <Text style={styles.bullet}>• Personalized AI recommendations</Text>
              <Text style={styles.bullet}>• Access premium recipes</Text>
              <Text style={styles.bullet}>• Sync with fitness apps</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setShowAuthModal(true)}
          style={styles.signUpButton}
        >
          <Text style={styles.signUpText}>Sign Up Now</Text>
        </TouchableOpacity>

        <View style={styles.demoRow}>
          <Text style={styles.demoLabel}>Demo Meal Plan Details</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#10b981" />
          ) : (
            <Switch
              trackColor={{ false: '#9ca3af', true: '#10b981' }}
              thumbColor={showDemo ? '#10b981' : '#f3f4f6'}
              onValueChange={handleToggleDemo}
              value={showDemo}
            />
          )}
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>

      {showAuthModal && <AuthModal onClose={handleAuthModalClose} />}
    </ScrollView>
  );
};

GuestView.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default GuestView;
