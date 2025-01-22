import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from 'react-redux';

const HealthConcernsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const healthConcerns = useSelector((state) => state.form.healthConcerns);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [priorityConcerns, setPriorityConcerns] = useState([]);

  useEffect(() => {
    dispatch({ type: 'FETCH_HEALTH_CONCERNS', payload: 'HealthConcern.json' });
  }, [dispatch]);

  const toggleConcern = (id) => {
    setSelectedConcerns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    dispatch({ type: 'SET_SELECTED_HEALTH_CONCERNS', payload: priorityConcerns });
    navigation.navigate('Diet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select and Prioritize Your Health Concerns</Text>
      <FlatList
        data={healthConcerns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.option}
            onPress={() => toggleConcern(item.id)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <DraggableFlatList
        data={selectedConcerns.map((id) =>
          healthConcerns.find((concern) => concern.id === id)
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, drag }) => (
          <TouchableOpacity style={styles.option} onLongPress={drag}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        onDragEnd={({ data }) => setPriorityConcerns(data)}
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
});

export default HealthConcernsScreen;