import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const iconMap = {
  react: <FaReact />,
  js: <IoLogoJavascript />,
  tailwind: <RiTailwindCssFill />,
  mongo: <SiFlutter />,
  laravel: <FaLaravel />,
  php: <FaPhp />,
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Bg accent */}
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#24374e]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#7ecac8] text-sm font-mono tracking-widest uppercase">01. About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#49605f]/40 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Passionate about <br />
              <span className="text-gradient">great software</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a Full Stack developer who have 1+ years experience to created modern website and application. I believe a great code not just working, but a great code can easily to understand and maintain.
              </p>
              <p>
                I've like to explore new tech, contribute to open source, and share new knowledge.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '1+', label: 'Years Exp.' },
                { value: '10+', label: 'Projects' },
                { value: '1', label: 'Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-[#24374e]/20 border border-[#49605f]/20">
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-lg font-semibold text-gray-300 mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-[#0d1520] border border-[#24374e]/50 hover:border-[#49605f]/60 hover:bg-[#24374e]/20 transition-all duration-300"
                >
                  <span className="text-xl">{iconMap[skill.icon]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-200 mb-1.5">{skill.name}</div>
                    <div className="h-1 bg-[#24374e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + 0.3, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#7ecac8] to-[#49605f] rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
