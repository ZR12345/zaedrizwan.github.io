const experience = [
  {
    role: "Teaching Assistant",
    org: "National Institute of Technology Karnataka, Surathkal",
    period: "Aug 2025 – Present",
    points: [
      "Assisting faculty in conducting tutorials, grading assignments, and guiding students in coursework.",
      "Supporting laboratory sessions and helping students understand core concepts in Information Technology.",
    ],
  },
  {
    role: "Project Intern",
    org: "IBM, India",
    period: "Jan 2023 – Mar 2023",
    points: [
      "Worked on the SSH Password-less Authentication project under IBM mentors.",
      "Utilized shell scripting, RSA key-pairs, and a Bash script to enable user login to a remote server without password authentication.",
    ],
  },
  {
    role: "Cybercrime Investigator Intern",
    org: "Slytherin Edutech Pvt. Ltd., Ranchi, Jharkhand",
    period: "Oct 2022 – Nov 2022",
    points: [
      "Performed digital forensics using tools such as Magnet AXIOM, FTK, Volatility, Wireshark, and Autopsy for evidence acquisition and analysis.",
      "Conducted mobile, image, and location-based forensic investigations, including analysis of real-world OTP fraud cases through log and network tracing.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-10 text-blue-600 dark:text-blue-400">Experience</h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.role + job.org}>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {job.role} &#x2014; {job.org}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
              {job.period}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}