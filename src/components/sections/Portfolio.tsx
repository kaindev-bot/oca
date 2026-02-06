import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioProjects, categories, type PortfolioProject } from "@/data/portfolioImages";
import PortfolioGallery from "@/components/PortfolioGallery";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = activeCategory === "Todos"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  return (
    <section id="portfolio" className="py-32 bg-background relative" ref={ref}>
      {/* Top separator */}
      <div className="section-separator mb-20" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h3 className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium">
            Portfólio
          </h3>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
            Nossos projetos
          </h2>
          <div className="divider mt-8" />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm tracking-widest uppercase pb-1 border-b transition-all duration-500 ease-elegant ${activeCategory === category
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="portfolio-item group aspect-[4/3] cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105 will-change-transform"
              />
              <div className="portfolio-overlay will-change-transform">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="text-foreground/70 text-sm mt-2 transform translate-y-4 transition-transform duration-600 group-hover:translate-y-0">
                  {project.gallery.length} fotos • Clique para ver
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <PortfolioGallery
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          images={selectedProject.gallery}
          title={selectedProject.title}
        />
      )}
    </section>
  );
};

export default Portfolio;

