import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import artisanImage from "@/assets/artisan-detail.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 bg-background relative texture-grain" ref={ref}>
      {/* Top separator */}
      <div className="section-separator mb-20" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium">
              Sobre a OCA
            </h3>
            
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-8">
              Tradição e precisão
              <br />
              em cada detalhe
            </h2>
            
            <div className="w-16 h-px bg-primary mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A OCA Marcenaria cria móveis sob medida com precisão artesanal, 
              respeito à madeira e acabamento superior.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Cada projeto é único. Cada detalhe importa.
            </p>

            {/* Impact phrase */}
            <p className="phrase-impact text-xl md:text-2xl">
              "O luxo está na precisão."
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-olive/40" />
              <img
                src={artisanImage}
                alt="Detalhe do trabalho artesanal"
                className="w-full h-[500px] object-cover image-elegant"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

