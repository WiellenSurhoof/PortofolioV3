export const skills = [
  { name: 'React.js', icon: 'react', level: 85 },
  { name: 'JavaScript', icon: 'js', level: 85 },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 80 },
  { name: 'MongoDB', icon: 'mongo', level: 50 },
  { name: 'Laravel', icon: 'laravel', level: 80 },
  { name: 'PHP', icon: 'php', level: 85 },
];
export const projects = [
  {
    id: 1,
    title: 'Cinema Web',
    description:
      'Platform memesan tiket bioskop sederhana dengan fitur CRUD dan Payment',
    image: null,
    tech: ['Laravel', 'Bootstrap', 'MySQL' ],
    github: 'https://github.com/WiellenSurhoof/TIXID',
    demo: '#',
    featured: false,
    color: 'from-[#7ecac8]/20 to-[#49605f]/10',
  },
  {
    id: 2,
    title: 'Islamic Prayer Time Application',
    description:
      'Aplikasi untuk melihat waktu shalat secara real time yang interaktif.',
    image: null,
    tech: ['React', 'Tailwind', 'WaktuShalat-API'],
    github: 'https://github.com/WiellenSurhoof/IPTA-Islamic-Prayer-time-Application-.git',
    demo: 'https://clinquant-baklava-8634c4.netlify.app/',
    featured: true,
    color: 'from-[#24374e]/30 to-[#49605f]/10',
  },
  {
    id: 3,
    title: 'Royale Maisone',
    description:
      'Aplikasi pemesanan kamar hotel sederhana dengan CRUD.',
    image: null,
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/WiellenSurhoof/hotel-project',
    demo: 'capable-bienenstitch-1a3d0b.netlify.app',
    featured: false,
    color: 'from-[#49605f]/20 to-[#24374e]/10',
  },
]

export const socials = [
  { name: 'GitHub', url: 'https://github.com/WiellenSurhoof', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'Email', url: 'mailto:wildanhakim164@gmail.com', icon: 'email' },
]

export const navLinks = ['Home', 'About', 'Projects', 'Contact']
