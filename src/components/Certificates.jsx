import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certificates } from '../data/portfolio'

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0d1520] border border-[#49605f]/40 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-[#060b14]/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#24374e] transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Certificate image */}
        <div className="relative bg-[#060b14] border-b border-[#24374e]/60">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full object-contain max-h-80"
            />
          ) : (
            <div className="h-48 flex items-center justify-center text-gray-600">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          )}
          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d1520] to-transparent" />
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1 pr-8">{cert.title}</h3>
          <p className="text-[#7ecac8] font-medium text-sm mb-5">{cert.issuer}</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[#060b14] border border-[#24374e]/50">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Issued</p>
              <p className="text-sm text-gray-200 font-medium">{cert.date}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#060b14] border border-[#24374e]/50">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Credential ID</p>
              <p className="text-sm text-gray-200 font-mono truncate">{cert.credentialId}</p>
            </div>
          </div>

          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#49605f] to-[#24374e] rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#49605f]/30 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Verify Credential
          </a>
        </div>
      </motion.div>
    </motion.div>
    )
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#7ecac8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#7ecac8] text-sm font-mono tracking-widest uppercase">03. Certificates</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#49605f]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Credentials & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Sertifikasi yang saya raih untuk terus mengembangkan keahlian dan pengetahuan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(cert)}
              className="group text-left relative rounded-2xl bg-[#0d1520] border border-[#24374e]/50 hover:border-[#49605f]/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#49605f]/15"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-[#060b14] border-b border-[#24374e]/40">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-44 flex items-center justify-center text-gray-700">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#49605f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#060b14]/80 backdrop-blur-sm border border-[#7ecac8]/40 flex items-center justify-center text-[#7ecac8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1520] to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-100 text-sm leading-snug mb-1 group-hover:text-[#7ecac8] transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#49605f] font-medium mb-3">{cert.issuer}</p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {cert.date}
                  </span>
                  <span className="text-xs font-mono text-gray-600 truncate max-w-[100px]">{cert.credentialId}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
