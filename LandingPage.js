// LandingPage.js

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./logo.png')} // Ensure this path is correct relative to your project structure
          style={styles.headerImg}
        />
        <Text style={styles.title}>Welcome to Alumni Connect</Text>
        <Text style={styles.subtitle}>Stay connected with your alumni network!</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AuthPage', { screen: 'login' })}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AuthPage', { screen: 'signup' })}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf4',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerImg: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
