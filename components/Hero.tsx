export default function Hero() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 pt-8 pb-16">
      <div className="flex flex-col sm:flex-row gap-8 sm:items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Zaed Rizwan
          </h1>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I&#x2019;m an MTech student in Information Technology at the{" "}
              <a href="https://www.nitk.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                National Institute of Technology Karnataka, Surathkal
              </a>
              , where I work on cryptography and post-quantum security.
            </p>
            <p>
              My research focuses on post-quantum secure authentication and
              dynamic membership for military UAV swarms, using Merkle
              Patricia Tries and NIST-standardized primitives (ML-KEM, ML-DSA).
              I also spend time on web application security, working across
              both offensive and defensive sides.
            </p>
            <p>
              You can find my CV{" "}
              <a href="/cv.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
                here
              </a>
              .
            </p>
            <p>
              I&#x2019;m happy to be contacted at{" "}
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
          className="w-40 h-40 sm:w-44 sm:h-44 rounded-md object-cover flex-shrink-0"
        />
      </div>
    </section>
  );
}