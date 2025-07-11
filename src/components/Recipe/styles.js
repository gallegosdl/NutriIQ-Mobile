import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  nutrition: {
    marginVertical: 8,
  },
  nutritionItem: {
    fontSize: 12,
    color: '#4b5563',
  },
  expandButton: {
    backgroundColor: '#2563eb',
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  expandButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  details: {
    marginTop: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    color: '#1f2937',
  },
  detailItem: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 2,
  },
});
