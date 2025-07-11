import { PANTRY_ITEMS, FRESH_CATEGORIES } from '../config/pantryConfig';

/**
 * Categorize an ingredient name into PANTRY or FRESH category.
 * Falls back to 'OTHER' if no match.
 * 
 * @param {string} name - Ingredient name
 * @returns {string} - Category name
 */
export const categorizeIngredient = (name) => {
  if (!name || typeof name !== 'string') {
    return 'OTHER';
  }

  const lowercaseName = name.toLowerCase();

  // Check pantry categories first
  for (const [category, items] of Object.entries(PANTRY_ITEMS)) {
    if (items.some(item => lowercaseName.includes(item.toLowerCase()))) {
      return category;
    }
  }

  // Then check fresh/perishable categories
  for (const [category, items] of Object.entries(FRESH_CATEGORIES)) {
    if (items.some(item => lowercaseName.includes(item.toLowerCase()))) {
      return category;
    }
  }

  return 'OTHER';
};
