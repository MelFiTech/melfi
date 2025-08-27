'use client';

import { motion } from 'framer-motion';
import { Card, CardTitle, CardDescription, CardSkeletonContainer } from '@/components/ui/cards-demo-3';
import { 
  FiPhone, 
  FiZap, 
  FiCheckCircle 
} from 'react-icons/fi';

const workSteps = [
  {
    title: "Book a Call",
    description: "Research-driven design for business growth.",
    icon: <FiPhone className="w-8 h-8 text-white" />,
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Quick Updates",
    description: "Research-driven design for business growth.",
    icon: <FiZap className="w-8 h-8 text-white" />,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Approval & Review",
    description: "Research-driven design for business growth.",
    icon: <FiCheckCircle className="w-8 h-8 text-white" />,
    gradient: "from-orange-500 to-red-600"
  }
];

const WorkStepCard = ({ 
  title, 
  description, 
  icon, 
  gradient, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  gradient: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
        <CardSkeletonContainer className="h-64 mb-4" showGradient={false}>
          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center relative overflow-hidden border border-white/10">
            {/* Dark background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-8 right-6 w-0.5 h-0.5 bg-white rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Content area - placeholder for now */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="text-gray-500 text-sm">Content Area</div>
            </div>
          </div>
        </CardSkeletonContainer>
        
        <div className="flex items-start space-x-3 mb-3">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <CardTitle className="text-white text-xl font-semibold">
            {title}
          </CardTitle>
        </div>
        
        <CardDescription className="text-gray-400 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </Card>
    </motion.div>
  );
};

export default function HowWeWork() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6"
          >
            <span className="text-blue-400 text-sm font-medium">How We Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How we Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A global design & development studio helping startups and brands
            create stunning, user-focused websites and apps.
          </motion.p>
        </div>

        {/* Work Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <WorkStepCard
              key={step.title}
              title={step.title}
              description={step.description}
              icon={step.icon}
              gradient={step.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}