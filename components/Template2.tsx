import ReactMarkdown from 'react-markdown';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  CodeXml,
  Link
} from "lucide-react";

type Props = {
    resumeData: any;
}

const TwoColumn = ({ resumeData }: Props) => {
// const TwoColumn = () => {
//   const resumeData = {
//   "personalDetails": {
//     "fullName": "Abhishek Srivastava",
//     "email": "test@gmail.com",
//     "phone": "+91814567890",
//     "address": "test address",
//     "linkedin": "/in/abhishek-srivastava",
//     "github": "/in/abhishek-srivastava",
//     "portfolio": "",
//     "currentJobTitle": "Lead Frontend Developer"
//   },
//   "professionalSummary": "Dedicated and detail-oriented Frontend Developer with expertise in creating dynamic, user-friendly web applications. Proficient in HTML, CSS, and JavaScript, with a strong understanding of responsive design principles and modern frontend frameworks such as React and Angular. Passionate about improving user experience and incorporating the latest web development trends to deliver high-quality, engaging digital solutions. Skilled in collaborating with cross-functional teams to drive project success and meet client expectations.",
//   "skills": [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Angular",
//     "TypeScript",
//     "Redux",
//     "Vue.js",
//     "Web Accessibility (WCAG)",
//     "RESTful APIs",
//     "Performance Optimization",
//     "UI/UX Design Principles",
//     "Version Control (Git)",
//     "GraphQL",
//     "Sass",
//     "Less"
//   ],
//   "workHistory": [
//     {
//       "id": 1,
//       "jobTitle": "Lead Frontend Developer",
//       "company": "CaaStle",
//       "startDate": "Oct 2017",
//       "endDate": "Present",
//       "description": "Spearheaded the UI team, enhancing user experience across platforms, resulting in a 30% increase in user engagement and a 25% boost in customer satisfaction scores.",
//       "projects": [
//         {
//           "id": 1,
//           "name": "Awsgithub",
//           "link": "/caa-stle/awsgithub",
//           "description": "Frontend development for project Awsgithub.",
//           "technologies": [
//             "react",
//             "html"
//           ]
//         },
//         {
//           "id": 1757928280788,
//           "name": "test project",
//           "description": "It seems like your message got cut off. Could you please provide the achievement or project description you would like me to optimize?",
//           "technologies": [
//             "react",
//             "css"
//           ],
//           "link": ""
//         }
//       ]
//     }
//   ],
//   "education": [
//     {
//       "id": 1,
//       "degree": "Bachelor of Arts",
//       "institution": "Lucknow university",
//       "startDate": "2007",
//       "endDate": "2010"
//     }
//   ],
//   "enhancements": [
//     "Consider adding more specific achievements or metrics in the work experience section.",
//     "The project descriptions could be more detailed and include measurable outcomes.",
//     "Ensure all project descriptions are complete and clear.",
//     "Highlight any leadership or mentoring roles in your current position."
//   ],
//   "atsScore": 85,
//   "achievements": [
//     {
//       "id": 1757928233825,
//       "description": "Secured first place in a competitive hackathon by developing an innovative solution, enhancing project efficiency by 30% and attracting interest from three potential investors."
//     }
//   ],
//   "certifications": [
//     {
//       "id": 1,
//       "name": "cmm",
//       "issuer": "xplora",
//       "year": "May 2025"
//     }
//   ],
//   "hobbies": [
//     "Photography",
//     "Hiking"
//   ],
//   "languages": [
//     {
//       "id": "1757928216988",
//       "language": "English",
//       "proficiency": "Conversational"
//     },
//     {
//       "id": "1757928221938",
//       "language": "Hindi",
//       "proficiency": "Fluent"
//     }
//   ],
//   "totalExperience": 7.6,
//   "currentJobTitle": "Lead Frontend Developer"
// }
    return (
    <div className="bg-white border-1 text-gray-900 p-10 min-h-[297mm] w-full max-w-[210mm] text-sm">

      {/* ===== HEADER ===== */}
      <div className="grid grid-cols-8 w-full mb-6">

        {/* Name + Links */}
        <div className="col-span-6">
          <h1 className="text-3xl font-semibold">
            {resumeData.personalDetails.fullName}
          </h1>
          <h2 className="text-xl text-gray-700">
            {resumeData.personalDetails.currentJobTitle}
          </h2>

          <div className="mt-3 text-sm text-gray-700 flex flex-wrap gap-3 items-center">
            {resumeData.personalDetails.email && <div className="flex items-center gap-1">
              <Mail className="text-green-600 w-4" />
              {resumeData.personalDetails.email}
            </div>}

            {resumeData.personalDetails.phone && (
              <div className="flex items-center gap-1">
                <Phone className="text-green-600 w-4" />
                {resumeData.personalDetails.phone}
              </div>
            )}

            {resumeData.personalDetails.address && (
              <div className="flex items-center gap-1">
                <MapPin className="text-green-600 w-4" />
                {resumeData.personalDetails.address}
              </div>
            )}

            {resumeData.personalDetails.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin className="text-green-600 w-4" />
                {resumeData.personalDetails.linkedin}
              </div>
            )}

            {resumeData.personalDetails.github && (
              <div className="flex items-center gap-1">
                <Github className="text-green-600 w-4" />
                {resumeData.personalDetails.github}
              </div>
            )}

            {resumeData.personalDetails.portfolio && (
              <div className="flex items-center gap-1">
                <CodeXml className="text-green-600 w-4" />
                {resumeData.personalDetails.portfolio}
              </div>
            )}
          </div>
        </div>

        {/* Photo */}
        {/* <div className="col-span-2 mr-2 flex justify-end">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
            Image
          </div>
        </div> */}
      </div>

      {/* ===== BODY ===== */}
      <div className="grid grid-cols-6 gap-6 w-full">

        {/* ===== LEFT COLUMN ===== */}
        <div className="col-span-4">

          {/* Summary */}
          {resumeData.professionalSummary && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 mb-2">Summary</h2>
              <p className="text-gray-700">
                {resumeData.professionalSummary}
              </p>
            </div>
          )}

          {/* Experience */}
          {resumeData.workHistory?.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 my-2">Experience</h2>
              {resumeData.workHistory.map((work: any) => (
                <div key={work.id} className="mb-3">
                  <div className="flex justify-between text-gray-800">
                    <div className='mb-1'>
                      <span className="font-medium">
                        {work.jobTitle}{" "}
                      </span>
                      <span className="italic text-xs text-gray-500">
                        | {work.company}
                      </span>
                    </div>
                    <span className="text-gray-600 text-xs">
                      {work.startDate} – {work.endDate || "Present"}
                    </span>
                  </div>
                  {work.description && (
                    <div className="text-sm text-gray-700">
                      <ReactMarkdown>{work.description}</ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {resumeData.education?.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 my-2">Education</h2>
              {resumeData.education.map((edu: any) => (
                <div key={edu.id} className='mb-2 flex justify-between text-gray-800 '> 
                  <div>
                    <span className="font-medium">
                      {edu.degree}{" "}
                    </span>
                    <span className="italic text-xs text-gray-500">
                      | {edu.institution}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {resumeData.achievements?.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 my-2">Achievements / Awards</h2>
              <ul className="ml-4 list-disc text-gray-800">
                {resumeData.achievements.map((a: any) => (
                  <li key={a.id}>{a.description}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="font-semibold text-green-600 my-2">Certifications</h2>
            {/* <div key={work.id} className="mb-3">
              <div className="flex justify-between text-gray-800">
                <div className='mb-1'>
                  <span className="font-medium">
                    {work.jobTitle}{" "}
                  </span>
                  <span className="italic text-xs text-gray-500">
                    | {work.company}
                  </span>
                </div>
              </div>
            </div> */}
            <div className='mb-1'>
              <span className="font-medium">
                Certification 1{" "}
              </span>
              <span className="italic text-xs text-gray-500">
                - Company
              </span>
            </div>
            <div className='mb-1'>
              <span className="font-medium">
                Certification 2{" "}
              </span>
              <span className="italic text-xs text-gray-500">
                - Company
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-green-600 my-2">Interests</h2>
            <ul className="ml-4 list-disc text-gray-800">
              <li>Interests 1</li>
            </ul>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="col-span-2">

          {/* Skills */}
          {resumeData.skills?.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 my-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill: string, idx: number) => (
                  <div key={idx} className="border-1 border-green-600 rounded-full px-2 py-0.5 text-gray-900">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects (from first workHistory item) */}
          {resumeData.workHistory?.[0]?.projects?.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 my-2">Projects</h2>
              {resumeData.workHistory[0].projects.map((p: any) => (
                <div key={p.id} className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">{p.name}</span>
                    {p.link && (
                      <a href={p.link}>
                        <Link className="text-green-600 w-4" />
                      </a>
                    )}
                  </div>

                  {p.description && (
                    <div className="text-sm text-gray-700 mb-1">
                      <ReactMarkdown>{p.description}</ReactMarkdown>
                    </div>
                  )}

                  {p.technologies?.length > 0 && (
                    <p className="italic text-xs text-gray-500">
                      Tech: {p.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {resumeData.languages?.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-green-600 my-2">Languages</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.languages.map((lang: any) => (
                  <div key={lang.id} className="border-1 border-green-600 rounded-full px-2 py-0.5">
                    {lang.language} – <span className="italic">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;
