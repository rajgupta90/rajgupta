import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi'
import GradientText from '@/reactbits/GradientText'
import Magnet from '@/reactbits/Magnet'
import ScrollReveal from '@/reactbits/ScrollReveal'

const links = [
  { icon: FiGithub, href: 'https://github.com/rajgupta04', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rajgupta40/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rajgupta8340@gmail.com', label: 'rajgupta8340@gmail.com' },
  { icon: FiPhone, href: 'tel:+918083834895', label: '+91 8083834895' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>Let's Connect</GradientText>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {links.map((l) => (
              <Magnet key={l.label} strength={0.15}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-700/50 hover:border-accent/50 text-slate-700 dark:text-slate-300 hover:text-accent transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <l.icon size={18} />
                  </div>
                  <span className="text-sm font-medium">{l.label}</span>
                </a>
              </Magnet>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1">
            Built with <FiHeart className="text-red-500" size={14} /> by Raj Gupta &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
