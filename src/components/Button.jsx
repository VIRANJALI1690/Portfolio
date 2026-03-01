import React from 'react';

export default function Button({ children, onClick, href, variant = 'primary', className = '', icon: Icon, ...props }) {
    const baseStyle = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer";

    const variants = {
        primary: "bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-blue-500/30",
        gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-purple-500/30",
        outline: "border-2 border-primary text-primary hover:bg-primary/10 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400/10",
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {Icon && <Icon size={20} />}
            {children}
        </Component>
    );
}
