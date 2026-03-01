import { motion } from 'framer-motion';
import Section from '../components/Section';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
    {
        id: 1,
        degree: "Bachelor of Computer Science (BCS) - 3rd Year",
        institution: "Punyashlok Ahilyadevi Holkar University, Solapur",
        year: "2025 - Present",
        score: "Appearing",
        description: "Specializing in Web Technologies and Software Engineering."
    },
    {
        id: 2,
        degree: "Bachelor of Computer Science (BCS) - 2nd Year",
        institution:  "Punyashlok Ahilyadevi Holkar University, Solapur",
        year: "2024 - 2025",
        score: "9.67 SGPA",
        description: "Core subjects: Data Structures, Algorithms, Database Management, PHP, Java."
    },
    {
        id: 3,
        degree: "Bachelor of Computer Science (BCS) - 1st Year",
        institution:  "Punyashlok Ahilyadevi Holkar University, Solapur",
        year: "2023 - 2024",
        score: "10 SGPA",
        description: "Foundation in Programming (C/C++), Mathematics, Electroninc, Python, Computer Knowledge."
    },
    {
        id: 4,
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Sadashivrao Mane Vidyalay, Akluj",
        year: "2023",
        score: "74.17%",
        description: "PCB(Physics, Chemistry, Biology) with Crop Science"
    },
    {
        id: 5,
        degree: "Secondary School Certificate (SSC)",
        institution: "Shrinath Vidyalay Borgaon",
        year: "2021",
        score: "97.80%",
        description: "Completed secondary education with distinction."
    }
];

export default function Education() {
    return (
        <Section id="education">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                    My <span className="text-primary">Education</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>

                {educationData.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                ))}
            </div>
        </Section>
    );
}

function TimelineItem({ item, index }) {
    const isLeft = index % 2 === 0;

    return (
        <div className={`relative mb-12 md:mb-0 flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center w-full`}>
            <div className="hidden md:block w-1/2"></div>

            {/* Dot */}
            <div className="absolute left-0.5 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

            {/* Content */}
            <motion.div
                className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2 md:inline-flex">
                        <GraduationCap className="inline md:hidden text-primary" size={20} />
                        {item.degree}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">{item.institution}</p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3 justify-start md:justify-inherit">
                        <Calendar size={16} />
                        <span>{item.year}</span>
                        <span className="mx-2">|</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{item.score}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
