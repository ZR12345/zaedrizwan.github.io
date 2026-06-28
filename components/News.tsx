const news = [
  {
    date: "Apr 2026",
    text: "Secured 3rd place in the Quantum-Safe RF Communication Hackathon at the 515 Army Base Workshop.",
  },
  {
    date: "Aug 2025",
    text: "Started as Teaching Assistant at NIT Karnataka, Surathkal.",
  },
  {
    date: "Aug 2025",
    text: "Began MTech in Information Technology at NIT Karnataka, Surathkal.",
  },
  {
    date: "Dec 2023",
    text: "Ranked in the top 2% globally on TryHackMe.",
  },
];

export default function News() {
  return (
    <section id="news" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        News
      </h2>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.date + item.text} className="flex gap-4 text-sm">
            <span className="text-gray-500 dark:text-gray-500 w-24 flex-shrink-0">
              {item.date}
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}