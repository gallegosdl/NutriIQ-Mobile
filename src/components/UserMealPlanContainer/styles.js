import { StyleSheet } from 'react-native';

export default (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    backgroundColor: isDarkMode ? 'rgba(37,43,59,0.5)' : 'rgba(255,255,255,0.95)',
    borderColor: isDarkMode ? 'transparent' : 'rgba(59,130,246,0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  tabButton: (isActive, isDarkMode) => ({
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: isActive
      ? '#3b82f6'
      : isDarkMode ? 'transparent' : 'transparent',
    borderWidth: isActive ? 0 : 1,
    borderColor: isActive
      ? 'transparent'
      : isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
  }),
  tabButtonText: (isActive, isDarkMode) => ({
    color: isActive
      ? '#ffffff'
      : isDarkMode ? '#cccccc' : '#333333',
    fontWeight: '600',
  }),
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: '#3b82f6',
    fontSize: 16,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 16,
  },
});
