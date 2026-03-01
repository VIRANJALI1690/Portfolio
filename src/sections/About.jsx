import { motion } from 'framer-motion';
import Section from '../components/Section';
import { User, Code, Target } from 'lucide-react';

export default function About() {
    return (
        <Section id="about" className="bg-white dark:bg-gray-800/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AboutCard
                    icon={User}
                    title="Who I Am"
                    description="I am a dedicated Full Stack Developer with a passion for creating beautiful and functional 
                    digital experiences. My journey in tech is driven by curiosity and a desire to build things that matter."
                />
                <AboutCard
                    icon={Code}
                    title="My Approach"
                    description="I believe in writing clean, maintainable code and keeping up with the latest industry trends. 
                    I enjoy solving complex problems and turning ideas into reality through technology."
                />
                <AboutCard
                    icon={Target}
                    title="Career Goals"
                    description="I aspire to work on challenging projects that push my boundaries.
                     My goal is to become a lead developer and contribute to open-source communities while mentoring aspiring developers."
                />
            </div>
        </Section>
    );
}

function AboutCard({ icon: Icon, title, description }) {
    return (
        <motion.div
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
