export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 pt-12 pb-6">
      <div className="flex flex-col sm:flex-row gap-10 sm:items-start">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Zaed Rizwan
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I&#x2019;m an MTech student in Information Technology at{" "}
              <a href="https://www.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                NIT Karnataka, Surathkal
              </a>
              , working on cryptography and post-quantum security.
            </p>
            <p>
              I started in digital forensics and web app security &#x2014;
              breaking and defending systems on both sides &#x2014; before
              getting pulled toward a harder question: will today&#x2019;s
              security still hold once quantum computers change what&#x2019;s
              breakable. That&#x2019;s what my MTech research is on: post-quantum
              secure authentication for military UAV swarms.
            </p>
            <p>
              Along the way I&#x2019;ve also built a fairly random mix of
              other things &#x2014; a recommendation system, an attack-detection
              system for networked control, a video shot detector, a skin
              lesion classifier, and MPI compression middleware for HPC
              clusters &#x2014; mostly just chasing whatever problem seemed
              interesting that semester.
            </p>
            <p>
              I&#x2019;m usually somewhere on TryHackMe or chasing a CTF
              when I&#x2019;m not doing that. You can find my CV{" "}
              <a href="/cv.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
                here
              </a>
              , and I&#x2019;m happy to be reached at{" "}
              <a href="mailto:zaedrizwan002@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                zaedrizwan002@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        <img
          src="/profile.jpg"
          alt="Zaed Rizwan"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-md object-cover flex-shrink-0"
        />
      </div>
    </section>
  );
}