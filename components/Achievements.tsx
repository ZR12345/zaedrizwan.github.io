const achievements = [
  {
    title: "3rd Place — Quantum-Safe RF Communication Hackathon",
    org: "515 Army Base Workshop",
    date: "Apr 2026",
    description: "Competed on secure communication and cryptography-focused challenges.",
  },
  {
    title: "Rank 59 / 22,000+ Participants — GET SET HACK",
    org: "Organized by RISE",
    date: "Aug 2022",
    description: "Placed in the top tier of a large-scale national hackathon.",
  },
  {
    title: "Top 2% Globally on TryHackMe",
    org: "TryHackMe",
    date: "Dec 2023",
    description: "Consistent performance across cybersecurity and hands-on security challenges.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Achievements
      </h2>
      <div className="space-y-6">
        {achievements.map((item) => (
          <div key={item.title}>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
              {item.org} &#x2014; {item.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}