import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: 'Yes', checked: false },
    { id: 2, text: 'No', checked: false },
  ]);

  const handleCheckboxToggle = (id) => {
    setCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = prevCheckboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, checked: true };
        }
        return { ...checkbox, checked: false };
      });
      return updatedCheckboxes;
    });
  };

  return (
    <View style={styles.container}>
      <Text>지금 자러 가실건가요?</Text>
      {checkboxes.map((checkbox) => (
        <TouchableOpacity
          key={checkbox.id}
          style={styles.checkboxContainer}
          onPress={() => handleCheckboxToggle(checkbox.id)}
        >
          <View style={[styles.checkbox, checkbox.checked && styles.checkboxChecked]} />
          <Text style={styles.checkboxText}>{checkbox.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={() => navigation.navigate("Signin", { screen: 'Signin' })}
        style={styles.NextBottom}
      >
        <Text style={styles.BottomText}>Mindfulness Done</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: 'blue',
  },
  checkboxText: {
    fontSize: 16,
  },
  NextBottom: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: '20%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});
