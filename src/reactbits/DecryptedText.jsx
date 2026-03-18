import { useState, useEffect, useRef } from 'react'

export default function DecryptedText({ text, className = '', speed = 50, trigger = false }) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'
  const [displayed, setDisplayed] = useState('')
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!trigger) {
      setDisplayed('')
      return
    }

    let iteration = 0
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (i < iteration) return text[i]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      iteration += 1 / 3
      if (iteration >= text.length) {
        clearInterval(intervalRef.current)
        setDisplayed(text)
      }
    }, speed)

    return () => clearInterval(intervalRef.current)
  }, [trigger, text, speed])

  return <span className={`font-mono ${className}`}>{displayed || '\u00A0'}</span>
}
