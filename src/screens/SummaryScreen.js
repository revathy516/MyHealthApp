import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const SummaryScreen = ({ navigation }) => {
  const form = useSelector((state) => state.form);

  useEffect(() => {
    console.log('User preferences summary:', form);
  }, [form]);

  const handleSubmit = () => {
    dispatch({ type: 'SAVE_PREFERENCES', payload: form });
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary of Your Preferences</Text>
      <Text>Health Concerns: {form.selectedHealthConcerns.join(', ')}</Text>
      <Text>Diet: {form.diets.join(', ')}</Text>
      <Text>Allergies: {form.allergies.join(', ')}</Text>
      <Text>Lifestyle: Smoking - {form.lifestyle.isSmoke ? 'Yes' : 'No'}, Alcohol - {form.lifestyle.alcohol}</Text>
      <Button title="Finish" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SummaryScreen;
