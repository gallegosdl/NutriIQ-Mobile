/**
 * @file Theme Context Provider for Nutri IQ
 * @description Production-ready React Native version
 */

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    useMemo
  } from 'react';
  import { Appearance } from 'react-native';
  import { THEME_MODES, getTheme, isValidThemeMode } from '../../styles/theme';
  import { clearStyleCache } from '../../utils/styleUtils';
  
  const ThemeContext = createContext(null);
  
  // Storage constants
  const STORAGE_KEY = 'nutri-iq-theme';
  const DEFAULT_THEME = THEME_MODES.DARK;
  
  export const ThemeProvider = ({
    children,
    defaultTheme = DEFAULT_THEME,
    enableSystemDetection = true,
    onThemeChange = null
  }) => {
    const [themeMode, setThemeMode] = useState(defaultTheme);
    const [isSystemTheme, setIsSystemTheme] = useState(enableSystemDetection);
  
    // Sync with system preference
    useEffect(() => {
      if (!enableSystemDetection) return;
      const colorScheme = Appearance.getColorScheme();
      if (colorScheme) {
        setThemeMode(colorScheme);
        setIsSystemTheme(true);
      }
      const listener = Appearance.addChangeListener(({ colorScheme }) => {
        setThemeMode(colorScheme || DEFAULT_THEME);
        setIsSystemTheme(true);
      });
      return () => listener.remove();
    }, [enableSystemDetection]);
  
    const currentTheme = useMemo(() => getTheme(themeMode), [themeMode]);
    const isDarkMode = themeMode === THEME_MODES.DARK;
    const isLightMode = themeMode === THEME_MODES.LIGHT;
  
    // Theme setter
    const setTheme = useCallback((mode) => {
      if (!isValidThemeMode(mode)) {
        console.warn(`Invalid theme mode: ${mode}`);
        return;
      }
      setThemeMode(mode);
      setIsSystemTheme(false);
      clearStyleCache();
      if (onThemeChange) onThemeChange(mode);
    }, [onThemeChange]);
  
    const toggleTheme = useCallback(() => {
      setTheme(isDarkMode ? THEME_MODES.LIGHT : THEME_MODES.DARK);
    }, [isDarkMode, setTheme]);
  
    const resetTheme = useCallback(() => {
      setTheme(defaultTheme);
    }, [defaultTheme, setTheme]);
  
    const contextValue = useMemo(() => ({
      themeMode,
      currentTheme,
      isDarkMode,
      isLightMode,
      isSystemTheme,
      setTheme,
      toggleTheme,
      resetTheme,
      getTheme,
      isValidThemeMode,
      availableThemes: Object.values(THEME_MODES)
    }), [
      themeMode,
      currentTheme,
      isDarkMode,
      isLightMode,
      isSystemTheme,
      setTheme,
      toggleTheme,
      resetTheme
    ]);
  
    return (
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  // Hooks
  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
  };
  
  export const useThemeMode = () => useTheme().themeMode;
  export const useThemeToggle = () => useTheme().toggleTheme;
  export const useCurrentTheme = () => useTheme().currentTheme;
  export const useIsDarkMode = () => useTheme().isDarkMode;
  
  export default ThemeProvider;
  