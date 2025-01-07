import React from 'react';

export default function Experiences() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Web Developer',
      period: 'Jan 2020 - Present',
      description: 'Leading a team of developers in creating innovative web applications.',
    },
    {
      company: 'Digital Creations',
      position: 'Web Developer',
      period: 'Jun 2017 - Dec 2019',
      description: 'Developed and maintained multiple client websites using modern web technologies.',
    },
  ];

  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Experiences</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <p className="text-gray-600">{exp.company} | {exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

