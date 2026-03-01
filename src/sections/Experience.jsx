import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { Code2, Server, Database, Wrench, Briefcase, Award } from 'lucide-react';

export default function Experience() {
    const [activeTab, setActiveTab] = useState('skills');

    const tabs = [
        { id: 'skills', label: 'Technical Skills', icon: Code2 },
        { id: 'internship', label: 'Internship', icon: Briefcase },
        { id: 'certificates', label: 'Certificates', icon: Award },
    ];

    return (
        <Section id="experience" className="bg-gray-50/50 dark:bg-gray-800/20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                    Experience & <span className="text-primary">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12 flex-wrap gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'skills' && <Skills key="skills" />}
                    {activeTab === 'internship' && <Internship key="internship" />}
                    {activeTab === 'certificates' && <Certificates key="certificates" />}
                </AnimatePresence>
            </div>
        </Section>
    );
}

function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: Code2,
            skills: ["React.js", "Vite", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["Node.js", "Express.js", "REST APIs", "Authentication"]
        },
        {
            title: "Database",
            icon: Database,
            skills: ["MongoDB", "Mongoose", "SQL Basics", "MySQL Basics"]
        },
        {
            title: "Tools",
            icon: Wrench,
            skills: ["Git/GitHub", "VS Code", "Postman", "Vercel/Netlify","Cursor AI", "Antigravity"]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <category.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                        {category.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="relative">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                                    <span className="text-xs text-gray-500">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

function Internship() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
        >
            <div className="bg-white dark:bg-gray-900 border-l-4 border-primary p-8 rounded-r-xl shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web Development Intern</h3>
                        <h4 className="text-xl text-primary font-medium">Yugayatra</h4>
                    </div>
                    <span className="mt-2 md:mt-0 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        Dec-2025 - Present
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                   Worked on building and improving websites and applications using Cursor AI and Firebase. 
                   Assisted the team in developing and testing features for live, real-world projects. 
                   Helped design and refine user interfaces and visual elements using Canva. 
                </p>

                <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function Certificates() {
    const certs = [
        {
            name: "Full Stack Web Development",
            issuer: "Udemy",
            date: "Sep-2025",
            desc: "Comprehensive course covering modern web development technologies.",
            tech: "MERN Stack"
        },
        // Add more certificates as needed
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
            {certs.map((cert, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border hover:border-primary transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <Award className="text-yellow-500 group-hover:scale-110 transition-transform" size={32} />
                        <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.desc}</p>
                    <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                        {cert.tech}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}
