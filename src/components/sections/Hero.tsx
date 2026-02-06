import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture-grain"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
      >
        <motion.img
          src={heroImage}
          alt="Cozinha premium OCA Marcenaria"
          className="w-full h-[120%] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss-deep/75 via-moss-deep/55 to-moss-deep/95" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <h2 className="font-serif text-primary text-2xl md:text-3xl tracking-[0.3em] uppercase">
            OCA
          </h2>
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mt-1">
            Marcenaria
          </p>
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground font-light leading-tight mb-8"
        >
          Móveis sob medida
          <br />
          <span className="text-primary">com essência artesanal</span>
          <br />
          e acabamento premium
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="w-24 h-px bg-primary mx-auto mb-12"
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#contato"
            className="btn-hero"
          >
            <span>Solicitar orçamento</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

