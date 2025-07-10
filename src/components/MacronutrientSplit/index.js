// src/components/MacronutrientSplit/index.js
import React, { useMemo } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';
import { colors } from '../../theme/colors';

const MacronutrientSplit = React.memo(({ macros, handleMacroChange }) => {
  const total = useMemo(() =>
    Object.values(macros).reduce((a, b) => a + b, 0), [macros]
  );

  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDark ? colors.surfaceDark : colors.surface }]}>
      <Text style={[styles.title, { color: isDark ? colors.textLight : colors.text }]}>
        Macronutrient Split
      </Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        Adjust sliders to set your macronutrient ratios. Total must equal 100%.
      </Text>

      {Object.entries(macros).map(([macro, value]) => (
        <View key={macro} style={styles.sliderContainer}>
          <View style={styles.sliderLabelRow}>
            <Text style={[styles.label, { color: colors.text }]}>{macro}</Text>
            <Text style={[styles.value, { color: colors.primary }]}>{value}%</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value}
            onValueChange={(val) => handleMacroChange(macro, Math.round(val))}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor={colors.border}
            thumbTintColor={colors.primary}
          />
        </View>
      ))}

      <View style={styles.totalContainer}>
        <Text style={{ color: colors.textSecondary }}>Total</Text>
        <Text style={[
          styles.totalValue,
          { color: total === 100 ? colors.success : colors.warning }
        ]}>
          {total}%
        </Text>
      </View>
    </View>
  );
});

export default MacronutrientSplit;
