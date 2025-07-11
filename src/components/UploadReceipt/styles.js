// src/components/UploadReceipt/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#252B3B',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: '#3b82f6',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 16,
  },
  uploadButton: {
    backgroundColor: '#2A3142',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#ccc',
  },
  parsingText: {
    color: '#ccc',
    marginTop: 8,
  },
  itemsContainer: {
    marginTop: 16,
  },
  itemsTitle: {
    color: '#ccc',
    marginBottom: 8,
  },
  itemCard: {
    backgroundColor: '#2A3142',
    padding: 8,
    borderRadius: 8,
    margin: 4,
    flex: 1,
  },
  itemName: {
    color: '#ccc',
    fontSize: 14,
  },
  itemPrice: {
    color: '#999',
    fontSize: 12,
  },
});
