import ScrollFloat from '@/reactbits/ScrollFloat'
import GradientText from '@/reactbits/GradientText'

export default function SectionHeading({ title, subtitle, id }) {
  return (
    <ScrollFloat className="mb-12 text-center">
      <h2 id={id} className="text-3xl sm:text-4xl font-bold mb-3">
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 text-lg">{subtitle}</p>
      )}
    </ScrollFloat>
  )
}
