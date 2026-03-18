import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Walking cat — legs alternate via frame prop
const CatWalk = ({ flip, frame }) => (
  <svg width="64" height="64" viewBox="0 0 32 32" fill="none" style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    {/* Body */}
    <ellipse cx="16" cy="20" rx="8" ry="5" fill="currentColor" />
    {/* Head */}
    <circle cx="22" cy="14" r="5" fill="currentColor" />
    {/* Ears */}
    <polygon points="19,10 20,6 22,10" fill="currentColor" />
    <polygon points="24,10 25,6 27,10" fill="currentColor" />
    {/* Inner ears */}
    <polygon points="19.8,10 20.5,7.5 21.5,10" fill="#f472b6" />
    <polygon points="24.5,10 25.2,7.5 26.2,10" fill="#f472b6" />
    {/* Eyes */}
    <circle cx="21" cy="13" r="1.2" fill="#a78bfa" />
    <circle cx="24.5" cy="13" r="1.2" fill="#a78bfa" />
    <circle cx="21.3" cy="12.8" r="0.4" fill="white" />
    <circle cx="24.8" cy="12.8" r="0.4" fill="white" />
    {/* Nose */}
    <ellipse cx="23" cy="15" rx="0.6" ry="0.4" fill="#f472b6" />
    {/* Tail — swishing */}
    <path
      d={frame === 0 ? "M8 18 Q4 12 6 8" : "M8 18 Q4 14 5 10"}
      stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
    />
    {/* Front legs — alternating */}
    <line x1="18" y1="24" x2={frame === 0 ? "16" : "19"} y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="24" x2={frame === 0 ? "23" : "20"} y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Back legs — alternating opposite */}
    <line x1="11" y1="23" x2={frame === 0 ? "12" : "9"} y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="24" x2={frame === 0 ? "13" : "15"} y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Paws */}
    <circle cx={frame === 0 ? 16 : 19} cy="29.5" r="1" fill="currentColor" opacity="0.7" />
    <circle cx={frame === 0 ? 23 : 20} cy="29.5" r="1" fill="currentColor" opacity="0.7" />
    <circle cx={frame === 0 ? 12 : 9} cy="29.5" r="1" fill="currentColor" opacity="0.7" />
    <circle cx={frame === 0 ? 13 : 15} cy="29.5" r="1" fill="currentColor" opacity="0.7" />
  </svg>
)

const CatSit = () => (
  <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
    {/* Body */}
    <ellipse cx="16" cy="21" rx="7" ry="6" fill="currentColor" />
    {/* Head */}
    <circle cx="16" cy="12" r="6" fill="currentColor" />
    {/* Ears */}
    <polygon points="11,8 12,3 14,8" fill="currentColor" />
    <polygon points="18,8 20,3 21,8" fill="currentColor" />
    <polygon points="11.8,8 12.5,4.5 13.5,8" fill="#f472b6" />
    <polygon points="18.5,8 19.8,4.5 20.5,8" fill="#f472b6" />
    {/* Eyes */}
    <ellipse cx="14" cy="11.5" rx="1.3" ry="1.3" fill="#a78bfa" />
    <ellipse cx="19" cy="11.5" rx="1.3" ry="1.3" fill="#a78bfa" />
    <circle cx="14.3" cy="11.2" r="0.5" fill="white" />
    <circle cx="19.3" cy="11.2" r="0.5" fill="white" />
    {/* Nose */}
    <ellipse cx="16.5" cy="13.5" rx="0.7" ry="0.5" fill="#f472b6" />
    {/* Whiskers */}
    <line x1="12" y1="13" x2="7" y2="12" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="12" y1="14" x2="7" y2="14.5" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="21" y1="13" x2="26" y2="12" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="21" y1="14" x2="26" y2="14.5" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    {/* Tail wrap */}
    <path d="M22 24 Q27 22 26 18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Front paws */}
    <ellipse cx="13" cy="27" rx="2" ry="1.2" fill="currentColor" opacity="0.7" />
    <ellipse cx="19" cy="27" rx="2" ry="1.2" fill="currentColor" opacity="0.7" />
  </svg>
)

const CatSleep = () => (
  <svg width="80" height="64" viewBox="0 0 40 32" fill="none">
    {/* Curled body */}
    <ellipse cx="16" cy="20" rx="10" ry="7" fill="currentColor" />
    {/* Head tucked */}
    <circle cx="20" cy="16" r="5" fill="currentColor" />
    {/* Ears */}
    <polygon points="17,12 18,8 19.5,12" fill="currentColor" />
    <polygon points="22,11 23.5,7 24.5,11.5" fill="currentColor" />
    <polygon points="17.5,12 18.3,9 19,12" fill="#f472b6" />
    <polygon points="22.3,11.3 23.3,8 24,11.5" fill="#f472b6" />
    {/* Closed eyes — curved lines */}
    <path d="M18 15.5 Q19 14.5 20 15.5" stroke="#a78bfa" strokeWidth="0.8" fill="none" />
    <path d="M21.5 15 Q22.5 14 23.5 15" stroke="#a78bfa" strokeWidth="0.8" fill="none" />
    {/* Nose */}
    <ellipse cx="21.5" cy="16.5" rx="0.5" ry="0.4" fill="#f472b6" />
    {/* Tail curled over */}
    <path d="M7 18 Q5 14 8 13 Q11 12 10 16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Floating Zzz */}
    <g className="zzz-float">
      <text x="27" y="12" fontSize="7" fill="#a78bfa" fontWeight="bold" opacity="0.8">z</text>
      <text x="31" y="7" fontSize="5.5" fill="#a78bfa" fontWeight="bold" opacity="0.55">z</text>
      <text x="34" y="3" fontSize="4" fill="#a78bfa" fontWeight="bold" opacity="0.3">z</text>
    </g>
  </svg>
)

const CatEat = () => (
  <svg width="80" height="64" viewBox="0 0 40 32" fill="none">
    {/* Body */}
    <ellipse cx="16" cy="21" rx="8" ry="6" fill="currentColor" />
    {/* Head moving down */}
    <motion.circle
      cx="24" cy="22" r="5" fill="currentColor"
      animate={{ cy: [20, 22, 20] }}
      transition={{ repeat: Infinity, duration: 0.4 }}
    />
    {/* Ears */}
    <motion.polygon
      points="21,18 22,14 24,18" fill="currentColor"
      animate={{ points: ["21,18 22,14 24,18", "21,20 22,16 24,20", "21,18 22,14 24,18"] }}
      transition={{ repeat: Infinity, duration: 0.4 }}
    />
    <motion.polygon
      points="25,17 27,13 28,17" fill="currentColor"
      animate={{ points: ["25,17 27,13 28,17", "25,19 27,15 28,19", "25,17 27,13 28,17"] }}
      transition={{ repeat: Infinity, duration: 0.4 }}
    />
    {/* Tail wagging happy */}
    <motion.path
      d="M8 24 Q4 18 6 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"
      animate={{ d: ["M8 24 Q4 18 6 12", "M8 24 Q2 16 7 14", "M8 24 Q4 18 6 12"] }}
      transition={{ repeat: Infinity, duration: 0.3 }}
    />
    {/* Fish being eaten */}
    <path d="M28 25 Q30 23 32 25 L34 23 L34 27 Z" fill="#60a5fa" />
    <circle cx="29" cy="24.5" r="0.5" fill="#f8fafc" />
  </svg>
)

const CatHungry = () => (
  <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
    {/* Body */}
    <ellipse cx="16" cy="21" rx="7" ry="6" fill="currentColor" />
    {/* Head */}
    <circle cx="16" cy="12" r="6" fill="currentColor" />
    {/* Ears */}
    <polygon points="11,8 12,3 14,8" fill="currentColor" />
    <polygon points="18,8 20,3 21,8" fill="currentColor" />
    <polygon points="11.8,8 12.5,4.5 13.5,8" fill="#f472b6" />
    <polygon points="18.5,8 19.8,4.5 20.5,8" fill="#f472b6" />
    {/* Eyes (big & pleading) */}
    <ellipse cx="14" cy="11.5" rx="1.6" ry="1.8" fill="#a78bfa" />
    <ellipse cx="19" cy="11.5" rx="1.6" ry="1.8" fill="#a78bfa" />
    <circle cx="14.3" cy="11" r="0.6" fill="white" />
    <circle cx="19.3" cy="11" r="0.6" fill="white" />
    {/* Nose */}
    <ellipse cx="16.5" cy="13.5" rx="0.7" ry="0.5" fill="#f472b6" />
    {/* Open meowing mouth */}
    <motion.ellipse 
      cx="16.5" cy="15" rx="0.8" fill="#f472b6"
      animate={{ ry: [0.5, 1.5, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    />
    {/* Whiskers */}
    <line x1="12" y1="13" x2="7" y2="12" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="12" y1="14" x2="7" y2="14.5" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="21" y1="13" x2="26" y2="12" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="21" y1="14" x2="26" y2="14.5" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    {/* Tail wagging excitedly */}
    <motion.path 
      d="M22 24 Q27 22 26 18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" 
      animate={{ d: ["M22 24 Q27 22 26 18", "M22 24 Q28 24 27 16", "M22 24 Q27 22 26 18"] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    />
    {/* Front paws (sitting normally) */}
    <ellipse cx="13" cy="27" rx="2" ry="1.2" fill="currentColor" opacity="0.7" />
    <ellipse cx="19" cy="27" rx="2" ry="1.2" fill="currentColor" opacity="0.7" />
  </svg>
)

export default function CatCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isMoving, setIsMoving] = useState(false)
  const [flip, setFlip] = useState(false)
  const [idle, setIdle] = useState(0) // 0=active, 1=sitting, 2=sleeping, 3=eating
  const [walkFrame, setWalkFrame] = useState(0)
  const [catScale, setCatScale] = useState(0.7)
  const [isHungry, setIsHungry] = useState(false)
  const [isEating, setIsEating] = useState(false)
  const lastX = useRef(0)
  const moveTimeout = useRef(null)
  const idleTimeout = useRef(null)
  const frameInterval = useRef(null)
  const [visible, setVisible] = useState(false)

  // Animate walk frames when moving
  useEffect(() => {
    if (isMoving) {
      frameInterval.current = setInterval(() => {
        setWalkFrame((f) => (f === 0 ? 1 : 0))
      }, 120)
    } else {
      clearInterval(frameInterval.current)
      setWalkFrame(0)
    }
    return () => clearInterval(frameInterval.current)
  }, [isMoving])

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY })
    setVisible(true)
    setIsMoving(true)
    setIdle(0)

    if (e.clientX < lastX.current - 2) setFlip(true)
    else if (e.clientX > lastX.current + 2) setFlip(false)
    lastX.current = e.clientX

    clearTimeout(moveTimeout.current)
    clearTimeout(idleTimeout.current)

    moveTimeout.current = setTimeout(() => setIsMoving(false), 150)
    idleTimeout.current = setTimeout(() => setIdle(1), 3000)
  }, [])

  const handleExternalMove = useCallback((e) => {
    const { x, y } = e.detail || {}
    if (typeof x !== 'number' || typeof y !== 'number') return

    setPos({ x, y })
    setVisible(true)
    setIsMoving(true)
    setIdle(0)

    if (x < lastX.current - 2) setFlip(true)
    else if (x > lastX.current + 2) setFlip(false)
    lastX.current = x

    clearTimeout(moveTimeout.current)
    clearTimeout(idleTimeout.current)

    moveTimeout.current = setTimeout(() => setIsMoving(false), 180)
    idleTimeout.current = setTimeout(() => setIdle(1), 3000)
  }, [])

  useEffect(() => {
    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('catcursor:move', handleExternalMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('catcursor:move', handleExternalMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      clearTimeout(moveTimeout.current)
      clearTimeout(idleTimeout.current)
    }
  }, [handleExternalMove, handleMouseMove])

  // Sitting → sleeping after 6 more seconds
  useEffect(() => {
    if (idle === 1) {
      const t = setTimeout(() => setIdle(2), 6000)
      return () => clearTimeout(t)
    }
  }, [idle])

  // Get hungry after 20 seconds
  useEffect(() => {
    if (!isHungry) {
      const timer = setTimeout(() => setIsHungry(true), 20000)
      return () => clearTimeout(timer)
    }
  }, [isHungry])

  // Feed the cat when sleeping
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only allow feeding if hungry
      if ((e.key === 'e' || e.key === 'E') && idle >= 2 && !isMoving && !isEating && isHungry) {
        setIsEating(true)
        setIdle(3)
        
        setTimeout(() => {
          setIsEating(false)
          setIsHungry(false) // reset hunger!
          setIdle(2) // go back to sleeping
        }, 2500)
        
        setCatScale((prevScale) => Math.min(prevScale + 0.14, 2.1)) // Adds 20% of 0.7 each time, up to 200%
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [idle, isMoving, isEating, isHungry])

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        *, *::before, *::after { cursor: none !important; }
        .cat-walk { animation: catBounce 0.3s ease-in-out infinite alternate; }
        .cat-sit { animation: catBreath 2s ease-in-out infinite; }
        .cat-sleep { animation: catBreath 3s ease-in-out infinite; }
        @keyframes catBounce {
          from { transform: translateY(0px); }
          to { transform: translateY(-3px); }
        }
        @keyframes catBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes zzzFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0.8; }
          100% { transform: translateY(-12px) translateX(4px); opacity: 0; }
        }
        .zzz-float { animation: zzzFloat 2.5s ease-out infinite; }
      `}</style>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed pointer-events-none z-[9999] text-slate-800 dark:text-slate-300"
            animate={{
              x: pos.x - 32,
              y: pos.y - 56,
            }}
            transition={
              isMoving
                ? { type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }
                : { type: 'spring', stiffness: 120, damping: 15 }
            }
            initial={false}
          >
            <motion.div
              className="relative"
              animate={{ scale: catScale }}
              style={{ transformOrigin: 'bottom center' }}
            >
              <AnimatePresence>
                {idle >= 2 && !isMoving && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-surface-card text-slate-800 dark:text-slate-100 text-[15px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 z-10"
                  >
                    {isEating ? 'Yum! 🐟' : isHungry ? "aah I'm Hungry (Press E to feed)" : "zZz..."}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-surface-card border-b border-r border-slate-200 dark:border-slate-700 transform rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={isMoving ? 'cat-walk' : isEating ? '' : isHungry ? 'cat-sit' : idle >= 2 ? 'cat-sleep' : 'cat-sit'}>
                {isMoving ? (
                  <CatWalk flip={flip} frame={walkFrame} />
                ) : isEating ? (
                  <CatEat />
                ) : isHungry ? (
                  <CatHungry />
                ) : idle >= 2 ? (
                  <CatSleep />
                ) : (
                  <CatSit />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
