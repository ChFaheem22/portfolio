
import React from 'react';
import styles from './Education.module.css';

const educationData = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Riphah International University",
    year: "2023 – Present",
    description:
      "Focused on data structures, system design, and modern web development. Alongside academic coursework, I actively build real-world frontend applications with an emphasis on performance, scalability, and user experience.",
    coursework: [
      "Data Structures & Algorithms",
      "Software Requirements Engineering",
      "Database Systems",
      "Web Application Development"
    ]
  },
  {
    degree: "ICS – Intermediate in Computer Science",
    institution: "Punjab College",
    year: "2021 – 2023",
    description:
      "Built a strong foundation in computer science, mathematics, and analytical thinking. Graduated with distinction.",
    coursework: [
      "Computer Science",
      "Mathematics",
      "Physics"
    ]
  }
];


const Education = () => {
  return (
    <section className={styles.educationSection}>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.cardGrid}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h2 className={styles.degree}>{edu.degree}</h2>
              <p className={styles.institution}>{edu.institution}</p>
              <p className={styles.year}>{edu.year}</p>
            </div>
            <p className={styles.description}>{edu.description}</p>
            {edu.coursework && (
              <div className={styles.coursework}>
                <p><strong>Coursework:</strong></p>
                <ul>
                  {edu.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
