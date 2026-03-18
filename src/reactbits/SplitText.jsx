import { motion } from 'framer-motion'

export default function SplitText({ text, className = '', delay = 0 }) {
  const letters = text.split('')

  return (
    <span className={className} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            type: 'spring',
            stiffness: 150,
            damping: 15,
          }}
          className="inline-block"
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  )
}
