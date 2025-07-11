import { StyleSheet } from 'react-native';

export default (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 16,
    padding: 16,
    backgroundColor: isDarkMode ? 'rgba(37,43,59,0.5)' : 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderColor: isDarkMode ? 'transparent' : '#e5e7eb',
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
    color: isDarkMode ? '#fff' : '#111827',
  },
  refreshButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
  },
  refreshIcon: {
    width: 20,
    height: 20,
    tintColor: isDarkMode ? '#9ca3af' : '#374151',
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryCard: {
    width: '48%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: isDarkMode ? '#2A3142' : '#ffffff',
    borderWidth: 1,
    borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: isDarkMode ? '#9ca3af' : '#6b7280',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartContainer: {
    flex: 1,
    minHeight: 300,
    borderRadius: 16,
    padding: 16,
    backgroundColor: isDarkMode ? 'rgba(37,43,59,0.5)' : '#ffffff',
    borderWidth: 1,
    borderColor: isDarkMode ? 'transparent' : '#e5e7eb',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 16,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
  },
  toggleText: {
    marginLeft: 8,
    fontSize: 14,
    color: isDarkMode ? '#e5e7eb' : '#111827',
  },
});
