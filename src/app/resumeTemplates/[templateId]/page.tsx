import React from 'react'
import Template1 from '../../../../components/Template1'
import Template2 from '../../../../components/Template2'

type PageProps = {
  params: {
    templateId: string;
  };
};

const page = ({ params }: PageProps) => {
  // Dynamic route value, e.g. "template1"
  const { templateId } = params;
    const resumeData = {
  "personalDetails": {
    "fullName": "Abhishek Srivastava",
    "email": "test@gmail.com",
    "phone": "+91814567890",
    "address": "test address",
    "linkedin": "/in/abhishek-srivastava",
    "portfolio": "",
    "currentJobTitle": "Lead Frontend Developer"
  },
  "professionalSummary": "Dedicated and detail-oriented Frontend Developer with expertise in creating dynamic, user-friendly web applications. Proficient in HTML, CSS, and JavaScript, with a strong understanding of responsive design principles and modern frontend frameworks such as React and Angular. Passionate about improving user experience and incorporating the latest web development trends to deliver high-quality, engaging digital solutions. Skilled in collaborating with cross-functional teams to drive project success and meet client expectations.",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "TypeScript",
    "Redux",
    "Vue.js",
    "Web Accessibility (WCAG)",
    "RESTful APIs",
    "Performance Optimization",
    "UI/UX Design Principles",
    "Version Control (Git)",
    "GraphQL",
    "Sass",
    "Less"
  ],
  "workHistory": [
    {
      "id": 1,
      "jobTitle": "Lead Frontend Developer",
      "company": "CaaStle",
      "startDate": "Oct 2017",
      "endDate": "Present",
      "description": "Spearheaded the UI team, enhancing user experience across platforms, resulting in a 30% increase in user engagement and a 25% boost in customer satisfaction scores.",
      "projects": [
        {
          "id": 1,
          "name": "Awsgithub",
          "link": "/caa-stle/awsgithub",
          "description": "Frontend development for project Awsgithub.",
          "technologies": [
            "react",
            "html"
          ]
        },
        {
          "id": 1757928280788,
          "name": "test project",
          "description": "It seems like your message got cut off. Could you please provide the achievement or project description you would like me to optimize?",
          "technologies": [
            "react",
            "css"
          ],
          "link": ""
        }
      ]
    },
    {
      "id": 2,
      "jobTitle": "Frontend Developer",
      "company": "TCS",
      "startDate": "Oct 2016",
      "endDate": "Jul 2017",
      "description": "Did many frontend jobs.",
      "projects": []
    }
  ],
  "education": [
    {
      "id": 1,
      "degree": "Bachelor of Arts",
      "institution": "Lucknow university",
      "startDate": "2007",
      "endDate": "2010"
    }
  ],
  "enhancements": [
    "Consider adding more specific achievements or metrics in the work experience section.",
    "The project descriptions could be more detailed and include measurable outcomes.",
    "Ensure all project descriptions are complete and clear.",
    "Highlight any leadership or mentoring roles in your current position."
  ],
  "atsScore": 85,
  "achievements": [
    {
      "id": 1757928233825,
      "description": "Secured first place in a competitive hackathon by developing an innovative solution, enhancing project efficiency by 30% and attracting interest from three potential investors."
    }
  ],
  "certifications": [
    {
      "id": 1,
      "name": "cmm",
      "issuer": "xplora",
      "year": "May 2025"
    }
  ],
  "hobbies": [
    "Photography",
    "Hiking"
  ],
  "languages": [
    {
      "id": "1757928216988",
      "language": "English",
      "proficiency": "Conversational"
    },
    {
      "id": "1757928221938",
      "language": "Hindi",
      "proficiency": "Fluent"
    }
  ],
  "totalExperience": 7.6,
  "currentJobTitle": "Lead Frontend Developer"
}
  return (
    <div>
      {templateId === 'template1' && <Template1 resumeData={resumeData}/>}
      {templateId === 'template2' && <Template2 resumeData={resumeData}/>}
    </div>
  )
}

export default page
