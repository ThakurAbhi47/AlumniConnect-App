// SignupPage.js

import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function SignupPage({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput 
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              style={styles.textInput}
              placeholder='Enter your email'
              placeholderTextColor='#6b7280'
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
              secureTextEntry
              style={styles.textInput}
              placeholder='Enter your password'
              placeholderTextColor='#6b7280'
              value={form.password}
              onChangeText={password => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput 
              secureTextEntry
              style={styles.textInput}
              placeholder='Confirm your password'
              placeholderTextColor='#6b7280'
              value={form.confirmPassword}
              onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity 
              onPress={() => {
                if (form.password !== form.confirmPassword) {
                  Alert.alert("Passwords do not match");
                } else {
                  Alert.alert("Successfully signed up!");
                  navigation.navigate('Login'); // Navigate back to Login page
                }
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  formAction: {
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
