// AuthPage.js

import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function AuthPage({ route }) {
  const { screen } = route.params;
  const [formType, setFormType] = useState(screen); // Default to the screen passed in navigation

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleAuth = () => {
    if (formType === 'login') {
      Alert.alert('Login successful!');
    } else {
      if (form.password !== form.confirmPassword) {
        Alert.alert('Passwords do not match!');
      } else {
        Alert.alert('Signup successful!');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.header}>
          <Image
            source={require('./logo.png')}
            style={styles.headerImg}
            onError={() => console.log("Failed to load image")}
          />
          <Text style={styles.fallbackText}>Alumni Connect</Text>
        </View>

        <Text style={styles.title}>
          {formType === 'login' ? 'Sign In to Your Account' : 'Create a New Account'}
        </Text>

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

        {formType === 'signup' && (
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
        )}

        <TouchableOpacity onPress={handleAuth} style={styles.btn}>
          <Text style={styles.btnText}>{formType === 'login' ? 'Sign In' : 'Sign Up'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFormType(formType === 'login' ? 'signup' : 'login')} style={styles.toggle}>
          <Text style={styles.toggleText}>
            {formType === 'login' ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#e8ecf4',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImg: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  fallbackText: {
    fontSize: 16,
    color: '#ff0000',
  },
  form: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
  btn: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  toggle: {
    marginTop: 20,
    alignItems: 'center',
  },
  toggleText: {
    color: '#1E90FF',
    fontSize: 14,
  },
});
