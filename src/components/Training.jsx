import SectionHeading from './SectionHeading'
import Timeline from './Timeline'
import ScrollReveal from '@/reactbits/ScrollReveal'
import { trainings } from '@/data/achievements'

export default function Training() {
  return (
    <section id="training" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Training" subtitle="Continuous learning & skill development" />

        <ScrollReveal>
          <Timeline
            items={trainings}
            renderItem={(training) => (
              <div className="bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-700/50 rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {training.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent/10 text-accent">
                    {training.organization}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 ml-auto">
                    {training.date}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {training.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-accent mt-0.5 shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  {training.stats.map((s) => (
                    <div key={s.label} className="text-center min-w-[80px]">
                      <div className="text-lg font-bold text-accent">{s.value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
