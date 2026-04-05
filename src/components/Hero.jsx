import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#49605f]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#24374e]/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#7ecac8]/5 rounded-full blur-[150px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl text-center"
      >

        {/* Name */}
        <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          <span className="text-white">Wildan</span>
          <span className="text-gradient">Hakim</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#49605f]" />
          <p className="text-xl md:text-2xl text-[#7ecac8] font-light tracking-widest uppercase text-sm">
            A Comprehenship Student
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#49605f]" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting digital experiences with clean code and thoughtful design.
          Passionate about building products that make a difference.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-[#49605f] to-[#24374e] rounded-xl font-semibold overflow-hidden hover:shadow-xl hover:shadow-[#49605f]/30 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#"
            className="px-8 py-3.5 rounded-xl font-semibold border border-[#49605f]/40 text-gray-300 hover:border-[#7ecac8]/60 hover:text-[#7ecac8] hover:bg-[#49605f]/10 transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}
