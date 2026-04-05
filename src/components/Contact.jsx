import { useState } from 'react'
import { motion } from 'framer-motion'
import { socials } from '../data/portfolio'
import SocialIcon from './icons/SocialIcon'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#24374e]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#7ecac8] text-sm font-mono tracking-widest uppercase">03. Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#49605f]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Punya project menarik? Saya selalu terbuka untuk diskusi dan kolaborasi baru.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Nama</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Wildan Adrian"
                  className="w-full px-4 py-3 bg-[#0d1520] border border-[#24374e]/60 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#49605f] focus:ring-1 focus:ring-[#49605f]/30 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 bg-[#0d1520] border border-[#24374e]/60 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#49605f] focus:ring-1 focus:ring-[#49605f]/30 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Pesan</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows="6"
                placeholder="Ceritakan project Anda..."
                className="w-full px-4 py-3 bg-[#0d1520] border border-[#24374e]/60 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#49605f] focus:ring-1 focus:ring-[#49605f]/30 transition-all duration-300 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              className="w-full py-3.5 bg-gradient-to-r from-[#49605f] to-[#24374e] rounded-xl font-semibold hover:shadow-xl hover:shadow-[#49605f]/30 transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Mengirim...</>
              ) : status === 'success' ? (
                <><span>✓</span> Terkirim!</>
              ) : (
                'Kirim Pesan'
              )}
            </motion.button>
          </motion.form>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-6 rounded-2xl bg-[#0d1520] border border-[#24374e]/50">
              <h3 className="font-semibold text-gray-200 mb-4">Reach me at</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="w-8 h-8 rounded-lg bg-[#24374e]/50 flex items-center justify-center text-[#7ecac8]">@</span>
                 wildanhakim164@gmail.com
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="w-8 h-8 rounded-lg bg-[#24374e]/50 flex items-center justify-center text-[#7ecac8]">📍</span>
                  Bogor, Indonesia
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d1520] border border-[#24374e]/50">
              <h3 className="font-semibold text-gray-200 mb-4">Follow me</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#24374e]/30 border border-[#49605f]/20 text-sm text-gray-400 hover:text-[#7ecac8] hover:border-[#49605f]/50 hover:bg-[#24374e]/50 transition-all duration-300"
                  >
                    <SocialIcon type={s.icon} />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
