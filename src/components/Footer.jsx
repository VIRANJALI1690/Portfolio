import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold font-heading text-gray-800 dark:text-white mb-4">
                    Game Viranjali Sahadev
                </h2>
                <div className="flex justify-center space-x-6 mb-6">
                    <a
                        href="https://www.linkedin.com/in/viranjali1690"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/VIRANJALI1690"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="mailto:gameviranjali1690@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform"
                    >
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
