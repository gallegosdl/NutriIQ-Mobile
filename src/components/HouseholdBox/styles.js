import { StyleSheet } from 'react-native';

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    card: {
      backgroundColor: isDarkMode ? '#252B3B' : '#ffffff',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDarkMode ? '#334155' : '#e5e7eb',
      shadowColor: isDarkMode ? '#000' : '#aaa',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
    heading: {
      fontSize: 20,
      fontWeight: '700',
      color: isDarkMode ? '#f9fafb' : '#111827',
      marginBottom: 12,
    },
    subheading: {
      fontSize: 18,
      fontWeight: '700',
      color: isDarkMode ? '#f9fafb' : '#111827',
      marginTop: 16,
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: isDarkMode ? '#d1d5db' : '#111827',
    },
    value: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 12,
    },
    button: {
      backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    budget: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkMode ? '#facc15' : '#2563eb',
      textAlign: 'center',
      marginBottom: 8,
    },
    slider: {
      width: '100%',
      height: 40,
    },
  });

export default createStyles;
