import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Timeline({ items, renderItem }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem key={index} index={index}>
            {renderItem(item, index)}
          </TimelineItem>
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ children, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 sm:pl-20"
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
        className="absolute left-2.5 sm:left-6.5 top-2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/30"
      />

      {children}
    </motion.div>
  )
}
