import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTheme } from '../../contexts/ThemeContext';
import createStyles from './styles';
import { colors } from '../../theme/colors';

const HouseholdBox = React.memo(({ householdData = {}, handleChange = () => {} }) => {
  const {
    householdSize = 1,
    budget = 75,
    householdMembers = [],
  } = householdData;

  const displayName = useMemo(
    () => householdMembers[0]?.name || 'Guest',
    [householdMembers]
  );

  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View>
      <Text style={styles.heading}>Welcome, {displayName}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Household Size:</Text>
        <Text style={styles.value}>{householdSize}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable
          style={styles.button}
          onPress={() => handleChange('householdSize', Math.max(1, householdSize - 1))}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleChange('householdSize', householdSize + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.subheading}>Weekly Budget</Text>
      <Text style={styles.budget}>${budget}</Text>

      <Slider
        style={styles.slider}
        minimumValue={30}
        maximumValue={300}
        step={1}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.border}
        thumbTintColor={colors.primary}
        value={budget}
        onValueChange={(value) => handleChange('budget', Math.round(value))}
      />
    </View>
  );
});

export default HouseholdBox;
