import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import HouseholdBox from '../components/HouseholdBox';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header
        user={{ name: 'Darrell', avatar_url: null }}
        onLogout={() => console.log('Logout pressed')}
      />
      <HouseholdBox
        householdData={{
          householdSize: 1,
          budget: 75,
          householdMembers: [{ id: 1, name: 'Darrell' }],
        }}
        handleChange={(field, value) => console.log('Change', field, value)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    padding: 16,
  },
});
