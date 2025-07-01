import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
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
      <Text style={styles.detail}>Location: {university.city}, {university.state}</Text>
      <Text style={styles.detail}>Rank: #{university.rank}</Text>
      <Text style={styles.detail}>SAT 25th: {university.sat25th} | 75th: {university.sat75th}</Text>
      <Text style={styles.detail}>Acceptance Rate: {university.acceptanceRate}</Text>
      <Text style={styles.detail}>International Student Percent: {university.internationalStudentPercent}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0efec',
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