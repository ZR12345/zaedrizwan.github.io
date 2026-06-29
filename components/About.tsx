export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row gap-10 sm:items-start">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Zaed Rizwan
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I didn&#x2019;t start out in cryptography. My first real taste of
              security was digital forensics &#x2014; tracing OTP fraud through network logs, learning how
              much a single timestamp can give someone away. From there I moved
              into web app security, spending time on both sides: breaking things
              in red team exercises, then defending them in blue team ones.
            </p>
            <p>
              Somewhere along the way I got pulled toward the harder question
              underneath all of it &#x2014; not just &#x201C;is this system
              breakable right now,&#x201D; but &#x201C;will it still hold up once
              quantum computers change what&#x2019;s breakable.&#x201D; That&#x2019;s
              what I&#x2019;m doing my MTech research on at{" "}
              <a href="https://www.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                National Institute of Technology Karnataka, Surathkal
              </a>: post-quantum
              secure authentication for military UAV swarms.
            </p>
            <p>
              In between, I&#x2019;ve ended up building a fairly random mix of
              things &#x2014; a graph-based recommendation system, an attack-detection
              system for networked control systems using ODEs and graph theory, a
              CLIP-based video shot detector, a skin lesion classifier, even
              middleware for compressing MPI traffic in HPC clusters. None of it
              was planned as a &#x201C;portfolio&#x201D; &#x2014; I just kept
              building whatever problem was interesting that semester.
            </p>
            <p>
              When I&#x2019;m not doing that, I&#x2019;m usually somewhere on
              TryHackMe or chasing the next CTF-style challenge &#x2014; old habits
              from the forensics days that never really went away.
            </p>
            <p>
              You can find my CV{" "}
              <a href="/cv.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
                here
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