// src/views/MealPlannerForm/styles.js
import { StyleSheet } from 'react-native';

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1a1f2b' : '#f9fafb',
    },
    content: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    headerAccent: {
      color: '#3b82f6',
    },
    logoutButton: {
      backgroundColor: '#ef4444',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    logoutText: {
      color: '#ffffff',
      fontWeight: '600',
    },
    card: {
      backgroundColor: isDarkMode ? 'rgba(37,43,59,0.5)' : '#ffffffee',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDarkMode ? '#334155' : '#e5e7eb',
    },
    cardHalf: {
      flex: 1,
      backgroundColor: isDarkMode ? 'rgba(37,43,59,0.5)' : '#ffffffee',
      borderRadius: 12,
      padding: 16,
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: isDarkMode ? '#334155' : '#e5e7eb',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 12,
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
      color: isDarkMode ? '#facc15' : '#ca8a04',
    },
    sectionDescription: {
      fontSize: 14,
      color: isDarkMode ? '#d1d5db' : '#6b7280',
    },
    inputLabel: {
      fontSize: 16,
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    input: {
      backgroundColor: isDarkMode ? '#334155' : '#f3f4f6',
      padding: 8,
      borderRadius: 8,
      width: 60,
      textAlign: 'center',
      color: isDarkMode ? '#facc15' : '#ca8a04',
    },
    caption: {
      marginTop: 8,
      fontSize: 12,
      color: isDarkMode ? '#d1d5db' : '#6b7280',
    },
    generateButton: {
      backgroundColor: '#3b82f6',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 32,
    },
    generateText: {
      color: '#ffffff',
      fontWeight: '700',
      fontSize: 16,
    },
    column: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default createStyles;
