import React, { useEffect, useState } from 'react';

const COLORS = ['#F9A825', '#143D34', '#2962FF']; // Birdie Gold, Evergreen Deep, Signal Blue

const Confetti = ({ active }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (active) {
            const newParticles = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                style: {
                    left: i % 2 === 0 ? '0%' : '100%', // Bottom left or right
                    bottom: '0%',
                    '--tx': `${(Math.random() - 0.5) * 800}px`, // Spread horizontally
                    '--ty': `-${Math.random() * 600 + 200}px`, // Shoot up
                    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
                    animationDelay: `${Math.random() * 0.5}s`,
                },
            }));
            setParticles(newParticles);
        } else {
            setParticles([]);
        }
    }, [active]);

    if (!active) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="confetti-piece rounded-full"
                    style={p.style}
                />
            ))}
        </div>
    );
};

export default Confetti;
