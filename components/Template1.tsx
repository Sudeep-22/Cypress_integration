import ReactMarkdown from "react-markdown";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  CodeXml,
} from "lucide-react";

type Props = {
  resumeData: any;
};

const Template1 = ({ resumeData }: Props) => {

  return (
    <div className="bg-white text-gray-800 p-10 h-[297mm] w-full max-w-[210mm] font-sans leading-relaxed"
      >
        {/* Header */}
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] mb-6">
            {/* First Column */}
            <div className="col-span-1 bg-gray-700">
                
            </div>

            {/* Second Column */}
            <div className="col-span-9 pl-2">
                <h1 className="text-5xl font-bold mb-6 uppercase"> {resumeData.personalDetails.fullName || "Your Name"} </h1>
                <h1 className="text-xl font-semibold uppercase"> {resumeData.personalDetails.currentJobTitle} </h1>
            </div>

            {/* Third Column */}
            <div className="col-span-6 bg-gray-700 text-white text-sm p-3 flex-col justify-center">
                {resumeData.personalDetails.email && <div className="flex items-center mb-1.5 gap-4">
                    <div>
                        <Mail />
                    </div>
                    <div>
                        {"|"}
                    </div>
                    <div>
                        {resumeData.personalDetails.email}
                    </div>
                </div>}

                {resumeData.personalDetails.phone && <hr className="text-gray-500 mb-1.5"/>}
    
                {resumeData.personalDetails.phone && (
                    <div className="flex items-center mb-2 gap-4">
                        <div>
                            <Phone />
                        </div>
                        <div>
                            {"|"}
                        </div>
                        <div>
                            {resumeData.personalDetails.phone}
                        </div>
                    </div>
                )}

                {resumeData.personalDetails.address && <hr className="text-gray-500 mb-1.5"/>}

                {resumeData.personalDetails.address && (
                    <div className="flex items-center mb-2 gap-4">
                        <div>
                            <MapPin />
                        </div>
                        <div>
                            {"|"}
                        </div>
                        <div>
                            {resumeData.personalDetails.address}
                        </div>
                    </div>
                )}

                {resumeData.personalDetails.linkedin && <hr className="text-gray-500 mb-1.5"/>}

                {resumeData.personalDetails.linkedin && (
                    <div className="flex items-center mb-2 gap-4">
                        <div>
                            <Linkedin />
                        </div>
                        <div>
                            {"|"}
                        </div>
                        <div>
                            {resumeData.personalDetails.linkedin}
                        </div>
                    </div>
                )}

                {resumeData.personalDetails.github && <hr className="text-gray-500 mb-1.5"/>}

                {resumeData.personalDetails.github && (
                    <div className="flex items-center mb-2 gap-4">
                        <div>
                            <Github />
                        </div>
                        <div>
                            {"|"}
                        </div>
                        <div>
                            {resumeData.personalDetails.github}
                        </div>
                    </div>
                )}
    
                {resumeData.personalDetails.portfolio && <hr className="text-gray-500 mb-1.5"/>}

                {resumeData.personalDetails.portfolio && (
                    <div className="flex items-center mb-2 gap-4">
                        <div>
                            <CodeXml />
                        </div>
                        <div>
                            {"|"}
                        </div>
                        <div>
                            {resumeData.personalDetails.portfolio}
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-5 h-full">
            {/* Left Column  */}
            <div className="col-span-5 p-6 bg-gray-200">
                {/* Summary */}
                {resumeData.professionalSummary && (
                    <div className="mb-6">
                        <h2 className="font-bold text-lg mb-2 tracking-widest">SUMMARY</h2>
                        <hr className="font-bold mb-2"/>
                        <p className="text-gray-700 text-sm">
                            {resumeData.professionalSummary.substring(0,302)}
                        </p>
                    </div>
                )}
                {/* Skills */}
                {resumeData.skills?.length > 0 && (
                    <div className="mb-6">
                    <h2 className="font-bold text-lg mb-2 tracking-widest">SKILLS</h2>
                    <hr className="font-bold mb-3"/>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill: string, idx: number) => (
                        <div key={idx} className="border-1 text-[14px] border-gray-600 rounded-full px-2 py-0.5 text-gray-900">
                            {skill}
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                {/* Certification */}
                <div>
                    <h2 className="font-bold text-lg mb-2 tracking-widest">CERTIFICATIONS</h2>
                    <hr className="font-bold mb-3"/>
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
            </div>

            {/* Right Column  */}
            <div className="col-span-9 p-6">
                {resumeData.workHistory?.length > 0 && (
                    <div className="mb-6">
                    <h2 className="font-bold text-lg mb-2 tracking-widest">EXPERIENCE</h2>
                    <hr className="font-bold mb-3"/>

                    <div className="relative pl-6">
                        {/* Vertical timeline line */}
                        <div className="absolute left-2 top-2 bottom-0 w-px bg-gray-400"></div>

                        {resumeData.workHistory.map((work: any) => (
                            <div className="my-4 relative" key={work.id}>
                            {/* Dot for this job */}
                            <div className="absolute left-[-16px] top-[6px] -ml-1 w-2 h-2 bg-gray-400 rounded-full"></div>

                            <h3 className="font-medium mb-1 uppercase tracking-wide">{work.jobTitle}</h3>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-xs text-gray-700">{work.company}</span>
                                <span className="italic text-xs text-gray-500">
                                {work.startDate} – {work.endDate || "Present"}
                                </span>
                            </div>

                            {work.description && (
                                <div className="text-sm text-gray-700">
                                <ReactMarkdown>{work.description}</ReactMarkdown>
                                </div>
                            )}
                            <hr className="my-4 text-gray-200"/>
                            </div>
                        ))}
                        </div>
                    </div>
                )}
                {/* Education */}
                {resumeData.education?.length > 0 && (
                    <div className="mb-8">
                    <h2 className="font-bold text-lg mb-2 tracking-widest">EDUCATION</h2>
                    <hr className="font-bold mb-2"/>
                    {resumeData.education.map((edu: any) => (
                        <div key={edu.id} className='mb-2 text-gray-800 '>
                            <h3 className="font-medium mb-1 uppercase tracking-wide">{edu.degree}</h3>
                            <div className="flex justify-between">
                                <span className="text-xs font-semibold text-gray-500">{edu.institution}</span>
                                <span className="italic text-xs text-gray-500">
                                {edu.startDate} - {edu.endDate}
                                </span>
                            </div>
                            {/* <hr className="my-4 text-gray-200"/>  */}
                        </div>
                    ))}
                    </div>
                )}

                {/* Projects */}
                {resumeData.workHistory?.[0]?.projects?.length > 0 && (
                    <div className="mb-6">
                        <h2 className="font-bold text-lg mb-2 tracking-widest">PROJECTS</h2>
                        <hr className="font-bold mb-2"/>
                        {resumeData.workHistory[0].projects.map((p: any) => (
                        <div key={p.id} className="mb-3">
                            <div className="flex items-center gap-2">
                            <span className="font-medium mb-1 tracking-wide">{p.name}</span>
                            {p.link && (
                                <a href={p.link} className="underline">{p.link}</a>
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
                            <hr className="my-4 text-gray-200"/>
                        </div>
                        ))}
                    </div>
                )}
                {/* Achievements */}
                <div className="mb-6">
                    <h2 className="font-bold text-lg mb-2 tracking-widest">ACHIEVEMENTS</h2>
                    <hr className="font-bold mb-2"/>
                    <div className="mb-1 font-xs">
                        Achievement 1
                    </div>
                    <div className="mb-1 font-xs">
                        Achievement 1
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Template1;
