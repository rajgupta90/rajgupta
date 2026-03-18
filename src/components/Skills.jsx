import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TiltCard from '@/reactbits/TiltCard'
import DecryptedText from '@/reactbits/DecryptedText'
import ScrollFloat from '@/reactbits/ScrollFloat'
import SectionHeading from './SectionHeading'
import { skills, skillCategories } from '@/data/skills'

function SkillIcon({ skill, index, forceHovered = false }) {
  const [hovered, setHovered] = useState(false)
  const isHovered = hovered || forceHovered

  return (
    <TiltCard tiltAmount={12}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.03, type: 'spring', stiffness: 200 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`group relative flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-700/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-pointer ${
          isHovered ? 'border-accent/50 shadow-lg shadow-accent/10' : ''
        }`}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <skill.icon size={32} style={{ color: skill.color }} />
        </motion.div>

        <div className="h-5 text-xs font-medium text-center">
          <DecryptedText text={skill.name} trigger={isHovered} speed={30} className="text-slate-600 dark:text-slate-300" />
        </div>

        {/* Proficiency bar */}
        <motion.div
          className="w-full h-1 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden"
          initial={false}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </TiltCard>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages')
  const [autoHoverIndex, setAutoHoverIndex] = useState(-1)
  const sectionRef = useRef(null)
  const skillRefs = useRef([])
  const timeoutsRef = useRef([])
  const enteredRef = useRef(false)
  const runIdRef = useRef(0)

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  useEffect(() => {
    skillRefs.current = []
  }, [activeCategory])

  const clearWalkTimers = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id))
    timeoutsRef.current = []
  }

  const moveCatToElement = (el) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    window.dispatchEvent(new CustomEvent('catcursor:move', { detail: { x, y } }))
  }

  const areCurrentCardsReady = () => {
    if (filtered.length === 0) return false

    const cards = skillRefs.current.slice(0, filtered.length)
    if (cards.length < filtered.length) return false

    return cards.every((el) => {
      if (!el) return false
      const rect = el.getBoundingClientRect()
      return rect.width > 0 && rect.height > 0
    })
  }

  const runWalkForCurrentFilter = (wakeDelay = 240) => {
    runIdRef.current += 1
    const runId = runIdRef.current

    clearWalkTimers()
    setAutoHoverIndex(-1)

    const kickoff = setTimeout(() => {
      if (runId !== runIdRef.current) return

      const startSequenceWhenReady = (attempt = 0) => {
        if (runId !== runIdRef.current) return

        if (!areCurrentCardsReady()) {
          if (attempt >= 30) return
          const retry = setTimeout(() => startSequenceWhenReady(attempt + 1), 80)
          timeoutsRef.current.push(retry)
          return
        }

        const settleDelay = 460
        const start = setTimeout(() => {
          if (runId !== runIdRef.current) return

          const firstCard = skillRefs.current[0]
          moveCatToElement(firstCard)

          let elapsed = 0
          filtered.forEach((_, i) => {
            const stepDelay = i === 0 ? 520 : 380
            if (i > 0) elapsed += 380

            const id = setTimeout(() => {
              if (runId !== runIdRef.current) return
              setAutoHoverIndex(i)
              moveCatToElement(skillRefs.current[i])
            }, i === 0 ? 0 : elapsed)
            timeoutsRef.current.push(id)
          })

          const totalWalkTime = 520 + Math.max(0, filtered.length - 1) * 380
          const end = setTimeout(() => {
            if (runId !== runIdRef.current) return
            setAutoHoverIndex(-1)
          }, totalWalkTime + 240)
          timeoutsRef.current.push(end)
        }, settleDelay)

        timeoutsRef.current.push(start)
      }

      startSequenceWhenReady()
    }, wakeDelay)

    timeoutsRef.current.push(kickoff)
  }

  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !enteredRef.current) {
            enteredRef.current = true
            runWalkForCurrentFilter(1200)
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(sectionEl)

    return () => {
      observer.disconnect()
      clearWalkTimers()
    }
  }, [])

  useEffect(() => {
    if (!enteredRef.current) return
    runWalkForCurrentFilter(260)

    return () => {
      clearWalkTimers()
    }
  }, [activeCategory, filtered.length])

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Tech Arsenal"  />

        {/* Category tabs */}
        <ScrollFloat delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white shadow-md shadow-accent/25'
                    : 'bg-white dark:bg-surface-card text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-accent/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollFloat>

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                ref={(el) => {
                  skillRefs.current[i] = el
                }}
              >
                <SkillIcon skill={skill} index={i} forceHovered={autoHoverIndex === i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
