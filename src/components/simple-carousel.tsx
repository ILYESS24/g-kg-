'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const items = [
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

export function SimpleCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='text-center mb-6'>
        <h2 className='text-3xl font-bold text-green-600 mb-2'>
          ✅ CAROUSEL SIMPLIFIÉ - TEST
        </h2>
        <p className='text-gray-600'>Si vous voyez cette section, le carousel fonctionne !</p>
      </div>

      {/* Image actuelle */}
      <div className='relative bg-gray-100 rounded-lg overflow-hidden mb-4'>
        <div className='w-full h-96 relative'>
          <Image
            src={items[index].url}
            alt={items[index].title}
            fill
            className='object-cover'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className='absolute bottom-4 left-4 bg-black/80 text-white p-3 rounded'>
            <h3 className='font-bold text-lg'>{items[index].title}</h3>
            <p className='text-sm'>Image {index + 1} sur {items.length}</p>
          </div>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 hover:bg-gray-100 transition-colors'
        >
          <span className='text-2xl'>‹</span>
        </button>

        <button
          onClick={() => setIndex(Math.min(items.length - 1, index + 1))}
          disabled={index === items.length - 1}
          className='absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 hover:bg-gray-100 transition-colors'
        >
          <span className='text-2xl'>›</span>
        </button>
      </div>

      {/* Indicateurs */}
      <div className='flex justify-center gap-2 mb-4'>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? 'bg-blue-500 w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Debug info */}
      <div className='bg-blue-50 border border-blue-200 rounded p-4 text-center'>
        <h4 className='font-semibold text-blue-800 mb-2'>🔧 État du Carousel</h4>
        <p className='text-blue-700'>
          Index: <strong>{index}</strong> |
          Image active: <strong>{items[index].title}</strong> |
          Total: <strong>{items.length}</strong> images
        </p>
      </div>
    </div>
  );
}
