export default function GradientText({ children, className = '' }) {
  return (
    <span
      className={`bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
