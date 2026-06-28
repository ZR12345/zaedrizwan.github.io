export default function Research() {
  return (
    <section id="research" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Research</h2>

      <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Post-Quantum Secure Dynamic Membership for Military UAV Swarms
        </h3>
        <p className="italic text-base text-gray-500 dark:text-gray-400">
          MTech Thesis &#x2014; National Institute of Technology Karnataka, Surathkal
        </p>

        <p>
          Military UAV swarms need to let drones join, leave, and get revoked
          on the fly &#x2014; mid-mission, with no central authority easily
          reachable, and no room for a compromised node to linger in the
          group. Most existing membership protocols either assume a stable
          network or rely on cryptography that won&#x2019;t hold up once
          quantum computers become practical.
        </p>

        <p>
          My thesis addresses both problems at once. I designed a dynamic
          membership protocol built on a Merkle Patricia Trie, which lets the
          swarm track membership state efficiently and prove inclusion or
          exclusion without flooding the network. The cryptographic core uses
          NIST-standardized post-quantum primitives &#x2014; ML-KEM for key
          encapsulation and ML-DSA for signatures &#x2014; so join, leave, and
          revocation operations all preserve forward and backward secrecy
          even against an adversary with a quantum computer.
        </p>

        <p>
          Security claims aren&#x2019;t worth much without verification, so I
          checked the protocol three separate ways: computational security
          proofs, BAN logic analysis, and automated verification with the
          Tamarin Prover. All three came back clean &#x2014; zero violations
          found across the authentication and key-agreement properties I
          modeled.
        </p>

        <p>
          The last piece was making sure this isn&#x2019;t just theoretically
          sound but actually deployable: I implemented and benchmarked the
          protocol on embedded hardware to check it can run within the
          power, memory, and latency constraints of real UAV platforms.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8">
          What&#x2019;s Next
        </h3>
        <p>
          I&#x2019;m currently extending this work to handle larger swarm
          sizes and more adversarial network conditions &#x2014; packet loss,
          partitioning, and battery-exhaustion attacks &#x2014; to see how far
          the protocol&#x2019;s guarantees hold under real operational stress.
        </p>
      </div>
    </section>
  );
}