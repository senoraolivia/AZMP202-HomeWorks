import React from 'react';

export default function Achievements() {
  const achievements = [
    'Developed a high-traffic e-commerce platform',
    'Won first place in a national coding competition',
    'Contributed to open-source projects with over 1000 stars on GitHub',
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-lg mb-2">{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

