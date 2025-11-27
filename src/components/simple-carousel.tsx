'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';

// Types TypeScript stricts
interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

interface SimpleCarouselProps {
  items?: CarouselItem[];
  className?: string;
}

// Constantes pour éviter les magic numbers
const CAROUSEL_HEIGHT = 'h-96'; // 384px
const BUTTON_SIZE = 'w-14 h-14'; // 56px
const INDICATOR_SIZE = 'w-3 h-3'; // 12px
const INDICATOR_ACTIVE_SIZE = 'w-8'; // 32px

// Données par défaut
const defaultItems: CarouselItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
    title: 'Misty Mountain Majesty',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop',
    title: 'Winter Wonderland',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop',
    title: 'Autumn Mountain Retreat',
  },
];

export function SimpleCarousel({
  items = defaultItems,
  className = ''
}: SimpleCarouselProps) {
  const [index, setIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Callbacks optimisés pour éviter les re-rendus inutiles
  const goToPrevious = useCallback(() => {
    setIndex(prev => Math.max(0, prev - 1));
    setImageLoading(true);
    setImageError(false);
  }, []);

  const goToNext = useCallback(() => {
    setIndex(prev => Math.min(items.length - 1, prev + 1));
    setImageLoading(true);
    setImageError(false);
  }, [items.length]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex !== index) {
      setIndex(slideIndex);
      setImageLoading(true);
      setImageError(false);
    }
  }, [index]);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  // Gestionnaire de navigation au clavier
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  }, [goToPrevious, goToNext]);

  return (
    <div
      className={`max-w-4xl mx-auto p-4 ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel d'images interactif"
    >
      <div className='text-center mb-6'>
        <h2 className='text-3xl font-bold text-green-600 mb-2'>
          ✅ CAROUSEL OPTIMISÉ - VERSION FINALE
        </h2>
        <p className='text-gray-600'>
          Carousel entièrement accessible avec navigation clavier (← →)
        </p>
      </div>

      {/* Image actuelle avec gestion d'erreur */}
      <div className='relative bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-xl'>
        <div className={`w-full ${CAROUSEL_HEIGHT} relative`}>
          {imageLoading && (
            <div className='absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse'>
              <div className='text-gray-500 text-lg'>Chargement...</div>
            </div>
          )}

          {imageError ? (
            <div className='absolute inset-0 flex items-center justify-center bg-red-100'>
              <div className='text-center text-red-600'>
                <div className='text-4xl mb-2'>⚠️</div>
                <p className='font-semibold'>Erreur de chargement</p>
                <p className='text-sm'>Impossible de charger l'image</p>
              </div>
            </div>
          ) : (
            <Image
              src={items[index].url}
              alt={items[index].title}
              fill
              className='object-cover transition-opacity duration-300'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={handleImageLoad}
              onError={handleImageError}
              priority={index === 0}
            />
          )}

          {/* Overlay avec informations */}
          <div className='absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm'>
            <h3 className='font-bold text-xl mb-1'>{items[index].title}</h3>
            <p className='text-sm opacity-90'>
              Image {index + 1} sur {items.length}
            </p>
            <div className='mt-2 text-xs opacity-75'>
              Utilisez ← → pour naviguer
            </div>
          </div>
        </div>

        {/* Boutons de navigation améliorés */}
        <button
          onClick={goToPrevious}
          disabled={index === 0}
          aria-label="Image précédente"
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${BUTTON_SIZE} bg-white/95 hover:bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
        >
          <span className='text-2xl font-bold text-gray-800'>‹</span>
        </button>

        <button
          onClick={goToNext}
          disabled={index === items.length - 1}
          aria-label="Image suivante"
          className={`absolute right-4 top-1/2 -translate-y-1/2 ${BUTTON_SIZE} bg-white/95 hover:bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
        >
          <span className='text-2xl font-bold text-gray-800'>›</span>
        </button>
      </div>

      {/* Indicateurs améliorés */}
      <div
        className='flex justify-center gap-3 mb-6'
        role="tablist"
        aria-label="Sélection d'image"
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => goToSlide(i)}
            aria-label={`Aller à l'image ${i + 1}: ${item.title}`}
            aria-selected={i === index}
            role="tab"
            className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${
              i === index
                ? `bg-blue-500 ${INDICATOR_ACTIVE_SIZE} shadow-lg scale-110`
                : `${INDICATOR_SIZE} bg-gray-300 hover:bg-gray-400 hover:scale-105`
            }`}
          />
        ))}
      </div>

      {/* Informations détaillées */}
      <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm'>
        <h4 className='font-bold text-blue-900 mb-3 text-lg'>📊 État du Carousel</h4>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
          <div className='bg-white rounded-lg p-3 shadow-sm'>
            <div className='text-blue-600 font-semibold'>Position</div>
            <div className='text-2xl font-bold text-blue-800'>{index + 1}</div>
            <div className='text-xs text-gray-500'>sur {items.length}</div>
          </div>
          <div className='bg-white rounded-lg p-3 shadow-sm'>
            <div className='text-green-600 font-semibold'>Image Active</div>
            <div className='text-lg font-bold text-green-800 truncate' title={items[index].title}>
              {items[index].title}
            </div>
          </div>
          <div className='bg-white rounded-lg p-3 shadow-sm'>
            <div className='text-purple-600 font-semibold'>Statut</div>
            <div className='text-lg font-bold text-purple-800'>
              {imageLoading ? '⏳ Chargement' : imageError ? '❌ Erreur' : '✅ Prêt'}
            </div>
          </div>
        </div>

        <div className='mt-4 pt-4 border-t border-blue-200'>
          <p className='text-blue-700 text-sm'>
            🎯 <strong>Navigation :</strong> Boutons, indicateurs, ou touches ← →
          </p>
          <p className='text-blue-600 text-xs mt-1'>
            ♿ Accessibilité complète • 📱 Responsive • ⚡ Optimisé
          </p>
        </div>
      </div>
    </div>
  );
}
