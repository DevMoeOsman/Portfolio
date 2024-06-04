'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import { NavbarBrand } from '@/app/_layout/navbar/brand.jsx';
import { MagneticButton } from '@/components';
import { Transition } from '@/layout';

import {
  Container,
  ImageWrapper,
  Maindisc,
  Row,
} from '../../_layout/contact/components/user-details/index.styled.js';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export default function UserDetails({ transformX }) {
  return (
    <Transition>
      <nav className='relative inset-x-0 top-0 z-10'>
        <div className='flex items-center justify-between px-8 py-4'>
          <NavbarBrand />
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
            <Maindisc>My Journey OR as I call it MERN-Symphony</Maindisc>
          </div>
          <div className='flex items-center'>
            <Maindisc>
              As a passionate Full Stack Developer and MERN Stack Specialist, I
              thrive on crafting cutting-edge solutions that push the boundaries
              of web development. Currently pursuing my undergraduate studies at
              Aleppo University, Syria, I bring a wealth of experience in
              building scalable web applications using a robust tech stack. With
              proficiency in MongoDB, Node.js, TypeScript, and Next.js, I have
              honed my skills in developing seamless, feature-rich applications
              that deliver unparalleled user experiences. My journey began as a
              Frontend Web Developer at SWS - Syrian Web Solutions, where I
              cultivated expertise in frontend development and server
              programming. Through my tenure at Syrian Computer Society (SCS) as
              an Information Technology Instructor, I shared my knowledge with
              eager learners, fostering a culture of innovation and excellence.
              As a Freelance Web Designer at Namaa Association, Aleppo, I
              leveraged my creative prowess to design captivating websites that
              resonate with clients&apos;s visions. Whether it&apos;s crafting
              engaging web content or providing technical support, I bring a
              diverse skill set to the table. My proficiency extends to software
              testing, video editing, and web analytics, ensuring every aspect
              of the development process is meticulously executed. Driven by a
              passion for continuous learning, I have expanded my expertise to
              encompass technologies such as Redux.js, Tailwind CSS, and
              Express.js. My experiences at UserTesting have equipped me with
              invaluable skills in remote user support, microservices,
              debugging, and MySQL, empowering me to tackle complex challenges
              with confidence. In addition to my technical acumen, I possess a
              keen eye for design, with proficiency in Adobe Photoshop, HTML5,
              and CSS. Whether it&apos;s implementing responsive layouts or
              optimizing web performance, I prioritize delivering solutions that
              exceed expectations. With a firm commitment to excellence and a
              drive to innovate, I am poised to make a significant impact in the
              ever-evolving landscape of web development.
            </Maindisc>
          </div>
          {/* <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div> */}
        </Row>
        <Row>
          <div className='relative w-full'>
            <div className='h-[1px] bg-muted-foreground' />
            <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
              <motion.div style={{ x: transformX }}>
                <Link href='/' passHref>
                  <MagneticButton variant='primary' size='md'>
                    Explore My Work
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </Row>
        {/* 
        <Row>
          <div className='flex w-full flex-col gap-4 lg:flex-row'>
            {/* <div>
              <a href='mailto:mohammad.osman.dev@gmail.com'>
                <MagneticButton
                  variant='outline'
                  size='md'
                  className='w-full border-muted-foreground'
                >
                  mohammad.osman.dev@gmail.com
                </MagneticButton>
              </a>
            </div> */}
        {/* <div>
              <a href='/'>
                <MagneticButton
                  variant='outline'
                  size='md'
                  className='w-full border-muted-foreground'
                >
                  My Work
                </MagneticButton>
              </a>
            </div> */}
        {/* </div> */}
        {/* </Row> */}
      </Container>
    </Transition>
  );
}
