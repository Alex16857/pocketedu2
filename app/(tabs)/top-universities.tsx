import React, { useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View as ThemedView } from '@/components/Themed';
import { Link } from 'expo-router';
import { topSchools } from '../../data/topSchools';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Animated } from 'react-native';
import Colors from '@/constants/Colors';

function getAverageSAT(sat25th: string, sat75th: string): number {
  const low = Number(sat25th);
  const high = Number(sat75th);
  if (!isNaN(low) && !isNaN(high)) {
    return Math.round((low + high) / 2);
  } else if (!isNaN(low)) {
    return low;
  } else if (!isNaN(high)) {
    return high;
  } else {
    return 0;
  }
}

export default function TopUniversities() {
  const [sortBy, setSortBy] = useState('rank');
  const [reverse, setReverse] = useState(false);
  const [search, setSearch] = useState('');

  // Animated values for header hide/show
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeight = 300; // px (increased from 220)
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2, headerHeight],
    outputRange: [1, 0.3, 0],
    extrapolate: 'clamp',
  });

  console.log('Number of universities:', topSchools.length);

  if (!topSchools || !Array.isArray(topSchools)) {
    return (
      <ThemedView style={styles.container}>
        <Text style={styles.header}>Top 50 U.S. Universities</Text>
        <Text style={styles.subtitle}>Loading university data...</Text>
      </ThemedView>
    );
  }

  let sortedSchools = [...topSchools];
  if (sortBy === 'rank') {
    sortedSchools.sort((a, b) => reverse ? b.rank - a.rank : a.rank - b.rank);
  } else if (sortBy === 'sat25th') {
    sortedSchools.sort((a, b) => {
      // Handle "DNC" values - put them at the bottom
      if (a.sat25th === "DNC" && b.sat25th === "DNC") return 0;
      if (a.sat25th === "DNC") return 1;
      if (b.sat25th === "DNC") return -1;
      
      const scoreA = Number(a.sat25th);
      const scoreB = Number(b.sat25th);
      return reverse ? scoreA - scoreB : scoreB - scoreA;
    });
  } else if (sortBy === 'sat75th') {
    sortedSchools.sort((a, b) => {
      // Handle "DNC" values - put them at the bottom
      if (a.sat75th === "DNC" && b.sat75th === "DNC") return 0;
      if (a.sat75th === "DNC") return 1;
      if (b.sat75th === "DNC") return -1;
      
      const scoreA = Number(a.sat75th);
      const scoreB = Number(b.sat75th);
      return reverse ? scoreA - scoreB : scoreB - scoreA;
    });
  } else if (sortBy === 'acceptanceRate') {
    sortedSchools.sort((a, b) => {
      const rateA = a.acceptanceRate ? parseFloat(a.acceptanceRate.replace('%', '')) : 0;
      const rateB = b.acceptanceRate ? parseFloat(b.acceptanceRate.replace('%', '')) : 0;
      // Put null values at the bottom
      if (rateA === 0 && rateB === 0) return 0;
      if (rateA === 0) return 1;
      if (rateB === 0) return -1;
      return reverse ? rateB - rateA : rateA - rateB; // Lower acceptance rate first (more selective)
    });
  } else if (sortBy === 'internationalStudentPercent') {
    sortedSchools.sort((a, b) => {
      // Parse percentage strings
      const parsePercent = (value: string) => {
        if (!value) return 0;
        return parseFloat(value.replace('%', ''));
      };
      
      const percentA = parsePercent(a.internationalStudentPercent);
      const percentB = parsePercent(b.internationalStudentPercent);
      
      return reverse ? percentB - percentA : percentA - percentB;
    });
  }

  // Filter by search query
  const filteredSchools = sortedSchools.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderStatistic = (university: any) => {
    switch (sortBy) {
      case 'rank':
        return (
          <>
            <Text style={styles.statistic}>Rank: #{university.rank}</Text>
            <Text style={styles.statistic}>Avg SAT: {getAverageSAT(university.sat25th, university.sat75th)}</Text>
            <Text style={styles.statistic}>Acceptance Rate: {university.acceptanceRate || "N/A"}</Text>
          </>
        );
      case 'sat25th':
        return <Text style={styles.statistic}>SAT 25th Percentile: {university.sat25th === "DNC" ? "DNC" : university.sat25th}</Text>;
      case 'sat75th':
        return <Text style={styles.statistic}>SAT 75th Percentile: {university.sat75th === "DNC" ? "DNC" : university.sat75th}</Text>;
      case 'acceptanceRate':
        return <Text style={styles.statistic}>Acceptance Rate: {university.acceptanceRate || "N/A"}</Text>;
      case 'internationalStudentPercent':
        return <Text style={styles.statistic}>International Students: {university.internationalStudentPercent || "N/A"}</Text>;
      default:
        return <Text style={styles.statistic}>Rank: #{university.rank}</Text>;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Animated.View
        style={[
          styles.animatedHeader,
          { transform: [{ translateY: headerTranslateY }], height: headerHeight, opacity: headerOpacity },
        ]}
      >
        <Text style={styles.header}>Top 50 U.S. Universities</Text>
        <Text style={styles.subtitle}>Based on 2024 US News Rankings</Text>
        <TextInput
          style={[styles.searchBar, { fontFamily: 'Lato' }]}
          placeholder="Search universities..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
        />
        <Picker
          selectedValue={sortBy}
          onValueChange={(itemValue: string) => setSortBy(itemValue)}
          style={[styles.picker, { fontFamily: 'Lato' }]}
        >
          <Picker.Item label="Ranking" value="rank" style={{ fontFamily: 'Lato' }} />
          <Picker.Item label="SAT 25th Percentile" value="sat25th" style={{ fontFamily: 'Lato' }} />
          <Picker.Item label="SAT 75th Percentile" value="sat75th" style={{ fontFamily: 'Lato' }} />
          <Picker.Item label="Acceptance Rate" value="acceptanceRate" style={{ fontFamily: 'Lato' }} />
          <Picker.Item label="International Students" value="internationalStudentPercent" style={{ fontFamily: 'Lato' }} />
        </Picker>
        <View style={styles.buttonContainer}>
          <Text style={styles.button} onPress={() => setReverse(!reverse)}>
            {reverse ? '↑ Ascending' : '↓ Descending'}
          </Text>
        </View>
      </Animated.View>
      <Animated.FlatList
        data={filteredSchools}
        keyExtractor={(university) => university.slug}
        renderItem={({ item: university }) => (
          <Link href={`/${university.slug}`} asChild>
            <View style={styles.universityCard}>
              <View style={styles.rankContainer}>
                <Text style={styles.rank}>#{university.rank}</Text>
              </View>
              <View style={styles.universityInfo}>
                <Text style={styles.universityName}>{university.name}</Text>
                <Text style={styles.location}>
                  {university.city && university.state
                    ? `${university.city}, ${university.state}`
                    : university.city || university.state || ""}
                </Text>
                {renderStatistic(university)}
              </View>
            </View>
          </Link>
        )}
        contentContainerStyle={{ paddingBottom: 16, paddingTop: headerHeight }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 16,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 8,
    color: Colors.light.text,
    fontFamily: 'Lato',
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.light.accent,
    fontFamily: 'LatoLight',
    lineHeight: 22,
  },
  picker: {
    marginBottom: 16,
    backgroundColor: Colors.light.card,
    borderRadius: 8,
    color: Colors.light.text,
    borderWidth: 1,
    borderColor: Colors.light.text,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  universityCard: {
    backgroundColor: Colors.light.card,
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
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rank: {
    color: Colors.light.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  universityInfo: {
    flex: 1,
  },
  universityName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 4,
    lineHeight: 25,
  },
  location: {
    fontSize: 14,
    color: Colors.light.accent,
    marginBottom: 4,
    lineHeight: 20,
  },
  statistic: {
    fontSize: 14,
    color: Colors.light.primary,
    fontWeight: '500',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  button: {
    padding: 12,
    backgroundColor: Colors.light.primary,
    borderRadius: 8,
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'LatoBold',
  },
  searchBar: {
    backgroundColor: Colors.light.card,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.light.accent,
    color: Colors.light.text,
  },
  animatedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
}); 