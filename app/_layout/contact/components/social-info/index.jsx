'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const offset = date.getTimezoneOffset() / 60;
      const gmtString = offset >= 0 ? `GMT+${offset}` : `GMT${offset}`;
      const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${gmtString}`;
      setCurrentTime(timeString);
    };

    // Initial call to set the time
    updateTime();

    // Update time every minute
    const interval = setInterval(updateTime, 60000);

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);

  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='px-12 pb-4 pt-10'>
      <div className='flex flex-wrap items-stretch justify-between gap-5'>
        <div className='flex gap-8'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-7'>2024 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-7'>
              <time>{currentTime}</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex gap-8'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
