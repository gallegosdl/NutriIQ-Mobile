import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { commonStyles } from '../../theme/commonStyles';

const AvoidedFoods = React.memo(({ dislikes }) => {
  const items = useMemo(() => {
    return dislikes
      ? dislikes.split(',').map(item => item.trim()).filter(Boolean)
      : [];
  }, [dislikes]);

  return (
    <View style={commonStyles.card}>
      <Text style={styles.title}>Avoided Foods</Text>
      <View style={styles.tagContainer}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Text key={index} style={styles.tag}>
              {item}
            </Text>
          ))
        ) : (
          <Text style={styles.placeholder}>
            Enter avoided foods in Meal Preferences
          </Text>
        )}
      </View>
    </View>
  );
});

export default AvoidedFoods;
