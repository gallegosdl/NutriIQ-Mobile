// src/components/PreferredFoods/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#cce6ff',
    color: '#007bff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    fontSize: 14,
    margin: 4,
  },
  placeholder: {
    fontSize: 14,
    color: '#999',
  },
});
