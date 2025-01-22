import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const DietScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.form.diets);
  const selectedDiets = useSelector((state) => state.form.selectedDiets);
  const [localSelection, setLocalSelection] = useState([]);

  useEffect(() => {
    dispatch({ type: 'FETCH_DIETS', payload: 'Diets.json' });
  }, [dispatch]);

  useEffect(() => {
    setLocalSelection(selectedDiets);
  }, [selectedDiets]);

  const toggleDiet = (id) => {
    setLocalSelection((prev) =>
      prev.includes(id) ? prev.filter((dietId) => dietId !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (localSelection.length === 0) {
      Alert.alert('Validation Error', 'Please select at least one diet.');
      return;
    }
    dispatch({ type: 'SET_SELECTED_DIETS', payload: localSelection });
    navigation.navigate('Allergies');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Preferred Diet</Text>
      <FlatList
        data={diets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.option,
              localSelection.includes(item.id) && styles.selectedOption,
            ]}
            onPress={() => toggleDiet(item.id)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  option: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#add8e6',
  },
});

export default DietScreen;