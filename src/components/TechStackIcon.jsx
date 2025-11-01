import React from 'react';
import TechStackIcon from './TechStackIcon';

const TechStack = () => {
  const tools = [
    { icon: '/images/python.png', name: 'Python' },
    { icon: '/images/mysql.png', name: 'MySQL' },
    { icon: '/images/powerbi.png', name: 'Power BI' },
    { icon: '/images/onshape.png', name: 'Onshape' },
  ];

  return (
    <section id="techstack" className="py-20 px-6 md:px-20 bg-navy text-offwhite">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {tools.map((tool, index) => (
          <TechStackIcon key={index} icon={tool.icon} name={tool.name} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
