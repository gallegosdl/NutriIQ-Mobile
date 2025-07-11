import { StyleSheet } from 'react-native';

export default (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: isDarkMode ? '#ffffff' : '#111827',
  },
  refreshButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
  },
  refreshText: {
    color: isDarkMode ? '#d1d5db' : '#1f2937',
    fontSize: 14,
  },
  errorBox: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: isDarkMode ? '#b91c1c20' : '#fee2e2',
    borderColor: isDarkMode ? '#f87171' : '#fca5a5',
    borderWidth: 1,
    marginBottom: 16,
  },
  errorText: {
    color: isDarkMode ? '#f87171' : '#b91c1c',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    backgroundColor: isDarkMode ? '#374151' : '#ffffff',
    borderWidth: 1,
    borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
  },
  mealTypeText: {
    fontSize: 14,
    fontWeight: '600',
    color: isDarkMode ? '#d1d5db' : '#374151',
    marginBottom: 4,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: isDarkMode ? '#ffffff' : '#111827',
    marginBottom: 8,
  },
  macroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  macroLabel: {
    fontSize: 12,
    color: isDarkMode ? '#9ca3af' : '#6b7280',
  },
  macroValue: {
    fontSize: 14,
    fontWeight: '500',
    color: isDarkMode ? '#e5e7eb' : '#111827',
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: isDarkMode ? '#374151' : '#e5e7eb',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: isDarkMode ? '#ffffff' : '#111827',
  },
  dateSubText: {
    fontSize: 12,
    color: isDarkMode ? '#9ca3af' : '#6b7280',
  },
});
