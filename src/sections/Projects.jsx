import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Github, ExternalLink, X } from 'lucide-react';
import Section from '../components/Section';

const projects = [
    {
        id: 1,
        title: "Weather App",
        category: "static",
        image: "/images/weather.png",
        description: "This is a simple weather website that shows the current temperature and weather condition for any city you enter. It works fully on the browser and does not need any backend.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/VIRANJALI1690/Weather-App",
        live: "https://viranjali1690.github.io/Weather-App/",
        video: "/images/weather.mp4" 
    },
    {
        id: 2,
        title: "Chefcabin",
        category: "dynamic",
        image: "/images/Chefcabin.png",
        description: "Developed a recipe platform that allows users to upload and manage dishes, mark favourites, view cooking details, and explore recipes created by others. Focused on a simple, user-friendly experience with smooth navigation, secure authentication, and real-time updates. ",
        tech: ["MongoDB", "Express.JS", "Node.JS","React.JS"],
        github: "https://example.com",
        live: "https://example.com",
        video: "/images/Chefcabin.mp4"
    },
    {
        id: 3,
        title: "Portfolio",
        category: "dynamic",
        image: "/images/portfolio.png",
        description: "My Personal Portfolio which show-case my coding skills, experiance, education, and my projects.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/VIRANJALI1690/Portfolio",
        live: "https://viranjali-portfolio.vercel.app/",
        video: "/images/portfolio.mp4"
    },
    {
        id: 4,
        title: "Siit Coderelic",
        category: "dynamic",
        image: "/images/coderelic.png",
        description: "Coderelic is the container which stores all the final year porjects of SIIT college students.",
        tech: ["MongoDB", "Express.JS", "React.JS","Node.JS"],
        github: "https://github.com/VIRANJALI1690/Siit-Coderelic",
        live: "https://example.com",
        video: "/images/coderelic.mp4"
    },
     {
        id: 5,
        title: "Drum Kit",
        category: "static",
        image: "/images/Drum Kit.png",
        description: "Here, i have added some keys to press or you can simply click on specific key for enjoying different drum sounds.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/VIRANJALI1690/Drum-Kit-Game",
        live: "https://viranjali1690.github.io/Drum-Kit-Game/",
        video: ""
    }
   
];

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <Section id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                    My <span className="text-primary">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>

                <div className="flex justify-center gap-4">
                    {['all', 'static', 'dynamic'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${filter === cat
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat === 'all' ? 'All Projects' : cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onPlay={() => setSelectedVideo(project.video || null)}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <div className="bg-black rounded-xl overflow-hidden max-w-4xl w-full relative aspect-video" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 text-white hover:text-primary z-10 bg-black/50 rounded-full p-2"
                            >
                                <X size={24} />
                            </button>
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}

function ProjectCard({ project, onPlay }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={onPlay}
                        className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                        <Play size={32} fill="currentColor" />
                    </button>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-primary rounded">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github size={18} /> Code
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                        <ExternalLink size={18} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
