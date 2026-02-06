import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, TreeDeciduous, Hammer, Sparkles } from "lucide-react";

const techniques = [
  {
    icon: TreeDeciduous,
    title: "Madeiras Nobres",
    description: "Seleção criteriosa de madeiras certificadas e de origem sustentável",
  },
  {
    icon: Ruler,
    title: "Precisão Milimétrica",
    description: "Cortes e encaixes executados com exatidão artesanal",
  },
  {
    icon: Hammer,
    title: "Técnicas Tradicionais",
    description: "Métodos consagrados combinados com tecnologia contemporânea",
  },
  {
    icon: Sparkles,
    title: "Acabamento Premium",
    description: "Vernizes e lacas de alta resistência e durabilidade",
  },
];

const TechniqueMaterials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative" ref={ref}>
      {/* Subtle top separator */}
      <div className="section-separator mb-24" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium">
            Técnica & Materiais
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Compromisso com a excelência em cada etapa do processo
          </p>
        </motion.div>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="technique-card"
            >
              <technique.icon className="technique-icon" />
              <h4 className="text-foreground font-serif text-lg mb-3">
                {technique.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {technique.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="phrase-impact">
            "Cada detalhe importa."
          </p>
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="section-separator mt-24" />
    </section>
  );
};

export default TechniqueMaterials;
