const education = [
  {
    institution: "National Institute of Technology Karnataka, Surathkal",
    degree: "Master of Technology in Information Technology",
    period: "Aug 2025 – Jun 2027",
    detail: "CGPA: 8.59 / 10.0",
  },
  {
    institution: "Dayananda Sagar College of Engineering, Bangalore",
    degree: "Bachelor of Engineering in Computer Science Engineering",
    period: "Jul 2020 – Jun 2024",
    detail: "CGPA: 7.66 / 10.0",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
        Education
      </h2>
      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.institution}>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {item.institution}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {item.degree}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {item.period} &#x2014; {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}