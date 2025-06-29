import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { topSchools, University } from '../data/topSchools';

export default function UniversityPage() {
  const { slug } = useLocalSearchParams();
  console.log('slug param:', slug);
  const university = topSchools.find((u: University) => u.slug === slug);
  console.log('university found:', university);

  if (!university) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>University not found for slug: {slug}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{university.name}</Text>
      <Text style={styles.detail}>Location: {university.location}</Text>
      <Text style={styles.detail}>Rank: #{university.rank}</Text>
      <Text style={styles.detail}>SAT: {university.avgSAT}</Text>
      <Text style={styles.detail}>GPA: {university.avgGPA}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
    color: '#444',
    textAlign: 'center',
  },
  notFound: {
    fontSize: 22,
    color: 'red',
    textAlign: 'center',
  },
});

export function getHeaderTitle({ params }: { params: { slug: string } }) {
  const university = topSchools.find((u: University) => u.slug === params.slug);
  return university ? university.name : 'University';
} 