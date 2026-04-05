import { socials } from '../data/portfolio'
import SocialIcon from './icons/SocialIcon'

export default function Footer() {
  return (
    <footer className="border-t border-[#24374e]/30 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7ecac8] to-[#49605f] flex items-center justify-center text-xs font-bold text-[#060b14]">
            W
          </div>
          <span className="font-bold text-gray-400">
            Wildan's Portofolio<span className="text-[#49605f]">.</span>
          </span>
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Wildan Hakim. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              aria-label={s.name}
              className="text-gray-600 hover:text-[#7ecac8] transition-colors duration-300"
            >
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
