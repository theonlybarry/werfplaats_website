import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 font-display font-bold uppercase tracking-wider text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 border border-brand-orange",
    outline: "bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    white: "bg-white text-brand-orange hover:bg-gray-100 border border-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};