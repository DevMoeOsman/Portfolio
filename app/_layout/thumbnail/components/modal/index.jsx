'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean; index: number;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const items = thumbnailOptions.map(({ title, image }) => {
      const id = randomId();
      return (
        <Center key={id} className='size-full'>
          <CldImage
            alt={`${title} thumbnail image`}
            height={220}
            src={image}
            width={320}
          />
        </Center>
      );
    });

    return (
      <MotionComponent
        {...props}
        animate={active ? 'enter' : 'closed'}
        className='fixed top-1/2 left-1/2 h-[25vh] bg-secondary-foreground overflow-hidden pointer-events-none rounded size-80'
        initial='initial'
        ref={ref}
        variants={variants}
      >
        <div
          className='relative size-full'
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);
