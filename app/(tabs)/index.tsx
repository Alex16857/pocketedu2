import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/pocketedu.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to PocketEdu!</Text>
      <Text style={styles.subtitle}>Discover top U.S. universities and their stats.</Text>
      <Pressable style={styles.link} onPress={() => router.push('/top-universities')}>
        <Text style={styles.linkText}>Go to University List</Text>
      </Pressable>
      <Pressable style={[styles.link, styles.secondLink]} onPress={() => router.push('/two')}>
        <Text style={styles.linkText}>Go to Majors</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#e8e8e8', 
    padding: 24,
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 0,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    marginTop: 20,
    marginBottom: 16, 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18, 
    marginBottom: 32, 
    textAlign: 'center',
    color: '#666',
  },
  link: {
    backgroundColor: '#6f8faf', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 8,
    marginBottom: 16,
  },
  secondLink: {
    marginBottom: 0,
  },
  linkText: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600',
  },
});