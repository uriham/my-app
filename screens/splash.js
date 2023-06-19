import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: '지금의 몸의 피로도를 느끼세요', checked: false },
    { id: 2, text: '눈의 상태를 느끼세요.', checked: false },
    { id: 3, text: '왜오늘 지금 이시간에 자려했나요?', checked: false },
    { id: 4, text: '내일 일정을 생각해 보세요', checked: false },
    { id: 5, text: '지금 얼마나 졸린지 확인해 보세요', checked: false },
  ]);

  const handleCheckboxToggle = (id) => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      });
    });
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.BottomText}>마음챙김 완료</Text>
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
});
