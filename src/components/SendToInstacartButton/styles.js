import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  pricesContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#d1d5db',
    paddingTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
  },
  storeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  storeButton: {
    backgroundColor: '#374151',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  storeButtonActive: {
    backgroundColor: '#2563eb',
  },
  storeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  priceComparison: {
    marginTop: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
  },
  priceHeader: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 15,
    color: '#111827',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  priceStore: {
    fontSize: 14,
    color: '#1f2937',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
});
