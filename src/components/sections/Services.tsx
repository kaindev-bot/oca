import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Projetos sob medida",
    description: "Design exclusivo desenvolvido para seu espaço, respeitando sua personalidade e necessidades."
  },
  {
    title: "Móveis planejados",
    description: "Soluções completas para ambientes residenciais e corporativos com máximo aproveitamento."
  },
  {
    title: "Execução completa",
    description: "Acompanhamento integral do projeto, desde a concepção até a instalação final."
  },
  {
    title: "Acabamento premium",
    description: "Materiais nobres e técnicas refinadas para um resultado que atravessa o tempo."
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-32 bg-moss-deep relative" ref={ref}>
      {/* Top separator */}
      <div className="section-separator mb-20" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h3 className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium">
            Serviços
          </h3>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
            O que fazemos
          </h2>
          <div className="divider mt-8" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.4, 0, 0.2, 1] }}
              className="service-card group"
            >
              <div className="w-8 h-px bg-primary mb-6 transition-all duration-700 ease-elegant group-hover:w-12" />
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="section-separator mt-20" />
    </section>
  );
};

export default Services;

