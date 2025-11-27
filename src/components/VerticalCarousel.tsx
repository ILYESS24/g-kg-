'use client';

import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, sections.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Sections */}
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}vh)`
        }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="h-screen flex items-center justify-center relative"
            style={{
              backgroundColor: section.backgroundColor || '#ffffff'
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
                  onClick={() => setCurrentIndex(sectionIndex)}
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
        ))}
      </div>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
          aria-label="Section précédente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}

      {currentIndex < sections.length - 1 && (
        <button
          onClick={() => setCurrentIndex(prev => prev + 1)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
          aria-label="Section suivante"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      )}

      {/* Indicateur de progression */}
      <div className="absolute bottom-8 right-8 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
        {currentIndex + 1} / {sections.length}
      </div>
    </div>
  );
}
