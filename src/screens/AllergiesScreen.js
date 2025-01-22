import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const AllergiesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allergies = useSelector((state) => state.form.allergies);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALLERGIES', payload: 'Allergies.json' });
  }, [dispatch]);

  const handleSubmit = () => {
    navigation.navigate('Lifestyle');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Allergies</Text>
      <FlatList
        data={allergies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.option}>
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
});

export default AllergiesScreen;
