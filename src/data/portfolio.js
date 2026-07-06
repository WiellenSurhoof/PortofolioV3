import sertifDicoding from '../assets/sertifdicoding.png'
import sertifReact from '../assets/sertifreact.png'
import sertifSql from '../assets/sertifsql.png'
import sertifBe from '../assets/sertifbe.png'
import sertifDasarAi from '../assets/sertifdasarai.png'
import sertifProgLogic from '../assets/sertifproglogic.png'

export const skills = [
  { name: 'React.js', icon: 'react', level: 85 },
  { name: 'JavaScript', icon: 'js', level: 85 },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 80 },
  { name: 'Flutter', icon: 'flutter', level: 85 },
  { name: 'Laravel', icon: 'laravel', level: 80 },
  { name: 'PHP', icon: 'php', level: 80},
];
export const projects = [
  {
    id: 1,
    title: 'Cinema Web',
    description:
      'Platform memesan tiket bioskop sederhana dengan fitur CRUD dan Payment A platform to buy ',
    image: 'sc/assets/',
    tech: ['Laravel', 'Bootstrap', 'MySQL' ],
    github: 'https://github.com/WiellenSurhoof/TIXID',
    demo: '#',
  },
  {
    id: 2,
    title: 'Islamic Prayer Time Application',
    description:
      'Aplikasi untuk melihat waktu shalat secara real time yang interaktif.',
    image: 'sc/assets/',
    tech: ['React', 'Tailwind', 'WaktuShalat-API'],
    github: 'https://github.com/WiellenSurhoof/IPTA-Islamic-Prayer-time-Application-.git',
    demo: 'https://clinquant-baklava-8634c4.netlify.app/',
  },
  {
    id: 3,
    title: 'Royale Maisone',
    description:
      'Aplikasi pemesanan kamar hotel sederhana dengan CRUD.',
    image: 'sc/assets/',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/WiellenSurhoof/hotel-project',
    demo: 'capable-bienenstitch-1a3d0b.netlify.app',
  },
]

export const socials = [
  { name: 'GitHub', url: 'https://github.com/WiellenSurhoof', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'Email', url: 'mailto:wildanhakim164@gmail.com', icon: 'email' },
]


export const certificates = [
  {
    id: 1,
    title: 'Pengenalan ke Logika Pemrograman',
    issuer: 'Dicoding',
    date: 'Jan 2024',
    credentialId: '6RPNGQO79Z2M',
    url: 'https://www.dicoding.com/certificates/6RPNGQO79Z2M',
    image: sertifProgLogic,
  },
  {
    id: 2,
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Dicoding',
    date: 'Mar 2024',
    credentialId: '6RPNG42V9Z2M',
    url: 'https://www.dicoding.com/certificates/6RPNG42V9Z2M',
    image: sertifDasarAi,
  },
  {
    id: 3,
    title: 'Dasar Dasar SQL',
    issuer: 'Dicoding',
    date: 'Jun 2024',
    credentialId: 'JLX15M825Z72',
    url: 'https://www.dicoding.com/certificates/JLX15M825Z72',
    image: sertifSql,
  },
  {
    id: 4,
    title: 'Belajar Back-End Pemula',
    issuer: 'Dicoding',
    date: 'Sep 2024',
    credentialId: 'EYX4QQK6OPDL',
    url: 'https://www.dicoding.com/certificates/EYX4QQK6OPDL',
    image: sertifBe,
  },
  {
    id: 5,
    title: 'Belajar Membuat Aplikasi React',
    issuer: 'Dicoding',
    date: 'Nov 2024',
    credentialId: '6RPN77G6QX2M',
    url: 'https://www.dicoding.com/certificates/6RPN77G6QX2M',
    image: sertifReact,
  },
  {
    id: 6,
    title: 'Coding Camp Powered By DBS Foundation',
    issuer: 'Dicoding & DBS',
    date: 'Dec 2023',
    credentialId: 'CC26/GRAD/XXVI-05/CFS065D6Y184',
    url: '#',
    image: sertifDicoding,
  },
]

export const navLinks = ['Home', 'About', 'Projects', 'Certificates', 'Contact']
