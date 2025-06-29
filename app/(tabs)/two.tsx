import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { topSchools } from '../../data/topSchools';

export default function Majors() {
  // Add error handling in case the import fails
  if (!topSchools || !Array.isArray(topSchools)) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Post-Secondary Majors</Text>
        <Text style={styles.subtitle}>Loading industry data...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Post-Secondary Majors</Text>
      <Text style={styles.subtitle}>Based on Nothing</Text>
      
      {topSchools.map((university) => (
        <Link
          key={university.slug}
          href={`/${university.slug}`}
          asChild
        >
          <View style={styles.universityCard}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>#{university.rank}</Text>
            </View>
            <View style={styles.universityInfo}>
              <Text style={styles.universityName}>{university.name}</Text>
              <Text style={styles.location}>{university.location}</Text>
              <Text style={styles.satScore}>SAT 25th: {university.sat25th} | 75th: {university.sat75th}</Text>
              <Text style={styles.gpaScore}>GPA: {university.avgGPA}</Text>
            </View>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  universityCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rankContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rank: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  universityInfo: {
    flex: 1,
  },
  universityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  satScore: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
    marginBottom: 2,
  },
  gpaScore: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '500',
  },
}); 