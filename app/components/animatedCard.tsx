"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MiLink from '../data/links';

interface AnimatedCardProps {
  targetNumber: number;
  title: string;
  desc: string;
  links: MiLink[];
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ targetNumber, title, desc, links }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / 250;
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(interval);
        start = targetNumber;
      }
      setCurrentNumber(Math.floor(start));
    }, 10);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetNumber]);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl tracking-tight font-semibold mb-2 opacity-70">
          {currentNumber + title}
        </h2>
        <p className="tracking-tight opacity-50 mb-3">{desc}</p>
        <div className="flex gap-4">
          {links.map((item) => (
            <div
              key={item.title}
              className="text-2xl">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-colors"
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
