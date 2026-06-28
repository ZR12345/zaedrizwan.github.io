const projects = [
  {
    title: "AdaComp — Adaptive Multi-Tier Compression Middleware for MPI Collectives",
    description:
      "MPI middleware with adaptive compression and pipelined communication overlap, reducing network overhead and accelerating collective operations in HPC clusters.",
    tech: ["C/C++", "MPI", "HPC"],
    link: "https://github.com/ZR12345/AdaComp",
  },
  {
    title: "Knowledge-Aware Graph Prompt Learning for Cross-Domain Recommendation",
    description:
      "Cross-domain recommender using PyTorch/DGL with TransE and GAT, introducing adaptive prompt scaling and scalable training over 923K+ nodes.",
    tech: ["PyTorch", "DGL", "GAT", "TransE"],
    link: "https://github.com/ZR12345/Recommendation_System",
  },
  {
    title: "Real-Time Attack Detection for Networked Systems Under Cyber Threats",
    description:
      "Cyber-attack detection and synchronization control system for dynamical networks using ODEs, graph theory, and LMI-based optimization.",
    tech: ["ODEs", "Graph Theory", "LMI Optimization"],
    link: "https://github.com/ZR12345/chua-network-attack-detection",
  },
  {
    title: "Skin Lesion Classification using Deep Learning with Attention Mechanisms",
    description:
      "CNN-based skin lesion classifier on the HAM10000 dataset using CBAM attention and Focal Loss, achieving robust multi-class classification across 7 disease types.",
    tech: ["CNN", "CBAM", "Focal Loss", "PyTorch"],
    link: "https://github.com/ZR12345/skin-lesion-classification-cnn",
  },
  {
    title: "Semantic Video Shot Detection and Keyframe Extraction using CLIP",
    description:
      "CLIP-based video understanding pipeline for shot detection and keyframe extraction using embedding similarity and clustering methods.",
    tech: ["CLIP", "Embeddings", "Clustering"],
    link: "https://github.com/ZR12345/Long-Term-MultiShot-Keyframe-Extraction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              View on GitHub &#x2192;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


