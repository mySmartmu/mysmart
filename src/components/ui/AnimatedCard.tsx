// src/components/ui/AnimatedCard.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

// Define the content section interface
interface ContentSection {
  subtitle?: string; // Make subtitle optional
  description: string;
}

interface AnimatedCardProps {
  title: string;
  // Make contentSections optional for backward compatibility
  contentSections?: ContentSection[];
  // Keep the old props for backward compatibility
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'border' | 'none';
}

export default function AnimatedCard({
  title,
  contentSections,
  subtitle,
  description,
  icon,
  className = '',
  imageUrl,
  imageAlt,
  hoverEffect = 'lift'
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Convert legacy props to contentSections format if needed
  const sections = contentSections || (description ? 
    [{ subtitle, description }] : 
    []);

  // Define different hover animations
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'lift':
        return { 
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        };
      case 'scale':
        return { scale: 1.03 };
      case 'glow':
        return { 
          boxShadow: '0 0 15px 5px rgba(69, 182, 229, 0.15), 0 0 5px 2px rgba(69, 182, 229, 0.1)'
        };
      case 'border':
        return { 
          boxShadow: 'inset 0 0 0 2px rgba(69, 182, 229, 0.5)'
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={getHoverAnimation()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {imageUrl && (
        <div className={`relative h-48 overflow-hidden transition-all duration-700`}>
          <OptimizedImage
            src={imageUrl}
            alt={imageAlt || title}
            fill={true}
            className="w-full"
            transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
          />
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col">
        {icon && (
          <motion.div 
            className="mb-4 text-cyan-500"
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.h3 
          className="text-xl font-bold text-slate-800 mb-4"
          animate={isHovered ? { color: '#0891b2' } : { color: '#1e293b' }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        {/* Render multiple content sections */}
        {sections.map((section, index) => (
          <div key={index} className={index > 0 ? "mt-6" : ""}>
            {section.subtitle && (
              <h4 className="font-bold text-gray-800 mb-2">{section.subtitle}</h4>
            )}
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}