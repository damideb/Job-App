import React, { useState, useEffect } from "react";
import JobSearch from "../../components/application/JobSearch";
import axios from "axios";
import SummaryCard from "../../components/application/summaryCard";
import JobDetailsSection from "../../components/application/JobDetailsSection";

export default function Apply() {
  const [searchDetails, setSearchDetails] = useState({
    query: "",
    location: "",
    employment_types: "",
  });
  const [foundJobs, setFoundJobs] = useState([
    {
      job_id: "Qfh4-9t8uBZRRETpAAAAAA==",
      employer_name: "Nabu Casa",
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "Taro",
      job_employment_type: "FULLTIME",
      job_title: "Node.js Developer",
      job_apply_link:
        "https://www.jointaro.com/jobs/nabu-casa/nodejs-developer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5409,
      apply_options: [
        {
          publisher: "Taro",
          apply_link:
            "https://www.jointaro.com/jobs/nabu-casa/nodejs-developer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "Nabu Casa is hiring a Node.js Developer to work on Home Assistant Cloud services, focusing on scalable and privacy-oriented features.",
      job_is_remote: false,
      job_posted_at_timestamp: 1725408252,
      job_posted_at_datetime_utc: "2024-09-04T00:04:12.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DQfh4-9t8uBZRRETpAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: null,
        experience_mentioned: "false",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {},
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "C83Cw-r5-lY0LFYLAAAAAA==",
      employer_name: "MindPal",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg1jwv3mc0IzreWl9Rhg99E1WoSfFn51ynzLu&s=0",
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "LinkedIn",
      job_employment_type: "FULLTIME",
      job_title: "Node.JS Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/node-js-developer-at-mindpal-3703084347?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6461,
      apply_options: [
        {
          publisher: "LinkedIn",
          apply_link:
            "https://www.linkedin.com/jobs/view/node-js-developer-at-mindpal-3703084347?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Crossingz",
          apply_link:
            "https://jobs.crossingz.io/jobs/69922764-node-js-developer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "???? We are currently seeking a talented and experienced Node.js Developer ????\n• Responsibilities:\n• Develop and maintain server-side web applications using Node.js\n• Collaborate with cross-functional teams to design and implement robust APIs and backend systems\n• Write clean and efficient code, following best practices and coding standards\n• Conduct thorough testing and debugging of applications to ensure high-quality deliverables\n• Optimize application performance and scalability\n• Stay up-to-date with the latest trends and advancements in Node.js development\n• Requirements:\n• Proven experience as a Node.js Developer, with a solid understanding of Node.js and its core principles\n• Proficiency in JavaScript\n• Knowledge of Express.js or similar web application frameworks\n• Experience with NoSQL databases, such as MongoDB\n• Understanding of asynchronous programming and event-driven architectures\n• Experience with version control systems, preferably Git\n• Strong problem-solving skills and the ability to work in a collaborative team environment\n• Excellent communication and interpersonal skills\n\nNice to have: Familiarity with front-end technologies such as HTML, CSS, and JavaScript frameworks (e.g., React, Angular, Vue.js)\n• We offer:\n• Flexible work-hours\n• part-time/full-time\n• Competitive salary\n\nRequirements\n\nResponsibilities",
      job_is_remote: false,
      job_posted_at_timestamp: 1692892863,
      job_posted_at_datetime_utc: "2023-08-24T16:01:03.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DC83Cw-r5-lY0LFYLAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2024-09-10T14:29:07.000Z",
      job_offer_expiration_timestamp: 1725978547,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: null,
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: "false",
        professional_certification: "false",
        high_school: "false",
        associates_degree: "false",
        bachelors_degree: "true",
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Proven experience as a Node.js Developer, with a solid understanding of Node.js and its core principles",
          "Proficiency in JavaScript",
          "Knowledge of Express.js or similar web application frameworks",
          "Experience with NoSQL databases, such as MongoDB",
          "Understanding of asynchronous programming and event-driven architectures",
          "Experience with version control systems, preferably Git",
          "Strong problem-solving skills and the ability to work in a collaborative team environment",
          "Excellent communication and interpersonal skills",
          "Nice to have: Familiarity with front-end technologies such as HTML, CSS, and JavaScript frameworks (e.g., React, Angular, Vue.js)",
        ],
        Responsibilities: [
          "Collaborate with cross-functional teams to design and implement robust APIs and backend systems",
          "Write clean and efficient code, following best practices and coding standards",
          "Conduct thorough testing and debugging of applications to ensure high-quality deliverables",
          "Optimize application performance and scalability",
        ],
        Benefits: [
          "Flexible work-hours",
          "part-time/full-time",
          "Competitive salary",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "J6OJSJ2un1chiLsMAAAAAA==",
      employer_name: "Dexian",
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "Dexian",
      job_employment_type: "FULLTIME",
      job_title: "Backend Node JS Developer (Hybrid)",
      job_apply_link:
        "https://dexian.com/jobs/backend-node-js-developer-hybrid-8035/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: true,
      job_apply_quality_score: 0.7279,
      apply_options: [
        {
          publisher: "Dexian",
          apply_link:
            "https://dexian.com/jobs/backend-node-js-developer-hybrid-8035/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
        {
          publisher: "LinkedIn",
          apply_link:
            "https://www.linkedin.com/jobs/view/backend-node-js-developer-hybrid-at-dexian-4008032118?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "ZipRecruiter",
          apply_link:
            "https://www.ziprecruiter.com/c/American-Express/Job/Backend-Node-JS-Developer-(Hybrid)/-in-New-York,NY?jid=50dd3893dbbaa449&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
        {
          publisher: "Diversity Jobs",
          apply_link:
            "https://diversityjobs.com/job/detail/80273127/Backend-Node-JS-Developer-Hybrid?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Jobs",
          apply_link:
            "https://jobs.forces.net/jobs/backend-node-js-developer-hybrid-new-york/1425355082-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Positions For Col U Fans",
          apply_link:
            "https://positions.cu-fc.com/jobs/backend-node-js-developer-hybrid-new-york/1425355082-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Jooble",
          apply_link:
            "https://jooble.org/jdp/2291033680459454220?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Star Job Search",
          apply_link:
            "https://starjobsearch.co.uk/jobs/backend-node-js-developer-hybrid-new-york/1425355082-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "Position: Sr. NodeJS Developer\n\nLocation: New York, NY or Sunrise, FL (3 days onsite a week)\n\nDuration: CTH\n\nWe are seeking a highly skilled Senior Backend Developer with deep expertise in JavaScript, TypeScript, and Node.js. In this role, you will be responsible for designing, developing, and maintaining robust microservices that power our platform. If you are passionate about cutting-edge technologies and enjoy working in a fast-paced, collaborative environment, we want to hear from you!\n\nKey Responsibilities:\n• Develop and Maintain Microservices: Design, develop, and deploy scalable microservices using Node.js, ensuring high performance and reliability.\n• Framework Expertise: Utilize frameworks such as Fastify or Express to build efficient server-side applications.\n• Serverless Architecture: Leverage your knowledge of serverless platforms like AWS Lambda, Azure Functions, or Google Cloud Functions to create and maintain scalable solutions.\n• API Design: Design and implement RESTful services and GraphQL endpoints, ensuring robust and secure APIs.\n• DevOps and CI/CD: Collaborate with DevOps teams to implement CI/CD pipelines, automating deployment and ensuring continuous integration and delivery.\n• Security: Apply security best practices to all stages of the development lifecycle, ensuring the protection of data and systems.\n• Performance Optimization: Identify and implement performance optimization techniques to ensure the best user experience and efficient resource usage.\n• Telemetry and Monitoring: Set up and manage telemetry and monitoring solutions to maintain the health and performance of microservices.\n\nQualifications:\n• Deep expertise in JavaScript, TypeScript, and Node.js.\n• Experience with frameworks such as Fastify or Express.\n• Proven experience in developing and maintaining microservices.\n• Strong knowledge of serverless architectures and platforms (e.g., AWS Lambda, Azure Functions, Google Cloud Functions).\n• Familiarity with API design, including RESTful services and GraphQL (a bonus).\n• Understanding of DevOps practices and CI/CD pipelines.\n• Solid grasp of security best practices.\n• Knowledge of telemetry and performance optimization techniques.\n• Excellent problem-solving skills and attention to detail.\n• Strong communication and collaboration skills.\n\nDexian is a leading provider of staffing, IT, and workforce solutions with over 12,000 employees and 70 locations worldwide. As one of the largest IT staffing companies and the 2nd largest minority-owned staffing company in the U.S., Dexian was formed in 2023 through the merger of DISYS and Signature Consultants. Combining the best elements of its core companies, Dexian's platform connects talent, technology, and organizations to produce game-changing results that help everyone achieve their ambitions and goals.\n\nDexian's brands include Dexian DISYS, Dexian Signature Consultants, Dexian Government Solutions, Dexian Talent Development and Dexian IT Solutions. Visit https://dexian.com/ to learn more.\n\nDexian is an Equal Opportunity Employer that recruits and hires qualified candidates without regard to race, religion, sex, sexual orientation, gender identity, age, national origin, ancestry, citizenship, disability, or veteran status.",
      job_is_remote: false,
      job_posted_at_timestamp: 1724630400,
      job_posted_at_datetime_utc: "2024-08-26T00:00:00.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DJ6OJSJ2un1chiLsMAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2024-09-23T00:00:00.000Z",
      job_offer_expiration_timestamp: 1727049600,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: null,
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Experience with frameworks such as Fastify or Express",
          "Proven experience in developing and maintaining microservices",
          "Strong knowledge of serverless architectures and platforms (e.g., AWS Lambda, Azure Functions, Google Cloud Functions)",
          "Familiarity with API design, including RESTful services and GraphQL (a bonus)",
          "Understanding of DevOps practices and CI/CD pipelines",
          "Solid grasp of security best practices",
          "Knowledge of telemetry and performance optimization techniques",
          "Excellent problem-solving skills and attention to detail",
          "Strong communication and collaboration skills",
        ],
        Responsibilities: [
          "In this role, you will be responsible for designing, developing, and maintaining robust microservices that power our platform",
          "Develop and Maintain Microservices: Design, develop, and deploy scalable microservices using Node.js, ensuring high performance and reliability",
          "Framework Expertise: Utilize frameworks such as Fastify or Express to build efficient server-side applications",
          "Serverless Architecture: Leverage your knowledge of serverless platforms like AWS Lambda, Azure Functions, or Google Cloud Functions to create and maintain scalable solutions",
          "API Design: Design and implement RESTful services and GraphQL endpoints, ensuring robust and secure APIs",
          "DevOps and CI/CD: Collaborate with DevOps teams to implement CI/CD pipelines, automating deployment and ensuring continuous integration and delivery",
          "Security: Apply security best practices to all stages of the development lifecycle, ensuring the protection of data and systems",
          "Performance Optimization: Identify and implement performance optimization techniques to ensure the best user experience and efficient resource usage",
          "Telemetry and Monitoring: Set up and manage telemetry and monitoring solutions to maintain the health and performance of microservices",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "rQod7zO11WD6rkFPAAAAAA==",
      employer_name: "MindPal",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg1jwv3mc0IzreWl9Rhg99E1WoSfFn51ynzLu&s=0",
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "LinkedIn",
      job_employment_type: "FULLTIME",
      job_title: "Fullstack Developer (Node.JS & React)",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/fullstack-developer-node-js-react-at-mindpal-3706082639?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6467,
      apply_options: [
        {
          publisher: "LinkedIn",
          apply_link:
            "https://www.linkedin.com/jobs/view/fullstack-developer-node-js-react-at-mindpal-3706082639?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Www.lasviya.net",
          apply_link:
            "https://www.lasviya.net/?refId=EEVUcwqvM4t7ByjV%2BugXlA%3D%3D&trackingId=NJUwgWEry8OX3S5l8HBagw%3D%3D&position=16&pageNum=0&_=/jobs/view/fullstack-developer-node-js-react-at-mindpal-3706655740%23KJWqMdlUlBn8PPpbXBTujI7xcY8uGFCs&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher:
            "Blogs - InJob.AI The #1 Job Search Automation Platform - InJob.AI",
          apply_link:
            "https://jobs.injob.ai/jobs/66a72ea68276deee56d8bbf3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "We are seeking a skilled Node.js and React Developer\n\nIf you are passionate about web development and have a solid understanding of both Node.js and React, we'd love to know you better!\n\nResponsibilities\n• Develop and maintain efficient and scalable web applications using Node.js and React\n• Collaborate with cross-functional teams to define, design, and ship new features\n• Troubleshoot and resolve software defects and issues\n• Optimize application performance for maximum speed and scalability\n• Stay updated with industry trends and emerging technologies\n\nRequirements\n• At least 2 years of professional experience as a Node.js and React Developer\n• Strong proficiency in Node.js and React frameworks\n• Solid understanding of JavaScript, HTML, and CSS\n• Experience with RESTful APIs and third-party libraries\n• Familiarity with version control systems (e.g., Git)\n• Strong problem-solving and debugging skills\n• Ability to work independently and collaboratively in a team environment\n• Excellent communication and interpersonal skills\n\nWe Offer\n• B2B contract type\n• Full-time job\n• Remote and flexible working hours",
      job_is_remote: false,
      job_posted_at_timestamp: 1693233023,
      job_posted_at_datetime_utc: "2023-08-28T14:30:23.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DrQod7zO11WD6rkFPAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2024-09-14T23:48:21.000Z",
      job_offer_expiration_timestamp: 1726357701,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: "24",
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: "false",
        professional_certification: "false",
        high_school: "false",
        associates_degree: "false",
        bachelors_degree: "true",
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "We are seeking a skilled Node.js and React Developer",
          "At least 2 years of professional experience as a Node.js and React Developer",
          "Strong proficiency in Node.js and React frameworks",
          "Solid understanding of JavaScript, HTML, and CSS",
          "Experience with RESTful APIs and third-party libraries",
          "Familiarity with version control systems (e.g., Git)",
          "Strong problem-solving and debugging skills",
          "Ability to work independently and collaboratively in a team environment",
          "Excellent communication and interpersonal skills",
        ],
        Responsibilities: [
          "Develop and maintain efficient and scalable web applications using Node.js and React",
          "Collaborate with cross-functional teams to define, design, and ship new features",
          "Troubleshoot and resolve software defects and issues",
          "Optimize application performance for maximum speed and scalability",
          "Stay updated with industry trends and emerging technologies",
        ],
        Benefits: [
          "B2B contract type",
          "Full-time job",
          "Remote and flexible working hours",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "zlkj0ZqsncKsFBHaAAAAAA==",
      employer_name: "Ampcus Inc",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWgTNHiu00oC0Psm6blaCAI_Sk6Jj9TIiS4c6&s=0",
      employer_website: "http://www.ampcus.com",
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "Talentify",
      job_employment_type: "FULLTIME",
      job_title: "Node.js Developer",
      job_apply_link:
        "https://www.talentify.io/job/nodejs-developer-new-york-new-york-ampcus-inc-24-09244?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.4826,
      apply_options: [
        {
          publisher: "Talentify",
          apply_link:
            "https://www.talentify.io/job/nodejs-developer-new-york-new-york-ampcus-inc-24-09244?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "Title: Node.js Developer\nDuration:5 Months assignment with the possibility of extension\nLocation: NYC, NY - Remote\n\nAbout the Role:\nWe are seeking an experienced MySQL / Node.js Developer with over 7 years of experience, who is more than just a DevOps Engineer. The ideal candidate will play a critical role in both the testing and development phases of our product. You will work closely with a dedicated team to support the front-end and mobile aspects of our client's application.\n\nKey Responsibilities:\nTesting Phase:\n• Conduct Unit/Component and Regression Testing using Cucumber.\n• Ensure high-quality and reliable code through rigorous testing efforts.\n• Development Phase:\n• Develop and maintain microservices using Node.js and AWS.\n• Work on Microservicing in Node.js and AWS (ECS, EC2, Lambda, RDS).\n• Collaborate with a team of Node.js developers to support the product's front-end and mobile applications .\n\nRequirements:\n• Strong expertise in Node.js and MySQL.\n• Extensive experience with AWS services, including ECS, EC2, Lambda, and RDS.\n• Proven experience in unit/component and regression testing using Cucumber.\n• Solid understanding of microservices architecture and development.\n• Ability to work collaboratively in a team environment.\n\nTeam Structure:\n• You will be part of a team of 3 Node.js developers.\n• The team supports the front-end and mobile applications of the product.\n\nInterview Process:\n• Candidates will undergo a technical coding test during the interview process to assess their coding skills and problem-solving abilities.\n\nMust-Have Skills:\n• Proficiency in Node.js and MySQL.\n• Experience with AWS (ECS, EC2, Lambda, RDS).\n• Strong testing skills with Cucumber.",
      job_is_remote: true,
      job_posted_at_timestamp: 1721174400,
      job_posted_at_datetime_utc: "2024-07-17T00:00:00.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3Dzlkj0ZqsncKsFBHaAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: "84",
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Work on Microservicing in Node.js and AWS (ECS, EC2, Lambda, RDS)",
          "Strong expertise in Node.js and MySQL",
          "Extensive experience with AWS services, including ECS, EC2, Lambda, and RDS",
          "Proven experience in unit/component and regression testing using Cucumber",
          "Solid understanding of microservices architecture and development",
          "Ability to work collaboratively in a team environment",
          "Candidates will undergo a technical coding test during the interview process to assess their coding skills and problem-solving abilities",
          "Proficiency in Node.js and MySQL",
          "Strong testing skills with Cucumber",
        ],
        Responsibilities: [
          "You will work closely with a dedicated team to support the front-end and mobile aspects of our client's application",
          "Conduct Unit/Component and Regression Testing using Cucumber",
          "Ensure high-quality and reliable code through rigorous testing efforts",
          "Develop and maintain microservices using Node.js and AWS",
          "Collaborate with a team of Node.js developers to support the product's front-end and mobile applications ",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "2LlWqtodkppj6vLIAAAAAA==",
      employer_name: "HR Giants",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBC6uVdh6XZg7jkFCw701qsQIuKhX9og-VE_2&s=0",
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "Dice",
      job_employment_type: "FULLTIME",
      job_title:
        "REACT / NODE.JS / JavaScript / Full-Stack DEVELOPER (MULTIPLE POSITIONS)",
      job_apply_link:
        "https://www.dice.com/job-detail/35d2faa0-974a-480c-a6cf-dad22239bc65?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: true,
      job_apply_quality_score: 0.6611,
      apply_options: [
        {
          publisher: "Dice",
          apply_link:
            "https://www.dice.com/job-detail/35d2faa0-974a-480c-a6cf-dad22239bc65?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
      ],
      job_description:
        "MULTIPLE POSITIONS in New York\n\nHere are the minimum requirements:\n• 3+ years of relevant experience in a modern technology stack, ideally React and Node\n• Good understanding of Node.js and Web Development\n• Experience with React.js\n• Solid grasp of software design patterns and why they are important\n• Ability to communicate complex software concepts to non-technical team members well and enjoy those conversations",
      job_is_remote: false,
      job_posted_at_timestamp: 1558637370,
      job_posted_at_datetime_utc: "2019-05-23T18:49:30.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3D2LlWqtodkppj6vLIAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2024-10-05T18:33:47.000Z",
      job_offer_expiration_timestamp: 1728153227,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: "36",
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: [
        "REACT",
        "NODE.JS",
        "JavaScript",
        "React.js",
        "GraphQL",
        "REST API",
        "Angular",
      ],
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "3+ years of relevant experience in a modern technology stack, ideally React and Node",
          "Good understanding of Node.js and Web Development",
          "Experience with React.js",
          "Solid grasp of software design patterns and why they are important",
          "Ability to communicate complex software concepts to non-technical team members well and enjoy those conversations",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "usB0sEWFANkjY6NVAAAAAA==",
      employer_name: "h3 Technologies, LLC",
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "LinkedIn",
      job_employment_type: "FULLTIME",
      job_title: "Node.JS Developer (Java)",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/node-js-developer-java-at-h3-technologies-llc-3984547422?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6288,
      apply_options: [
        {
          publisher: "LinkedIn",
          apply_link:
            "https://www.linkedin.com/jobs/view/node-js-developer-java-at-h3-technologies-llc-3984547422?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "Position: Mid levelJava Developer\n\nLocation: NYC\n\nDuration: Contract to hire\n\nDesired years of experience: 1-3 YEARS\n\nNote: C2C is allowed. Genuine candidates are required. One interview is video one with person detection technology.\n\nDescription:\n• Excellent Programming & debugging skills\n• Experience in Java, spring, node.js and TLS.\n• Experience of multithreading\n• Experience in DB Concepts / SQL Server\n• Good experience of node.js is required.\n\nDesired profile:\n\nEducation and Experience:\n• Engineering or Technical Degrees (BE/B.Tech/ME/M.Tech/M.Sc./MCA)\n• Minimum of 1 to 3 years of Relevant Technical experience.\n• Excellent written & verbal Skills.\n• Knowledge of Mutual TLS",
      job_is_remote: false,
      job_posted_at_timestamp: 1719747261,
      job_posted_at_datetime_utc: "2024-06-30T11:34:21.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DusB0sEWFANkjY6NVAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2025-01-19T05:59:13.000Z",
      job_offer_expiration_timestamp: 1737266353,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: "12",
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: "false",
        professional_certification: "false",
        high_school: "false",
        associates_degree: "false",
        bachelors_degree: "true",
        degree_mentioned: "true",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Excellent Programming & debugging skills",
          "Experience in Java, spring, node.js and TLS",
          "Experience of multithreading",
          "Experience in DB Concepts / SQL Server",
          "Good experience of node.js is required",
          "Engineering or Technical Degrees (BE/B.Tech/ME/M.Tech/M.Sc./MCA)",
          "Minimum of 1 to 3 years of Relevant Technical experience",
          "Excellent written & verbal Skills",
          "Knowledge of Mutual TLS",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "dWFK46709KLJqlwSAAAAAA==",
      employer_name: "Keylent",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uRyDksAhwAeEyF4SSrDMBM5IzWnIJY9vi2mA&s=0",
      employer_website: "http://www.keylent.com",
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "ZipRecruiter",
      job_employment_type: "FULLTIME",
      job_title: "JavaScript (Node JS) Developer",
      job_apply_link:
        "https://www.ziprecruiter.com/c/Keylent/Job/JavaScript-(Node-JS)-Developer/-in-New-York,NY?jid=d44f541a90a462ee&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.7189,
      apply_options: [
        {
          publisher: "ZipRecruiter",
          apply_link:
            "https://www.ziprecruiter.com/c/Keylent/Job/JavaScript-(Node-JS)-Developer/-in-New-York,NY?jid=d44f541a90a462ee&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "Visa status: U.S. Citizens and those authorized to work in the U.S. are encouraged to apply.\nTax Terms: W2, 1099\nCorp-Corp or 3rd Parties: Yes\n\nEducation: Bachelors Degree\nSkills: Expert JavaScript (NodeJS) developer with experience with D3 rendering and C#.\nJob Description:\nRequired Skill Set:\n• NodeJS development experience\n• D3 kit visualization\n• API development\n• Good understanding of SVG formatted documents",
      job_is_remote: false,
      job_posted_at_timestamp: 1540278000,
      job_posted_at_datetime_utc: "2018-10-23T07:00:00.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DdWFK46709KLJqlwSAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2024-10-02T00:00:00.000Z",
      job_offer_expiration_timestamp: 1727827200,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: null,
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: "true",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Education: Bachelors Degree",
          "Skills: Expert JavaScript (NodeJS) developer with experience with D3 rendering and C#",
          "D3 kit visualization",
          "API development",
          "Good understanding of SVG formatted documents",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: [
        "15-1132.00: Software Developers, Applications",
      ],
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: "t-AKAI-wU29Jup6MAAAAAA==",
      employer_name: "Intetics",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_KU_MWJwgob7h3oWQdO6HZgRFDKAYKbnACq0&s=0",
      employer_website: "http://intetics.com",
      employer_company_type: "Computer Services",
      employer_linkedin: null,
      job_publisher: "LinkedIn",
      job_employment_type: "FULLTIME",
      job_title: "Senior Node.js Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/senior-node-js-developer-at-intetics-3967661687?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.7454,
      apply_options: [
        {
          publisher: "LinkedIn",
          apply_link:
            "https://www.linkedin.com/jobs/view/senior-node-js-developer-at-intetics-3967661687?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Monster",
          apply_link:
            "https://www.monster.com/job-openings/senior-node-js-developer-new-york-ny--bdd8665b-7af1-48fa-9cbd-88a764d91ca1?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
        {
          publisher: "ZipRecruiter",
          apply_link:
            "https://www.ziprecruiter.com/c/Intetics/Job/Senior-Node.js-Developer/-in-New-York,NY?jid=04a787e4874c47d0&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
        {
          publisher: "Jooble",
          apply_link:
            "https://jooble.org/jdp/8101226089153585842?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Talent.com",
          apply_link:
            "https://www.talent.com/view?id=15568f3d3912&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
        {
          publisher: "BeBee",
          apply_link:
            "https://us.bebee.com/job/2410a78e0c690d84b6d5ff0c495ac7b7?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Ladders",
          apply_link:
            "https://www.theladders.com/job/senior-node-js-developer-intetics-new-york-ny_73750565?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Adzuna",
          apply_link:
            "https://www.adzuna.com/details/4767428727?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
      ],
      job_description:
        'Intetics Inc., a leading global technology company providing custom software application development, distributed professional teams, software product quality assessment, and "all-things-digital" solutions, is looking for a Senior/Lead Node.js Developer to enrich its team with a skilled professional to spread the company\'s ideas, vision, content, and messages.\n\nOur client creates digital toys and other playful products for kids around the world. Since the first product launch in 2011, they have released 40+ apps that have been downloaded more than 444 million times in 238 markets, making them the No. 1 mobile-first kids brand in the App Store.\n\nRequirements\n• Great gaming development history\n• Experience with JavaScript\n• Extensive experience with Node.js\n• Knowledge of AWS microservices\n\nResponsibilities:\n• New features development\n• Development of matchmaking service\n• Working on the identity service',
      job_is_remote: false,
      job_posted_at_timestamp: 1720182992,
      job_posted_at_datetime_utc: "2024-07-05T12:36:32.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3Dt-AKAI-wU29Jup6MAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2025-01-01T12:47:25.000Z",
      job_offer_expiration_timestamp: 1735735645,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: null,
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: "false",
        professional_certification: "false",
        high_school: "false",
        associates_degree: "false",
        bachelors_degree: "true",
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Great gaming development history",
          "Experience with JavaScript",
          "Extensive experience with Node.js",
          "Knowledge of AWS microservices",
        ],
        Responsibilities: [
          "Development of matchmaking service",
          "Working on the identity service",
        ],
      },
      job_job_title: "Senior",
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: null,
      job_naics_code: "541511",
      job_naics_name: "Custom Computer Programming Services",
    },
    {
      job_id: "ifSKWchOFz7jJwEQAAAAAA==",
      employer_name: "OMG Technology",
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      employer_linkedin: null,
      job_publisher: "ZipRecruiter",
      job_employment_type: "CONTRACTOR",
      job_title: "Node JS Backend Developer (Hybrid - Multiple Locations)",
      job_apply_link:
        "https://www.ziprecruiter.com/c/OMG-Technology/Job/Node-JS-Backend-Developer-(Hybrid-Multiple-Locations)/-in-New-York,NY?jid=e63a794951dd22ce&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      job_apply_is_direct: true,
      job_apply_quality_score: 0.6172,
      apply_options: [
        {
          publisher: "ZipRecruiter",
          apply_link:
            "https://www.ziprecruiter.com/c/OMG-Technology/Job/Node-JS-Backend-Developer-(Hybrid-Multiple-Locations)/-in-New-York,NY?jid=e63a794951dd22ce&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: true,
        },
        {
          publisher: "Masbest.ca",
          apply_link:
            "https://masbest.ca/samples/job/node-js-backend-developer-hybrid-multiple-locations-at-omg-technology-new-york-ny-SzlwcWRzNGxIdXNFL3ZWUmhlZjA4MFRHWkE9PQ==?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Remoteworker.jobs",
          apply_link:
            "https://www.remoteworker.jobs/jobs/339048941-node-js-backend-developer-hybrid-multiple-locations-at-omg-technology?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Appbeneficiat.com",
          apply_link:
            "https://appbeneficiat.com/vacancy/job/node-js-backend-developer-hybrid-multiple-location-at-omg-technology-new-york-ny-RVZMTEQ1K2x1eVRuYWpPQWZCNThMa0hiSmc9PQ==?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Trabajo.org",
          apply_link:
            "https://us.trabajo.org/job-2463-eb4737f0f411fbed5a69e054b0ea3217?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
        {
          publisher: "Stephen Armishaw Photography",
          apply_link:
            "https://stephenarmishaw.co.uk/office/job/node-js-backend-developer-hybrid-multiple-locations-at-omg-technology-new-york-ny-N1k3ZHFFY29zNURPRjExMXluV2hvck9yZkE9PQ==?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
          is_direct: false,
        },
      ],
      job_description:
        "Salary: $65/hr. on C2C\n\nNode JS Backend Developer (Hybrid – Multiple Locations)\n\nWe are looking to hire a candidate with the skill sets mentioned and experience for one of our clients within the financial industry. This is a 6-month contract with the potential for extension. This is a Hybrid role with multiple locations: Austin TX, Chicago IL, or Mountain View, CA.\n\nRequired Skills/Experience/Education:\n• 8-10 years of working experience with JavaScript, NodeJS, and Rest API (a must).\n• Strong hands-on experience in SQL, and Hibernate with any RDBMS like Big Query, Oracle, MySQL, etc.\n• Collaborate with cross-functional teams to design, develop, and implement efficient and scalable Node.js back-end services.\n• Strong in Source code management, Branching, and Merging with GIT.\n• Write clean, well-structured code and ensure the implementation of unit tests using relevant testing frameworks.\n• Experience with building microservices.\n• Well-versed in both private and public cloud technologies.\n• Deep understanding of architecture and data-driven development.\n• Ability to work with designers to develop dynamic user experiences.\n• A strong sense of ownership.\n• Experience building or maintaining a production application.\n• An ability to balance a sense of urgency with high-quality shipping and pragmatic solutions.\n• Work in an agile environment with sprint-based work cycles.\n\nOther job specifications:\n• Employment Type: Corp. to Corp. (C2C).\n• Contracting Period: 6-month contracting opportunity with the potential for extension.\n• Job Location (s): Hybrid: Austin TX, Chicago IL, or Mountain View, CA.\n• Contract Rate/Salary:$65/hr. on C2C.\n• Interview Process: Hacker Rank Test and 2 rounds of interviews.",
      job_is_remote: false,
      job_posted_at_timestamp: 1722921639,
      job_posted_at_datetime_utc: "2024-08-06T05:20:39.000Z",
      job_city: "New York",
      job_state: "NY",
      job_country: "US",
      job_latitude: 40.712776,
      job_longitude: -74.005974,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=node.js+developer+in+new-york,usa&start=0&udm=8#vhid=vt%3D20/docid%3DifSKWchOFz7jJwEQAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      job_offer_expiration_datetime_utc: "2024-10-03T00:00:00.000Z",
      job_offer_expiration_timestamp: 1727913600,
      job_required_experience: {
        no_experience_required: "false",
        required_experience_in_months: "96",
        experience_mentioned: "true",
        experience_preferred: "false",
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: "false",
        degree_preferred: "false",
        professional_certification_mentioned: "false",
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "8-10 years of working experience with JavaScript, NodeJS, and Rest API (a must)",
          "Strong hands-on experience in SQL, and Hibernate with any RDBMS like Big Query, Oracle, MySQL, etc",
          "Collaborate with cross-functional teams to design, develop, and implement efficient and scalable Node.js back-end services",
          "Strong in Source code management, Branching, and Merging with GIT",
          "Well-versed in both private and public cloud technologies",
          "Deep understanding of architecture and data-driven development",
          "Ability to work with designers to develop dynamic user experiences",
          "A strong sense of ownership",
          "Experience building or maintaining a production application",
          "An ability to balance a sense of urgency with high-quality shipping and pragmatic solutions",
          "Work in an agile environment with sprint-based work cycles",
        ],
        Benefits: ["Contract Rate/Salary:$65/hr. on C2C"],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_occupational_categories: [
        "15-1132.00: Software Developers, Applications",
      ],
      job_naics_code: null,
      job_naics_name: null,
    },
  ]);

  const [jobIndex, setJobIndex] = useState(0);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Node.js developer in New-York, USA",
      page: "1",
      num_pages: "1",
      date_posted: "all",
    },
    headers: {
      "x-rapidapi-key": "d4136ec5b8mshb19ab4391b3e124p1674aajsn8da47b34160a",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setFoundJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    // getJobs()
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setSearchDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <JobSearch
        handleInputChange={handleInputChange}
        searchDetails={searchDetails}
      />
      <main className=" flex  mt-10 gap-5">
        <JobDetailsSection foundJobs={foundJobs} setJobIndex={setJobIndex} />

        <section className=" w-[60%] relative overflow-y-auto h-[80vh] border-2 ">
          <SummaryCard job={foundJobs[jobIndex]} />
        </section>
      </main>
    </div>
  );
}
