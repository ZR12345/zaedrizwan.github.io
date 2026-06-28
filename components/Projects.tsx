const projects = [
  {
    title: "AdaComp — Adaptive Multi-Tier Compression Middleware for MPI Collectives",
    description: "MPI middleware with adaptive compression and pipelined communication overlap, reducing network overhead and accelerating collective operations in HPC clusters.",
    tech: "C/C++, MPI, HPC",
    link: "https://github.com/ZR12345/AdaComp",
  },
  {
    title: "Knowledge-Aware Graph Prompt Learning for Cross-Domain Recommendation",
    description: "Cross-domain recommender using PyTorch/DGL with TransE and GAT, introducing adaptive prompt scaling and scalable training over 923K+ nodes.",
    tech: "PyTorch, DGL, GAT, TransE",
    link: "https://github.com/ZR12345/Recommendation_System",
  },
  {
    title: "Real-Time Attack Detection for Networked Systems Under Cyber Threats",
    description: "Cyber-attack detection and synchronization control system for dynamical networks using ODEs, graph theory, and LMI-based optimization.",
    tech: "ODEs, Graph Theory, LMI Optimization",
    link: "https://github.com/ZR12345/chua-network-attack-detection",
  },
  {
    title: "Skin Lesion Classification using Deep Learning with Attention Mechanisms",
    description: "CNN-based skin lesion classifier on the HAM10000 dataset using CBAM attention and Focal Loss, achieving robust multi-class classification across 7 disease types.",
    tech: "CNN, CBAM, Focal Loss, PyTorch",
    link: "https://github.com/ZR12345/skin-lesion-classification-cnn",
  },
  {
    title: "Semantic Video Shot Detection and Keyframe Extraction using CLIP",
    description: "CLIP-based video understanding pipeline for shot detection and keyframe extraction using embedding similarity and clustering methods.",
    tech: "CLIP, Embeddings, Clustering",
    link: "https://github.com/ZR12345/Long-Term-MultiShot-Keyframe-Extraction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title}>
            
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {project.title}
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              {project.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 italic">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}