import { StyleSheet } from 'react-native';

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1a1f2b' : '#f9fafb',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: isDarkMode ? '#334155' : '#e5e7eb',
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 32,
      height: 32,
      marginRight: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    titleAccent: {
      color: '#3b82f6',
    },
    signInButton: {
      backgroundColor: '#3b82f6',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    signInText: {
      color: '#ffffff',
      fontWeight: '600',
    },
    welcomeCard: {
      margin: 16,
      padding: 16,
      borderRadius: 12,
      backgroundColor: isDarkMode ? 'rgba(37,43,59,0.5)' : '#ffffffee',
      borderWidth: 1,
      borderColor: isDarkMode ? '#ffffff0f' : '#e5e7eb',
    },
    welcomeTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: isDarkMode ? '#ffffff' : '#111827',
      marginBottom: 4,
    },
    welcomeSubtitle: {
      textAlign: 'center',
      fontSize: 16,
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      marginBottom: 16,
    },
    cardsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 16,
    },
    card: {
      flex: 1,
      marginHorizontal: 4,
      padding: 12,
      borderRadius: 12,
      backgroundColor: isDarkMode ? '#1a1f2b' : '#f3f4f6',
      borderWidth: 1,
      borderColor: isDarkMode ? '#ffffff0f' : '#e5e7eb',
    },
    cardHeader: {
      fontSize: 18,
      fontWeight: '600',
      color: isDarkMode ? '#facc15' : '#ca8a04',
      marginBottom: 8,
    },
    bulletList: {
      marginLeft: 8,
    },
    bullet: {
      fontSize: 14,
      marginVertical: 2,
      color: isDarkMode ? '#d1d5db' : '#374151',
    },
    signUpButton: {
      backgroundColor: '#3b82f6',
      paddingVertical: 12,
      borderRadius: 8,
      marginTop: 12,
      alignItems: 'center',
    },
    signUpText: {
      color: '#ffffff',
      fontWeight: '600',
    },
    demoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
    },
    demoLabel: {
      fontSize: 16,
      color: isDarkMode ? '#d1d5db' : '#374151',
    },
    errorText: {
      marginTop: 8,
      textAlign: 'center',
      color: '#ef4444',
    },
  });

export default createStyles;
