import React from 'react';
import type { Project, Certification, NavLink } from './types';
import img1 from "./assets/roadaccidentworkflow.png" ;
import img2 from "./assets/movieworkflow.png" ;
import img3 from "./assets/theLookWorkflow.jpg" ;

export const NAV_LINKS: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
    name: "PANIK NADEE",
    // title: "Data Engineer",
    shortBio: "",
    email: "panik.nadee@gmail.com",
    linkedin: "https://www.linkedin.com/in/panik-nadee-514a75251/",
    github: "https://github.com/PaNiKKY",
    about: "I'm a passionate and analytical professional transitioning into Data Engineering, driven by the critical importance of data quality and efficient data collection. Through self-study and hands-on ETL pipeline projects, I've gained expertise in Python, SQL, and Google Cloud Platform (GCP). I'm eager to contribute my skills to a dynamic data team, ensuring data integrity and availability."
};

export const SKILLS: string[] = [
    "Python", "SQL","Pandas", "Apache Spark", "Airflow", 
    "GCP (BigQuery, Dataproc)","Looker Studio"
];

export const PROJECTS: Project[] = [
    {
        title: "Road Accident Fatality Data Engineering Project",
        description: "Developed a pipeline to process and analyze road accident fatality data from Thailand's open data platform data.go.th. using Google Cloud Platform technologies.",
        tags: ["Cloud storage", "Apache Spark", "Python", "Airflow", "BigQuery", "GCP"],
        githubUrl: "https://github.com/PaNiKKY/road_accident_dead",
        liveUrl: "https://lookerstudio.google.com/s/lBW8P1EYqW8",
        imageUrl: img1
    },
    {
        title: "Movie Data Engineering Pipeline",
        description: "This comprehensive data engineering project implements a GCP-based pipeline, utilizing a modern ETL architecture to collect, process, and analyze movie popularity, vote counts, and gross revenue.",
        tags: ["Cloud storage", "Dataproc", "Python", "Composer", "BigQuery", "GCP"],
        githubUrl: "https://github.com/PaNiKKY/movies-gcp",
        liveUrl: "https://lookerstudio.google.com/reporting/01aea6f7-a6a6-4b03-a8ed-1b6a618798d4",
        imageUrl: img2
    },
    {
        title: "End-to-End Data Pipeline for TheLook eCommerce",
        description: "Designed and implemented an end-to-end data pipeline for TheLook eCommerce platform, integrating data from multiple sources into a centralized data warehouse for enhanced analytics and reporting.",
        tags: ["Cloud storage", "Dataproc", "Python", "Composer", "BigQuery", "GCP", "terraform", "Great Expectations"],
        githubUrl: "https://github.com/PaNiKKY/theLook_ecom",
        liveUrl: "https://lookerstudio.google.com/reporting/cfaf30cd-86a6-42ed-8643-d55914f186ed",
        imageUrl: img3
    }
];

export const CERTIFICATIONS: Certification[] = [
    {
        name: "DeepLearning.AI DeepLearning.AI Data Engineering Professional Certificate",
        issuer: "Coursera",
        date: "November 2024",
        credentialUrl: "https://coursera.org/share/e085de542ba117e8e7dccbb33b2669cb",
    },
    {
        name: "NoSQL, Big Data, and Spark Foundations",
        issuer: "Coursera",
        date: "November 2024",
        credentialUrl: "https://coursera.org/share/6e020bb2b6953d9985c580154629c8ad",
    },
    {
        name: "Google Advanced Data Analytics",
        issuer: "Coursera",
        date: "September 2023",
        credentialUrl: "https://coursera.org/share/dfcfc34d554cc49bf297ee17f22443c1"
    },
];


// Icons
export const EmailIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
);

export const GithubIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path></svg>
);

export const LinkedInIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.6-1.4c2.5 0 4.5 2.1 4.5 5.1z"></path></svg>
);

export const ExternalLinkIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0 0 1.5h5.69L4.47 12.47a.75.75 0 1 0 1.06 1.06L11 7.94v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5Z" clipRule="evenodd"></path></svg>
);

export const CertificateIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 1 0 0-13.5h9a9.75 9.75 0 1 0 0 13.5ZM10.5 12h3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 5.625v1.516a1.5 1.5 0 0 0 .963 1.393l.36.161a1.5 1.5 0 0 1 .964 1.393v1.832a1.5 1.5 0 0 1-.964 1.393l-.36.161a1.5 1.5 0 0 0-.963 1.393v1.516" /></svg>
);

export const BackIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
    </svg>
);