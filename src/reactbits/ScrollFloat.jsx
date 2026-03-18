import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollFloat({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
