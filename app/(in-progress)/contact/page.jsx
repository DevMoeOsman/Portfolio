'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import { SocialInfo } from '@/app/_layout/contact/components/index.js';
import { NavbarBrand } from '@/app/_layout/navbar/brand.jsx';
import { NavbarList } from '@/app/_layout/navbar/list.jsx';
import { MagneticButton } from '@/components';
import { Transition } from '@/layout';

import {
  Container,
  ImageWrapper,
  MainTitle,
  Row,
} from '../../_layout/contact/components/user-details/index.styled.js';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export default function UserDetails({ transformX }) {
  return (
    <Transition>
      <nav className='inset-x-0 top-0 z-10'>
        <div className='flex items-center justify-between px-8 py-4'>
          <NavbarBrand />
          <NavbarList />
        </div>
      </nav>
      <Container>
        <Row>
          <div className='flex items-center gap-8'>
            <ImageWrapper>
              <CldImage
                src='https://res.cloudinary.com/dbhn2rp83/image/upload/v1711373927/Portfolio%20stuff/header-bg.jpg'
                className='rounded-full object-scale-down'
                fill={true}
                alt='Moe Profile Picture'
              />
            </ImageWrapper>
            <MainTitle>Expect hearing</MainTitle>
          </div>
          <div className='flex items-center justify-between'>
            <MainTitle>From me soon...</MainTitle>
            <div>
              <ArrowDownLeft size={28} strokeWidth={1.25} />
            </div>
          </div>
        </Row>

        <Row>
          <div className='relative w-full'>
            <div className='h-[1px] bg-muted-foreground' />
            <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
              <motion.div style={{ x: transformX }}>
                <Link href='/' passHref>
                  <MagneticButton variant='primary' size='md'>
                    Back To Home
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </Row>

        <Row>
          <div className='flex w-full flex-col justify-start gap-12 lg:flex-row '>
            <div>
              <a href='mailto:mohammad.osman.dev@gmail.com'>
                <MagneticButton
                  variant='outline'
                  size='md'
                  className='w-full border-muted-foreground'
                >
                  mohammad.osman.dev@gmail.com
                </MagneticButton>
              </a>
            </div>
            <div>
              <a href='https://wa.me/963951853200'>
                <MagneticButton
                  variant='outline'
                  size='md'
                  className='w-full border-muted-foreground'
                >
                  What&apos;s App
                </MagneticButton>
              </a>
            </div>
            <a href='https://t.me/DevMoeOsman'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                Telegram
              </MagneticButton>
            </a>
          </div>
        </Row>
        <Row>
          <div className='flex w-full flex-col justify-center gap-12 lg:flex-row '>
            <div>
              <a href='https://www.linkedin.com/in/mohammadosman'>
                <MagneticButton
                  variant='outline'
                  size='md'
                  className='w-full border-muted-foreground'
                >
                  LinkedIn
                </MagneticButton>
              </a>
            </div>
            <div>
              <a href='https://www.facebook.com/oh.hi.im.mohammad'>
                <MagneticButton
                  variant='outline'
                  size='md'
                  className='w-full border-muted-foreground'
                >
                  Facebook
                </MagneticButton>
              </a>
            </div>
            <a href='https://discord.gg/BfSc9pGfPg'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                Discord
              </MagneticButton>
            </a>
          </div>
        </Row>

        <SocialInfo />
      </Container>
    </Transition>
  );
}
