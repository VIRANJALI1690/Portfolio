import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace with your actual EmailJS Service ID, Template ID, and Public Key
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')

        // Simulating API call for demo purposes
        setTimeout(() => {
            setLoading(false);
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => setStatus(null), 5000);
        }, 2000);

        /* Uncomment below when keys are available
        emailjs.sendForm('service_id', 'template_id', formRef.current, 'public_key')
          .then((result) => {
              setLoading(false);
              setStatus('success');
              formRef.current.reset();
              setTimeout(() => setStatus(null), 5000);
          }, (error) => {
              setLoading(false);
              setStatus('error');
          });
        */
    };

    return (
        <Section id="contact" className="bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <ContactItem icon={Mail} title="Email" content="gameviranjali1690@gmail.com" href="mailto:gameviranjali1690@gmail.com" />
                            <ContactItem icon={Phone} title="Phone" content="+91 9356644694" href="#" />
                            <ContactItem icon={MapPin} title="Location" content="Akluj, India" href="#" />
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                className="w-full justify-center"
                                disabled={loading}
                                icon={loading ? null : Send}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2 text-sm"
                                >
                                    <CheckCircle size={18} /> Message sent successfully!
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2 text-sm"
                                >
                                    <AlertCircle size={18} /> Failed to send message. Please try again.
                                </motion.div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}

function ContactItem({ icon: Icon, title, content, href }) {
    return (
        <a href={href} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{content}</p>
            </div>
        </a>
    );
}
