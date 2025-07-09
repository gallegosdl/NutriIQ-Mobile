import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 6,
  },
  meta: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  sectionTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  activityScroll: {
    marginTop: 8,
  },
  activityCard: {
    backgroundColor: '#f1f5f9',
    padding: 12,
    marginRight: 12,
    borderRadius: 8,
    width: 140,
  },
  activityType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  activityDetail: {
    fontSize: 14,
    color: '#333',
  },
});
