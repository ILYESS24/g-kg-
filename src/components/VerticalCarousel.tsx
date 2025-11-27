'use client';

import { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
  backgroundColor?: string;
}

interface VerticalCarouselProps {
  sections: Section[];
}

export default function VerticalCarousel({ sections }: VerticalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollAccumulator = 0;
    const scrollThreshold = 50; // Seuil plus bas pour une réponse plus rapide

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      // Accumuler le scroll
      scrollAccumulator += e.deltaY;

      // Si on dépasse le seuil vers le bas
      if (scrollAccumulator > scrollThreshold && currentIndex < sections.length - 1) {
        setIsTransitioning(true);
        setDirection('down');
        setCurrentIndex(prev => prev + 1);
        scrollAccumulator = 0;

        setTimeout(() => setIsTransitioning(false), 1000);
      }
      // Si on dépasse le seuil vers le haut
      else if (scrollAccumulator < -scrollThreshold && currentIndex > 0) {
        setIsTransitioning(true);
        setDirection('up');
        setCurrentIndex(prev => prev - 1);
        scrollAccumulator = 0;

        setTimeout(() => setIsTransitioning(false), 1000);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
        setTimeout(() => setIsTransitioning(false), 1000);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
        setTimeout(() => setIsTransitioning(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, sections.length, isTransitioning]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Sections avec effet de superposition */}
      {sections.map((section, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === currentIndex - 1;
        const isNext = index === currentIndex + 1;

        let transform = 'translateY(100vh)';
        let zIndex = 1;

        if (isActive) {
          transform = 'translateY(0)';
          zIndex = 15;
        } else if (isNext) {
          transform = direction === 'down' ? 'translateY(100vh)' : 'translateY(-100vh)';
          zIndex = 10;
        } else if (isPrev) {
          transform = direction === 'up' ? 'translateY(-100vh)' : 'translateY(100vh)';
          zIndex = 5;
        }

        return (
          <div
            key={section.id}
            className="absolute inset-0 flex items-center justify-center transition-all duration-800 ease-out"
            style={{
              backgroundColor: section.backgroundColor || '#ffffff',
              transform: isActive ? 'translateY(0)' : 'translateY(100vh)',
              zIndex: isActive ? 10 : 1,
              opacity: isActive ? 1 : 0,
            }}
          >
            {/* Contenu de la section */}
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-5xl font-bold mb-8 text-gray-800">
                {section.title}
              </h2>
              <div className="text-xl text-gray-600">
                {section.content}
              </div>
            </div>

            {/* Indicateurs de section */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              {sections.map((_, sectionIndex) => (
                <button
                  key={sectionIndex}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(sectionIndex);
                      setTimeout(() => setIsTransitioning(false), 1000);
                    }
                  }}
                  className={`block w-3 h-3 rounded-full mb-2 transition-all duration-300 ${
                    sectionIndex === currentIndex
                      ? 'bg-black scale-125'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Aller à la section ${sectionIndex + 1}`}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => {
            if (!isTransitioning) {
              setIsTransitioning(true);
              setCurrentIndex(prev => prev - 1);
              setTimeout(() => setIsTransitioning(false), 1000);
            }
          }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
          aria-label="Section précédente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}

      {currentIndex < sections.length - 1 && (
        <button
          onClick={() => {
            if (!isTransitioning) {
              setIsTransitioning(true);
              setCurrentIndex(prev => prev + 1);
              setTimeout(() => setIsTransitioning(false), 1000);
            }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
          aria-label="Section suivante"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      )}

      {/* Indicateur de progression */}
      <div className="absolute bottom-8 right-8 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full z-20">
        {currentIndex + 1} / {sections.length}
      </div>

      {/* Overlay pour l'effet de profondeur */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-10"></div>
      </div>
    </div>
  );
}
