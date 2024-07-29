export interface Event {
  title: string;
  description: string[];
  endDate: Date | null;
  startDate: Date;
  tags: string[];
  url: string;
}

export const timeline: Event[] = [
  {
    title: "Software Engineer at Frontdoor",
    description: [
      "Enhanced email delivery systems by enabling multi-recipient dispatch functionality, significantly improving operational efficiency.",
      "Upgraded messaging services to a newer Kafka platform, resulting in faster processing speeds and increased system resilience.",
      "Instituted masked email logging, ensuring privacy compliance and comprehensive auditability of communications.",
      "Introduced secure configuration management, enhancing security and operational reliability across multiple environments.",
      "Temporarily changed teams to contribute to the development of a flagship app set for launch soon, using React Native, TypeScript, and Expo.",
      "Focused on implementing a theme library used by multiple services, ensuring consistent design and user experience across applications.",
      "Collaborated closely with designers, product managers, and other engineers to deliver a seamless user experience.",
      "Conducted extensive testing and debugging to optimize performance and ensure app stability.",
      "Participated in code reviews and provided mentorship to junior developers, maintaining high coding standards.",
    ],
    startDate: new Date(2023, 1, 5),
    endDate: null,
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind",
      "C#",
      "Golang",
      "Kafka",
      "Node.js",
      "Visual Studio",
      "Git",
      "Splunk",
      "AWS",
      "Docker",
      "Jest",
      "Expo",
    ],
    url: "https://www.frontdoor.com/",
  },
  {
    title: "Software Engineer at Perform",
    description: [
      "Engineered a running coach management system for 40+ coaches to manage 300+ paying athletes, using Typescript React",
      "Problem solved, coordinated, and provided new feature releases with running coaches to maximize product quality and interest, contributing to 99% server uptime.",
      "Established and later migrated mobile app for athletes from Ionic React to React Native.",
      "Constructed email notification and daily digest systems for both coaches and runners.",
      "Coordinated integration and end-to-end tests for core flows to detect critical production bugs and ensure stability.",
      "Mentored and guided new engineers on React codebase to reduce technical onboarding time by 50%.",
    ],
    startDate: new Date(2022, 0, 3),
    endDate: new Date(2022, 9, 20),
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Php",
      "AWS",
      "Docker",
      "Swift",
    ],
    url: "https://www.performgroup.com/",
  },
  {
    title: "Software Engineer at Tata Consultancy Services",
    description: [
      "Designed an online banking web application in 50% less time than projected, allowing clients to create accounts, handle monetary transactions, and view previous transactions.",
      "Implemented an employee management system for managers to create and update employee information in an automated manner.",
      "Implemented AWS Elastic Cloud Compute, Elastic Load Balancer, and Relational Database Service instances, resulting in 99% server uptime.",
    ],
    startDate: new Date(2021, 7, 1),
    endDate: new Date(2021, 11, 31),
    tags: [
      "Java",
      "AWS",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SpringBoot",
      "Docker",
      "Jenkins",
      "Git",
    ],
    url: "https://www.tcs.com/",
  },
  {
    title: "Bachelors Degree in Computer Science from UC Santa Cruz",
    description: [
      "Relevant Coursework: Data Structures, Algorithms, Computer Architecture, Operating Systems, Software Engineering, Database Systems, Artificial Intelligence, Computer Graphics, Computer Vision, Machine Learning, Natural Language Processing, Computer Security, Computer Networks, and Distributed Systems",
      "Minor in Linguistics",
    ],
    startDate: new Date(2017, 8, 1),
    endDate: new Date(2021, 5, 1),
    tags: [
      "Java",
      "Python",
      "Pytorch",
      "Tensorflow",
      "C",
      "C++",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Haskell",
      "Prolog",
      "Git",
    ],
    url: "https://www.ucsc.edu/",
  },
];

// Given an event, return its duration in string form
export function getDuration(event: Event): string {
  const start = event.startDate;
  const end = event.endDate ?? new Date();
  const diff = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  if (diffDays < 30) {
    return `${diffDays} days`;
  }
  const diffMonths = Math.ceil(diffDays / 30);
  if (diffMonths < 12) {
    return `${diffMonths} months`;
  }
  const diffYears = Math.ceil(diffMonths / 12);
  return `${diffYears} years`;
}
