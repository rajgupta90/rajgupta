import { motion } from 'framer-motion'
import { FiGithub, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'
import SpotlightCard from '@/reactbits/SpotlightCard'
import ScrollReveal from '@/reactbits/ScrollReveal'
import SectionHeading from './SectionHeading'
import { projects } from '@/data/projects'
import NeonTubesCursor from './NeonTubesCursor'

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  // Format index as 01, 02, etc.
  const displayIndex = (index + 1).toString().padStart(2, '0');

  // We concatenate the bullets to mimic the textual description in the image
  const descriptionText = project.bullets.join('. ') + (project.bullets[project.bullets.length - 1].endsWith('.') ? '' : '.');

  // Extract year and quarter/month for the date circle
  const dateStr = project.date || '2025';
  
  return (
    <ScrollReveal delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        className="h-full w-full relative group mb-4 md:mb-8"
      >
        <SpotlightCard className="h-full w-full bg-slate-50 dark:bg-[#0f0f13] border border-slate-200 dark:border-slate-800 hover:dark:border-slate-700 transition-colors duration-300 relative overflow-hidden rounded-[2rem]">
          {/* The Neon Tubes effect - conditional rendering for performance */} 
          {isHovered && (
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-100 transition-opacity duration-300">
              <NeonTubesCursor />
            </div>
          )}
          
          {/* Content wrapper with z-index to stay above the effect */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-14 p-6 sm:p-10 pointer-events-auto w-full">
            
            {/* Left Column: Info */}
            <div className="flex-1 flex flex-col justify-center lg:py-6">
              
              {/* Top Meta Line: "01 --- TAGS  Q4 2024" */}
              <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 mb-8 uppercase">
                <span>{displayIndex}</span>
                <div className="h-px w-10 bg-slate-300 dark:bg-slate-700 shrink-0"></div>
                <span className="text-accent truncate flex-1">{project.subtitle}</span>
                <div className="ml-auto flex flex-col items-center justify-center w-14 h-14 rounded-full border border-slate-200 dark:border-slate-700 text-[10px] text-center shrink-0 tracking-tight">
                  <span className="font-bold text-slate-700 dark:text-slate-300 mb-0.5">{dateStr.split(' ')[0]}</span>
                  <span className="text-slate-500">{dateStr.split(' ').slice(-1)[0]}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-8 tracking-tight">
                {project.title}
              </h3>

              {/* Description Box */}
              <div className="relative bg-white/70 dark:bg-[#15151a]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 sm:p-8 mb-10 backdrop-blur-md shadow-sm group/desc flex items-center min-h-[140px]">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed pr-12 md:text-base">
                  {descriptionText}
                </p>
                
                {/* Github Button inside desc box */}
                {project.github && project.github !== '#' && (
                  <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-200 dark:bg-[#2a2a35] flex items-center justify-center text-slate-600 dark:text-white transition-transform hover:scale-110 cursor-pointer hover:bg-accent hover:text-white dark:hover:bg-accent">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center rounded-full" aria-label="View Github">
                      <FiGithub size={20} />
                    </a>
                  </div>
                )}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-bold bg-white dark:bg-[#0c0c10] text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:border-accent/50 group/tech">
                    <t.icon size={16} className="group-hover/tech:scale-110 transition-transform" />
                    <span className="uppercase tracking-wider">{t.name}</span>
                  </span>
                ))}
                {project.techExtra?.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-bold bg-white dark:bg-[#0c0c10] text-slate-700 dark:text-slate-300 shadow-sm uppercase tracking-wider transition-colors hover:border-accent/50">
                    {t}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Column: Image Preview */}
            <div className="w-full lg:w-[50%] relative flex flex-col justify-center mt-8 lg:mt-0">
               <div className="aspect-[4/3] lg:aspect-[16/11] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 relative group/img shadow-2xl">
                 <img 
                   src={project.image || "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000"} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
                 />
                 
                 {/* Dark Overlay matching image theme */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-purple-900/10 group-hover/img:opacity-0 transition-opacity duration-700"></div>

                 {/* Gradient Overlay bottom for View Project button */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-10">
                   <a
                    href={project.live !== '#' ? project.live : '#'}
                    target={project.live !== '#' ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-semibold text-lg hover:text-accent transition-colors drop-shadow-md bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                   >
                     View Project <FiArrowRight />
                   </a>
                 </div>
               </div>
               
               {/* Quick links top right on image */}
               
            </div>
            
          </div>
        </SpotlightCard>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 w-full">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading title="Projects" subtitle="Built with passion — click to explore" />

        <div className="flex flex-col gap-12 lg:gap-16 mt-16 w-full">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />     
          ))}
        </div>
      </div>
    </section>
  )
}
