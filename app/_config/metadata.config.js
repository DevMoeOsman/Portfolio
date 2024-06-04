/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://moeosmaans-portfolio.vercel.app/'),
  title: {
    template: '%s | Mohammad Osman',
    default: 'Mohammad Osman • Freelance Designer & Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in Syria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Moe',
  generator: 'Mohammad Osman',
  applicationName: 'Mohammad Osman',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develop', 'Freelance'],
  authors: [{ name: 'Mohammad Osman', url: 'https://github.com/MoeOsmaan' }],
  creator: 'Mohammad Osman',
  publisher: 'Mohammad Osman',
  twitter: {
    card: 'summary_large_image',
    title: 'Moe Osman',
    description:
      'Helping brands thrive in the digital world. Located in Syria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Moe',
    siteId: '',
    creator: '',
    creatorId: '',
    images: {
      alt: 'Portfolio',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
