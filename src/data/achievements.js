export const achievements = [
  {
    label: 'CodeChef Rating',
    value: 1480,
    suffix: '+',
    icon: '⭐',
    description: 'Competitive programming on CodeChef',
  },
  {
    label: 'Problems Solved',
    value: 500,
    suffix: '+',
    icon: '🧩',
    description: 'Across LeetCode, CodeChef, HackerRank',
  },
  {
    label: 'DSA Solutions',
    value: 50,
    suffix: '+',
    icon: '💡',
    description: 'Built during ByteXL bootcamp training',
  },
  {
    label: 'Debugging Issues',
    value: 25,
    suffix: '+',
    icon: '🔧',
    description: 'Complex codebase errors resolved',
  },
]

export const trainings = [
  {
    title: 'Winter PEP Training',
    organization: 'Test Yantra',
    date: "Jan '26 – Feb '26",
    bullets: [
      'Completed intensive full-stack training covering Core Java and Advanced Java concepts',
      'Developed backend applications using Hibernate, Spring MVC, Spring JPA, and Spring Boot',
      'Gained hands-on experience with AWS services including EC2, S3, RDS, Lambda, and IAM',
      'Deployed and managed applications on cloud infrastructure with secure access control using IAM',
      'Trained under domain experts across Java backend frameworks and cloud technologies',
    ],
    stats: [
      { label: 'Hours', value: '150+' },
      { label: 'Stack', value: 'Java Full Stack' },
      { label: 'AWS', value: 'EC2, S3, RDS, Lambda, IAM' },
    ],
  },
  {
    title: 'Summer PEP Training',
    organization: 'ByteXL',
    date: "Jun '25 – Jul '25",
    bullets: [
      'Completed a 150-hour bootcamp in DSA and core Java',
      'Built 50+ DSA solutions in Java and ranked in the top 10% in coding challenges',
      'Resolved 25+ complex debugging issues, identifying recurring codebase errors',
    ],
    stats: [
      { label: 'Hours', value: '150+' },
      { label: 'DSA Solutions', value: '50+' },
      { label: 'Ranking', value: 'Top 10%' },
    ],
  }
]
