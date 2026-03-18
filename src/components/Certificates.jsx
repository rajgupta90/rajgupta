import TiltCard from '@/reactbits/TiltCard'
import ScrollReveal from '@/reactbits/ScrollReveal'
import { FiExternalLink, FiX } from 'react-icons/fi'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { certificates } from '@/data/certificates'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Certificates" subtitle="Verified credentials & learning" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.1}>
              <TiltCard tiltAmount={10}>
                <div className="group p-6 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-700/50 hover:border-accent/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{cert.date}</p>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white transition-colors"
                  >
                    <FiExternalLink size={14} />
                    View More
                  </button>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-surface-card rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">{selectedCert.name} &mdash; {selectedCert.issuer}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* PDF Frame */}
              <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-900">
                <iframe
                  src={selectedCert.pdf}
                  className="w-full h-full border-0 rounded-b-2xl"
                  title={`Certificate PDF - ${selectedCert.name}`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
