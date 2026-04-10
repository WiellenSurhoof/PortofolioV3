import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (item) => {
    setActive(item)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060b14]/80 backdrop-blur-xl border-b border-[#49605f]/20 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <img
              src="src/assets/logocyan.png"
              alt="Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          <span className="font-bold text-lg tracking-tight group-hover:text-[#7ecac8] transition-colors duration-300">
            Wildan's Portofolio<span className="text-[#49605f]">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNav(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === item
                    ? 'text-[#7eca2c8]'
                    : 'text-gray-400 hover:text-gray-100'
                }`}
              >
                {active === item && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#49605f]/15 rounded-lg border border-[#49605f]/30"
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-[#24374e] rounded-lg border border-[#49605f]/40 hover:border-[#7ecac8]/50 hover:shadow-lg hover:shadow-[#49605f]/20 transition-all duration-300"
        >
          Contact Me!
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#060b14]/95 backdrop-blur-xl border-b border-[#49605f]/20"
          >
            <ul className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleNav(item)}
                    className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-[#7ecac8] hover:bg-[#49605f]/10 rounded-lg transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
