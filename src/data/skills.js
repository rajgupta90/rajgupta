import {
  SiC, SiCplusplus, SiJavascript, SiPhp, SiPython, SiMysql, SiHtml5, SiTypescript, SiGnubash,
  SiMongodb, SiPostgresql,
  SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiSpring,
  SiDocker, SiJenkins, SiGit, SiGithub, SiPostman, SiIntellijidea, SiEclipseide,
  SiGooglecloud,
} from 'react-icons/si'
import { FaJava, FaCss3Alt, FaAws, FaDatabase, FaBrain, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa'
import { TbVector, TbBrandVscode } from 'react-icons/tb'

export const skillCategories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'databases', label: 'Databases' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'tools', label: 'Tools' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'soft', label: 'Soft Skills' },
]

export const skills = [
  // Languages
  { name: 'Java', icon: FaJava, category: 'languages', color: '#f89820', related: ['spring', 'intellij', 'eclipse'] },
  { name: 'C', icon: SiC, category: 'languages', color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, category: 'languages', color: '#00599C' },
  { name: 'JavaScript', icon: SiJavascript, category: 'languages', color: '#F7DF1E', related: ['react', 'nodejs', 'express', 'tailwind'] },
  { name: 'PHP', icon: SiPhp, category: 'languages', color: '#777BB4' },
  { name: 'Python', icon: SiPython, category: 'languages', color: '#3776AB', related: ['docker'] },
  { name: 'SQL', icon: FaDatabase, category: 'languages', color: '#e48e00' },
  { name: 'HTML', icon: SiHtml5, category: 'languages', color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, category: 'languages', color: '#1572B6' },
  { name: 'Shell', icon: SiGnubash, category: 'languages', color: '#4EAA25' },
  { name: 'TypeScript', icon: SiTypescript, category: 'languages', color: '#3178C6', related: ['react', 'nodejs'] },

  // Databases
  { name: 'MySQL', icon: SiMysql, category: 'databases', color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'databases', color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, category: 'databases', color: '#47A248', related: ['nodejs', 'express'] },

  // Frameworks
  { name: 'React', icon: SiReact, category: 'frameworks', color: '#61DAFB', related: ['javascript', 'tailwind', 'nodejs'] },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frameworks', color: '#06B6D4', related: ['react', 'css'] },
  { name: 'Node.js', icon: SiNodedotjs, category: 'frameworks', color: '#339933', related: ['javascript', 'express', 'mongodb'] },
  { name: 'Express', icon: SiExpress, category: 'frameworks', color: '#ffffff', related: ['nodejs', 'mongodb'] },
  { name: 'Spring MVC', icon: SiSpring, category: 'frameworks', color: '#6DB33F', related: ['java'] },

  // Tools
  { name: 'Docker', icon: SiDocker, category: 'tools', color: '#2496ED' },
  { name: 'Jenkins', icon: SiJenkins, category: 'tools', color: '#D24939' },
  { name: 'Git', icon: SiGit, category: 'tools', color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, category: 'tools', color: '#ffffff' },
  { name: 'Pinecone', icon: TbVector, category: 'tools', color: '#00b4a0' },
  { name: 'Postman', icon: SiPostman, category: 'tools', color: '#FF6C37' },
  { name: 'VS Code', icon: TbBrandVscode, category: 'tools', color: '#007ACC' },
  { name: 'IntelliJ', icon: SiIntellijidea, category: 'tools', color: '#000000' },
  { name: 'Eclipse', icon: SiEclipseide, category: 'tools', color: '#2C2255' },

  // Cloud
  { name: 'AWS', icon: FaAws, category: 'cloud', color: '#FF9900' },
  { name: 'Google Cloud', icon: SiGooglecloud, category: 'cloud', color: '#4285F4' },

  // Soft Skills
  { name: 'Data-Driven', icon: FaChartLine, category: 'soft', color: '#06b6d4' },
  { name: 'Continuous Learning', icon: FaLightbulb, category: 'soft', color: '#fbbf24' },
  { name: 'Prioritization', icon: FaBrain, category: 'soft', color: '#a78bfa' },
  { name: 'Client Relations', icon: FaUsers, category: 'soft', color: '#34d399' },
]
