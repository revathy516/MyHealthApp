import React, { useState } from 'react';
import { View, Text, Button, Switch, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const LifestyleScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isSmoke, setIsSmoke] = useState(false);
  const [alcohol, setAlcohol] = useState('');
  const [dailyExposure, setDailyExposure] = useState(false);

  const handleSubmit = () => {
    dispatch({
      type: 'SET_LIFESTYLE',
      payload: { isSmoke, alcohol, dailyExposure },
    });
    navigation.navigate('Summary');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lifestyle Choices</Text>
      <View style={styles.switchContainer}>
        <Text>Do you smoke?</Text>
        <Switch value={isSmoke} onValueChange={setIsSmoke} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Alcohol Consumption"
        value={alcohol}
        onChangeText={setAlcohol}
      />
      <View style={styles.switchContainer}>
        <Text>Do you have daily exposure to harmful substances?</Text>
        <Switch value={dailyExposure} onValueChange={setDailyExposure} />
      </View>
      <Button title="Next" onPress={handleSubmit} />
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default LifestyleScreen;
