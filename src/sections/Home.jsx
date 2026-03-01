import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { scroller } from 'react-scroll';

export default function Home() {
    const scrollToProjects = () => {
        scroller.scrollTo('projects', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70,
        });
    };

    return (
        <Section id="home" className="min-h-screen flex items-center justify-center pt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Profile Image Column */}
                <motion.div
                    className="order-1 md:order-1 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <img
                            src="src/assets/profile.jpg"
                            alt="Game Viranjali"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10"
                        />
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                        <div className="absolute bottom-10 left-0 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                    </div>
                </motion.div>

                {/* Text Content Column */}
                <motion.div
                    className="order-2 md:order-2 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                        Game Viranjali
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                        Full Stack Web Developer <span className="text-primary">|</span> MERN Stack
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Motivated Computer Science Student and Software Engineer Intern with practical experience in MERN stack 
                        development and AI-assisted coding using Cursor AI. Enjoys building user-friendly web applications, learning new 
                        tools, and growing through real project experience. 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <Button
                            href="src/assets/Viranjali Game Resume.pdf"
                            download="Viranjali Game Resume.pdf"
                            variant="primary"
                            icon={Download}
                        >
                            Resume
                        </Button>
                        <Button
                            onClick={scrollToProjects}
                            variant="outline"
                            icon={ArrowRight}
                        >
                            See My Work
                        </Button>
                    </div>

                    <div className="flex justify-center md:justify-start gap-6">
                        <SocialIcon href="https://www.linkedin.com/in/viranjali1690" icon={Linkedin} />
                        <SocialIcon href="https://github.com/VIRANJALI1690" icon={Github} />
                        <SocialIcon href="mailto:gameviranjali1690@gmail.com" icon={Mail} />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

function SocialIcon({ href, icon: Icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
        >
            <Icon size={24} />
        </a>
    );
}
