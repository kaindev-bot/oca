import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import woodDetail from "@/assets/wood-detail.jpg";

const Details = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="detalhes" className="py-32 bg-moss-deep relative texture-grain" ref={ref}>
      {/* Top separator */}
      <div className="section-separator mb-20" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={woodDetail}
              alt="Detalhe do acabamento em madeira"
              className="w-full h-[600px] object-cover image-elegant"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium">
              Detalhes & Acabamento
            </h3>
            
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12">
              O luxo está
              <br />
              na precisão
            </h2>
            
            <div className="space-y-6">
              <p className="text-foreground text-2xl md:text-3xl font-serif font-light leading-relaxed">
                No detalhe invisível.
              </p>
              <p className="text-foreground text-2xl md:text-3xl font-serif font-light leading-relaxed">
                No acabamento que
                <br />
                <span className="text-primary">atravessa o tempo.</span>
              </p>
            </div>
            
            <div className="w-16 h-px bg-primary mt-12" />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="section-separator mt-20" />
    </section>
  );
};

export default Details;

