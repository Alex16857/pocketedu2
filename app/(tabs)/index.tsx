import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoCard}>
        <Image
          source={require('../../assets/images/pocketedu.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.subtitle}>Discover top U.S. universities and their stats.</Text>
      <Pressable style={styles.button} onPress={() => router.push('/top-universities')}>
        <Text style={styles.buttonText}>Go to University List</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.secondButton]} onPress={() => router.push('/two')}>
        <Text style={styles.buttonText}>Go to Majors</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
    padding: 24,
  },
  logoCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  logo: {
    width: 220,
    height: 120,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.text,
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Lato',
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    width: 240,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  secondButton: {
    marginBottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'LatoBold',
    letterSpacing: 0.5,
  },
});