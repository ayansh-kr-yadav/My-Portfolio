import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ybi-foundation",
    companyName: "YBI Foundation",
    companyLogo:
      "https://api.dicebear.com/7.x/initials/svg?seed=YB&backgroundColor=039be5",
    positions: [
      {
        id: "ybi-data-intern",
        title: "Data Science, ML & Analytics Intern (Remote)",
        employmentPeriod: {
          start: "05.2023",
          end: "11.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Engineered ML classification pipelines using Scikit-learn and Pandas, achieving 91% model accuracy through feature engineering and cross-validation.
- Collaborated with cross-functional teams to automate EDA workflows using Python and Pandas, cutting manual analysis time by ~40% across 5+ real-world datasets.
- Performed data analysis and visualization to deliver insights from structured data.
- Applied supervised learning models for classification and regression tasks.`,
        skills: [
          "Python",
          "Pandas",
          "Matplotlib",
          "Scikit-learn",
          "Machine Learning",
          "Data Analysis",
          "EDA",
          "Supervised Learning",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
    theme: true,
  },
  {
    id: "education",
    companyName: "Education",
    companyLogo:
      "https://api.dicebear.com/7.x/initials/svg?seed=ED&backgroundColor=6366f1",
    positions: [
      {
        id: "edu-btech",
        title: "B.Tech in Information Technology",
        employmentPeriod: {
          start: "08.2023",
          end: "2027",
        },
        icon: "education",
        description: `- Currently studying at University of Kalyani, West Bengal.
- CGPA: 8.0/10
- Mess Prefect — Banyan Hall Hostel
- Deepened knowledge in Data Structures, Algorithms, DBMS, and core Computer Science subjects.`,
        skills: [
          "Information Technology",
          "Data Structures",
          "Algorithms",
          "Full Stack Development",
          "Generative AI",
        ],
        isExpanded: true,
      },
      {
        id: "edu-diploma",
        title: "Diploma in Computer Science & Technology",
        employmentPeriod: {
          start: "08.2021",
          end: "05.2024",
        },
        icon: "education",
        description: `- Calcutta Technical School, WBSCTE
- CGPA: 8.1/10
- Built a strong foundation in computer science and software development.`,
        skills: ["Computer Science", "Software Engineering", "Web Development"],
        isExpanded: true,
      },
    ],
  },
];
