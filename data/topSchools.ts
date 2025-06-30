export interface University {
  name: string;
  slug: string;
  rank: number;
  location: string;
  sat25th: string;
  sat50th: string;
  sat75th: string;
  avgGPA: string | null;
  acceptanceRate: string | null;
  employabilityRank: number | null;
}

export const topSchools: University[] = [
  {
    name: "Princeton University",
    slug: "princeton-university",
    rank: 1,
    location: "Princeton, NJ",
    sat25th: "1500",
    sat50th: "1530",
    sat75th: "1560",
    avgGPA: "3.94",
    acceptanceRate: "5.7%",
    employabilityRank: 5
  },
  {
    name: "Massachusetts Institute of Technolog y",
    slug: "massachusetts-institute-of-technology",
    rank: 2,
    location: "Cambridge, MA",
    sat25th: "1520",
    sat50th: "1550",
    sat75th: "1570",
    avgGPA: null,
    acceptanceRate: "4.0%",
    employabilityRank: 1
  },
  {
    name: "Harvard University",
    slug: "harvard-university",
    rank: 3,
    location: "Cambridge, MA",
    sat25th: "1500",
    sat50th: "1540",
    sat75th: "1580",
    avgGPA: null,
    acceptanceRate: "3.4%",
    employabilityRank: 4
  },
  {
    name: "Stanford University",
    slug: "stanford-university",
    rank: 4,
    location: "Stanford, CA",
    sat25th: "1510",
    sat50th: "1540",
    sat75th: "1570",
    avgGPA: "3.9–4.0",
    acceptanceRate: "3.9%",
    employabilityRank: 3
  },
  {
    name: "Yale University",
    slug: "yale-university",
    rank: 5,
    location: "New Haven, CT",
    sat25th: "1480",
    sat50th: "1520",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "4.6%",
    employabilityRank: 6
  },
  {
    name: "California Institute of Technology",
    slug: "california-institute-of-technology",
    rank: 6,
    location: "Pasadena, CA",
    sat25th: "1530",
    sat50th: "1550",
    sat75th: "1570",
    avgGPA: null,
    acceptanceRate: "2.7%",
    employabilityRank: 2
  },
  {
    name: "Duke University",
    slug: "duke-university",
    rank: 6,
    location: "Durham, NC",
    sat25th: "1490",
    sat50th: "1530",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "5.1%",
    employabilityRank: 11
  },
  {
    name: "Johns Hopkins University",
    slug: "johns-hopkins-university",
    rank: 6,
    location: "Baltimore, MD",
    sat25th: "1530",
    sat50th: "1550",
    sat75th: "1560",
    avgGPA: "3.95",
    acceptanceRate: "7.3%",
    employabilityRank: 15
  },
  {
    name: "Northwestern University",
    slug: "northwestern-university",
    rank: 6,
    location: "Evanston, IL",
    sat25th: "1500",
    sat50th: "1530",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "7.0%",
    employabilityRank: 25
  },
  {
    name: "University of Pennsylvania",
    slug: "university-of-pennsylvania",
    rank: 10,
    location: "Philadelphia, PA",
    sat25th: "1500",
    sat50th: "1540",
    sat75th: "1570",
    avgGPA: "3.9",
    acceptanceRate: "5.8%",
    employabilityRank: 24
  },
  {
    name: "Cornell University",
    slug: "cornell-university",
    rank: 11,
    location: "Ithaca, NY",
    sat25th: "1510",
    sat50th: "1540",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "7.3%",
    employabilityRank: 19
  },
  {
    name: "University of Chicago",
    slug: "university-of-chicago",
    rank: 11,
    location: "Chicago, IL",
    sat25th: "1510",
    sat50th: "1540",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "5.0%",
    employabilityRank: 13
  },
  {
    name: "Brown University",
    slug: "brown-university",
    rank: 13,
    location: "Providence, RI",
    sat25th: "1510",
    sat50th: "1540",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "5.0%",
    employabilityRank: 18
  },
  {
    name: "Columbia University",
    slug: "columbia-university",
    rank: 13,
    location: "New York, NY",
    sat25th: "1500",
    sat50th: "1530",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "3.9%",
    employabilityRank: 7
  },
  {
    name: "Dartmouth College",
    slug: "dartmouth-college",
    rank: 15,
    location: "Hanover, NH",
    sat25th: "1450",
    sat50th: "1500",
    sat75th: "1550",
    avgGPA: null,
    acceptanceRate: "6.2%",
    employabilityRank: 16
  },
  {
    name: "University of California, Los Angeles",
    slug: "university-of-california-los-angeles",
    rank: 15,
    location: "Los Angeles, CA",
    sat25th: "1290",
    sat50th: "1400",
    sat75th: "1510",
    avgGPA: "4.6",
    acceptanceRate: "8.8%",
    employabilityRank: 21
  },
  {
    name: "University of California, Berkeley",
    slug: "university-of-california-berkeley",
    rank: 17,
    location: "Berkeley, CA",
    sat25th: "1300",
    sat50th: "1420",
    sat75th: "1530",
    avgGPA: "4.5",
    acceptanceRate: "11.6%",
    employabilityRank: 8
  },
  {
    name: "Rice University",
    slug: "rice-university",
    rank: 18,
    location: "Houston, TX",
    sat25th: "1510",
    sat50th: "1540",
    sat75th: "1570",
    avgGPA: null,
    acceptanceRate: "7.7%",
    employabilityRank: 22
  },
  {
    name: "University of Notre Dame",
    slug: "university-of-notre-dame",
    rank: 18,
    location: "Notre Dame, IN",
    sat25th: "1440",
    sat50th: "1490",
    sat75th: "1540",
    avgGPA: null,
    acceptanceRate: "12.9%",
    employabilityRank: 50
  },
  {
    name: "Vanderbilt University",
    slug: "vanderbilt-university",
    rank: 18,
    location: "Nashville, TN",
    sat25th: "1500",
    sat50th: "1530",
    sat75th: "1560",
    avgGPA: null,
    acceptanceRate: "6.7%",
    employabilityRank: 45
  },
  {
    name: "Carnegie Mellon University",
    slug: "carnegie-mellon-university",
    rank: 21,
    location: "Pittsburgh, PA",
    sat25th: "1510",
    sat50th: "1540",
    sat75th: "1570",
    avgGPA: "3.91",
    acceptanceRate: "11.3%",
    employabilityRank: 9
  },
  {
    name: "University of Michigan, Ann Arbor",
    slug: "university-of-michigan-ann-arbor",
    rank: 21,
    location: "Ann Arbor, MI",
    sat25th: "1360",
    sat50th: "1450",
    sat75th: "1530",
    avgGPA: "3.9",
    acceptanceRate: "17.7%",
    employabilityRank: 28
  },
  {
    name: "Washington University in St. Louis",
    slug: "washington-university-in-st-louis",
    rank: 21,
    location: "St. Louis, MO",
    sat25th: "1500",
    sat50th: "1540",
    sat75th: "1570",
    avgGPA: "4.24",
    acceptanceRate: "11.3%",
    employabilityRank: 69
  },
  {
    name: "Emory University",
    slug: "emory-university",
    rank: 24,
    location: "Atlanta, GA",
    sat25th: "1450",
    sat50th: "1490",
    sat75th: "1530",
    avgGPA: "3.89",
    acceptanceRate: "11.4%",
    employabilityRank: 35
  },
  {
    name: "Georgetown University",
    slug: "georgetown-university",
    rank: 24,
    location: "Washington, D.C.",
    sat25th: "1390",
    sat50th: "1460",
    sat75th: "1530",
    avgGPA: null,
    acceptanceRate: "12.2%",
    employabilityRank: 34
  },
  {
    name: "University of Virginia",
    slug: "university-of-virginia",
    rank: 24,
    location: "Charlottesville, VA",
    sat25th: "1410",
    sat50th: "1460",
    sat75th: "1510",
    avgGPA: null,
    acceptanceRate: "18.7%",
    employabilityRank: null // Not listed in top 100 global or US-specific ranking
  },
  {
    name: "University of North Carolina at Chapel Hill",
    slug: "university-of-north-carolina-at-chapel-hill",
    rank: 27,
    location: "Chapel Hill, NC",
    sat25th: "1340",
    sat50th: "1430",
    sat75th: "1510",
    avgGPA: "4.5",
    acceptanceRate: "16.8%",
    employabilityRank: 38
  },
  {
    name: "University of Southern California",
    slug: "university-of-southern-california",
    rank: 27,
    location: "Los Angeles, CA",
    sat25th: "1450",
    sat50th: "1490",
    sat75th: "1530",
    avgGPA: null,
    acceptanceRate: "12.0%",
    employabilityRank: 33
  },
  {
    name: "University of California, San Diego",
    slug: "university-of-california-san-diego",
    rank: 29,
    location: "La Jolla, CA",
    sat25th: "1310",
    sat50th: "1420",
    sat75th: "1530",
    avgGPA: null,
    acceptanceRate: "24.7%",
    employabilityRank: 36
  },
  {
    name: "New York University",
    slug: "new-york-university",
    rank: 30,
    location: "New York, NY",
    sat25th: "1450",
    sat50th: "1500",
    sat75th: "1540",
    avgGPA: null,
    acceptanceRate: "8.0%",
    employabilityRank: 10
  },
  {
    name: "University of Florida",
    slug: "university-of-florida",
    rank: 30,
    location: "Gainesville, FL",
    sat25th: "1310",
    sat50th: "1390",
    sat75th: "1470",
    avgGPA: null,
    acceptanceRate: "23.4%",
    employabilityRank: 40
  },
  {
    name: "University of Texas at Austin",
    slug: "university-of-texas-at-austin",
    rank: 30,
    location: "Austin, TX",
    sat25th: "1230",
    sat50th: "1370",
    sat75th: "1500",
    avgGPA: null,
    acceptanceRate: "31.4%",
    employabilityRank: 23
  }
];
