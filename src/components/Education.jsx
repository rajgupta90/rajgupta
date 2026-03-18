import SectionHeading from './SectionHeading'
import Timeline from './Timeline'
import { education } from '@/data/education'
import { FiMapPin } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="Academic foundations" />

        <Timeline
          items={education}
          renderItem={(item) => (
            <div className="bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-700/50 rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.institution}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                {item.degree}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="text-accent font-semibold">{item.score}</span>
                <span className="flex items-center gap-1">
                  <FiMapPin size={12} />
                  {item.location}
                </span>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  )
}
