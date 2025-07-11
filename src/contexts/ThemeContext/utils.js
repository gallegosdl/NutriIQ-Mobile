/**
 * Utility helpers for ThemeContext
 */

import { THEME_MODES } from '../../styles/themes';

export const getThemeFromSystem = () => {
  return Appearance.getColorScheme() || THEME_MODES.DARK;
};
