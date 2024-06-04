'use client';

import { useEffect, useState } from 'react'; // sorted alphabetically

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { Center } from '@/components';
import { useDimensions, useTimeOut } from '@/hooks';

import { fade, slideUp } from './variants';

const MotionComponent = motion(Center);
const preloaderWordsforpage = [
  'Ciao',
  'Bonjour',
  'مرحبا',
  'Olà',
  'Hello',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
];
const preloaderWordsforWork = ['Work'];
const preloaderWordsforAbout = ['About me'];
const preloaderWordsforcontact = ['Contact'];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (window.location.pathname === '/contact') {
      setCurrentPage('contact');
    } else if (window.location.pathname === '/work') {
      setCurrentPage('work');
    } else if (window.location.pathname === '/about') {
      setCurrentPage('about');
    } else {
      setCurrentPage('other');
    }
  }, []);

  useTimeOut({
    callback: () => {
      setIndex(prevIndex => prevIndex + 1);
    },
    duration: index === 0 ? 500 : 250,
    deps: [index],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait bg-foreground'
      variants={slideUp}
      initial='initial'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='text-3xl text-background md:text-4xl'
            variants={fade}
            initial='initial'
            animate='enter'
          >
            <Dot size={48} className='me-3' />
            {currentPage === 'other' && <p>{preloaderWordsforpage[index]}</p>}
            {currentPage === 'contact' && <p>{preloaderWordsforcontact[0]}</p>}
            {currentPage === 'work' && <p>{preloaderWordsforWork[0]}</p>}
            {currentPage === 'about' && <p>{preloaderWordsforAbout[0]}</p>}
          </MotionComponent>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className='fill-foreground'
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
