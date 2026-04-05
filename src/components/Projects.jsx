import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#49605f]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#7ecac8] text-sm font-mono tracking-widest uppercase">02. Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#49605f]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A selection of projects I've worked on. Each one taught me something new.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/WiellenSurhoof"
            className="inline-flex items-center gap-2 text-[#7ecac8] hover:text-white text-sm font-medium transition-colors duration-300 group"
          >
            View all projects on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
