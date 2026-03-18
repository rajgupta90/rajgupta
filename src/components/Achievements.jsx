import { motion } from 'framer-motion'
import CountUp from '@/reactbits/CountUp'
import ScrollReveal from '@/reactbits/ScrollReveal'
import SectionHeading from './SectionHeading'
import { achievements } from '@/data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Achievements" subtitle="Numbers that tell the story" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <ScrollReveal key={a.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-700/50 text-center group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                {/* Trophy icon */}
                <div className="text-3xl mb-3">{a.icon}</div>

                {/* Count */}
                <div className="text-3xl sm:text-4xl font-black text-accent mb-2">
                  <CountUp target={a.value} suffix={a.suffix} duration={2} />
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {a.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {a.description}
                </div>

                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: '0 0 30px rgba(6,182,212,0.15) inset' }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
