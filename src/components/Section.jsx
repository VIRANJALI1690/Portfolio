import { motion } from 'framer-motion';

export default function Section({ id, children, className = "" }) {
    return (
        <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
