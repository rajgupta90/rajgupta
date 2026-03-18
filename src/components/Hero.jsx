import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiChevronDown, FiExternalLink, FiDownload, FiX } from 'react-icons/fi'
import Particles from '@/reactbits/Particles'
import SplitText from '@/reactbits/SplitText'
import RotatingText from '@/reactbits/RotatingText'
import SpotlightCard from '@/reactbits/SpotlightCard'
import Magnet from '@/reactbits/Magnet'

const socials = [
  { icon: FiGithub, href: 'https://github.com/rajgupta04', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rajgupta40/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rajgupta8340@gmail.com', label: 'Email' },
  { icon: FiPhone, href: 'tel:+918083834895', label: 'Phone' },
]

const resumePath = '/pdf/RajResumegenerallatest.pdf'

export default function Hero() {
  const [isPdfOpen, setIsPdfOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <Particles className="z-0 opacity-80" quantity={70} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-surface-dark z-[1]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
          className="mb-8"
        >
          <SpotlightCard className="mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-accent/30 bg-white dark:bg-surface-card overflow-hidden">
            <img
              src="/images/rajimage.png"
              alt="Raj Gupta"
              className="w-full h-full rounded-full object-contain object-center"
            />
          </SpotlightCard>
        </motion.div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4">
          <SplitText text="Raj Gupta" className="text-gradient" delay={0.3} />
        </h1>

        {/* Rotating tagline */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8 h-10">
          <RotatingText
            texts={['Full-Stack Developer', 'Problem Solver', 'Cloud Enthusiast', 'Competitive Programmer']}
            interval={2500}
          />
        </div>

        {/* Social dock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {socials.map((s) => (
            <Magnet key={s.label} strength={0.2}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 dark:bg-surface-card border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-accent hover:border-accent hover:glow transition-all duration-300"
              >
                <s.icon size={20} />
              </a>
            </Magnet>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
          >
            View My Work
            <FiChevronDown className="animate-bounce" />
          </a>

          <button
            onClick={() => setIsPdfOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/90 dark:bg-surface-card text-slate-800 dark:text-slate-100 font-semibold border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-colors"
          >
            View Resume
            <FiExternalLink size={16} />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiChevronDown className="text-slate-400 dark:text-slate-500" size={24} />
      </motion.div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsPdfOpen(false)}
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
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Resume &mdash; Raj Gupta</h3>
                <button
                  onClick={() => setIsPdfOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              {/* PDF Frame */}
              <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-900">
                <iframe
                  src={resumePath}
                  className="w-full h-full border-0 rounded-b-2xl"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
