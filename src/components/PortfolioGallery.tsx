import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { PortfolioImage } from "@/data/portfolioImages";

interface PortfolioGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: PortfolioImage[];
  title: string;
}

const PortfolioGallery = ({ isOpen, onClose, images, title }: PortfolioGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] md:max-w-[90vw] lg:max-w-6xl h-[90vh] p-0 bg-background-dark border-border overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 bg-gradient-to-b from-background-dark/90 to-transparent">
          <div className="flex items-center justify-between">
            <h3 className="text-primary font-display text-xl md:text-2xl">{title}</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background/50 text-foreground hover:bg-primary hover:text-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-full flex items-center justify-center px-4 md:px-16 py-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/50 text-foreground hover:bg-primary hover:text-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/50 text-foreground hover:bg-primary hover:text-background transition-colors"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 bg-gradient-to-t from-background-dark/90 to-transparent">
          <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioGallery;
