import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#9CA3AF',
    fontSize: 16,
  },
  subHeader: {
    marginBottom: 8,
  },
  subText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  counts: {
    color: '#3B82F6',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#374151',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  listContainer: {
    flex: 1,
    marginTop: 8,
  },
  categoryContainer: {
    marginBottom: 12,
    backgroundColor: '#111827',
    borderRadius: 8,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#374151',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  categoryTitle: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  expandIndicator: {
    color: '#9CA3AF',
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#4B5563',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  ingredientInfo: {
    flex: 1,
  },
  ingredientText: {
    color: '#FFFFFF',
  },
  inPantryLabel: {
    marginTop: 2,
    fontSize: 11,
    color: '#10B981',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  cancelButton: {
    flex: 1,
    marginRight: 6,
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 6,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
