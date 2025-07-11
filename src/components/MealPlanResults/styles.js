// src/components/MealPlanResults/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewModeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  viewModeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#2A3142',
    borderRadius: 8,
  },
  viewModeButtonActive: {
    backgroundColor: '#2563eb',
  },
  viewModeButtonText: {
    color: '#ccc',
  },
  viewModeButtonTextActive: {
    color: '#fff',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tabButton: {
    padding: 8,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  tabButtonActive: {
    borderColor: '#2563eb',
  },
  tabButtonText: {
    color: '#777',
  },
  tabButtonTextActive: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  activeDay: {
    marginBottom: 24,
  },
  hidden: {
    display: 'none',
  },
  dayCard: {
    backgroundColor: '#252B3B',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffffff0f',
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  mealSection: {
    marginBottom: 16,
  },
  mealType: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: '#fff',
  },
  mealContent: {
    flexDirection: 'row',
  },
  mealImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  mealDetails: {
    flex: 1,
  },
  nutritionBox: {
    backgroundColor: '#2A3142',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  nutritionText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },
  sectionTitle: {
    fontWeight: '600',
    color: '#ccc',
    marginBottom: 4,
  },
  ingredientText: {
    color: '#ccc',
    marginLeft: 8,
    marginBottom: 2,
  },
  instructions: {
    color: '#aaa',
    marginTop: 4,
  },
});
