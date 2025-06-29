import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { topSchools } from '../../data/topSchools';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

function getAverageGPA(avgGPA: string | null): number {
  if (!avgGPA || avgGPA === 'N/A') return 0;
  if (avgGPA.includes('–') || avgGPA.includes('-')) {
    const parts = avgGPA.split(/–|-/).map(s => s.trim());
    if (parts.length === 2) {
      const low = Number(parts[0]);
      const high = Number(parts[1]);
      if (!isNaN(low) && !isNaN(high)) {
        return (low + high) / 2;
      }
    }
  }
  const value = Number(avgGPA);
  return isNaN(value) ? 0 : value;
}

export default function TopUniversities() {
  const [sortBy, setSortBy] = useState('rank');

  if (!topSchools || !Array.isArray(topSchools)) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Top 20 U.S. Universities</Text>
        <Text style={styles.subtitle}>Loading university data...</Text>
      </View>
    );
  }

  let sortedSchools = [...topSchools];
  if (sortBy === 'rank') {
    sortedSchools.sort((a, b) => a.rank - b.rank);
  } else if (sortBy === 'sat25th') {
    sortedSchools.sort((a, b) => Number(b.sat25th) - Number(a.sat25th));
  } else if (sortBy === 'sat75th') {
    sortedSchools.sort((a, b) => Number(b.sat75th) - Number(a.sat75th));
  } else if (sortBy === 'avgGPA') {
    sortedSchools.sort((a, b) => {
      const gpaA = getAverageGPA(a.avgGPA);
      const gpaB = getAverageGPA(b.avgGPA);
      // Put null values at the bottom
      if (gpaA === 0 && gpaB === 0) return 0;
      if (gpaA === 0) return 1;
      if (gpaB === 0) return -1;
      return gpaB - gpaA;
    });
  } else if (sortBy === 'acceptanceRate') {
    sortedSchools.sort((a, b) => {
      const rateA = a.acceptanceRate ? parseFloat(a.acceptanceRate.replace('%', '')) : 0;
      const rateB = b.acceptanceRate ? parseFloat(b.acceptanceRate.replace('%', '')) : 0;
      // Put null values at the bottom
      if (rateA === 0 && rateB === 0) return 0;
      if (rateA === 0) return 1;
      if (rateB === 0) return -1;
      return rateA - rateB; // Lower acceptance rate first (more selective)
    });
  }

  const renderStatistic = (university: any) => {
    switch (sortBy) {
      case 'rank':
        return <Text style={styles.statistic}>Rank: #{university.rank}</Text>;
      case 'sat25th':
        return <Text style={styles.statistic}>SAT 25th Percentile: {university.sat25th === "N/A" ? "N/A" : university.sat25th}</Text>;
      case 'sat75th':
        return <Text style={styles.statistic}>SAT 75th Percentile: {university.sat75th === "N/A" ? "N/A" : university.sat75th}</Text>;
      case 'avgGPA':
        return <Text style={styles.statistic}>GPA: {university.avgGPA || "N/A"}</Text>;
      case 'acceptanceRate':
        return <Text style={styles.statistic}>Acceptance Rate: {university.acceptanceRate || "N/A"}</Text>;
      default:
        return <Text style={styles.statistic}>Rank: #{university.rank}</Text>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Top 20 U.S. Universities</Text>
      <Text style={styles.subtitle}>Based on 2024 US News Rankings</Text>
      <Picker
        selectedValue={sortBy}
        onValueChange={(itemValue: string) => setSortBy(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Ranking" value="rank" />
        <Picker.Item label="SAT 25th Percentile" value="sat25th" />
        <Picker.Item label="SAT 75th Percentile" value="sat75th" />
        <Picker.Item label="Average GPA" value="avgGPA" />
        <Picker.Item label="Acceptance Rate" value="acceptanceRate" />
      </Picker>
      {sortedSchools.map((university) => (
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
              {renderStatistic(university)}
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
  picker: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
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
  statistic: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
}); 