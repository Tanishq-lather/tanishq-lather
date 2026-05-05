import { useState, useEffect } from 'react'

export const NightRainBG = () => {
    const [drops, setDrops] = useState([]);
    const [raindrops, setRaindrops] = useState([]);

    useEffect(() => {
        generateDrops();
        generateRaindrops();

        const handleResize = () => {
            generateDrops();
            generateRaindrops();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            }
            
        }
    }, [])

    
    const generateDrops = () => {
        const numberOfDrops = 20;

        const newDrops = [];

        for (let i = 0; i < numberOfDrops; i++) {
            newDrops.push({
                id: i,
                size: Math.random() * 25 + 8, // 8-33px for varied sizes
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.4 + 0.4, // 0.4-0.8 opacity
                rotation: Math.random() * 360, // Random rotation for realism
                animationDuration: Math.random() * 6 + 3, // 3-9s for subtle movement
            })
        }
        setDrops(newDrops);

    }

    const generateRaindrops = () => {
        const numberOfRaindrops = 16;

        const newRaindrops = [];

        for (let i = 0; i < numberOfRaindrops; i++) {
            newRaindrops.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 2,
                animationDuration: Math.random() * 1 + 1,
            })
        }
        setRaindrops(newRaindrops);

    }

    return (
        <div className='fixed overflow-hidden inset-0 pointer-events-none z-0'>
            {drops.map(drop => (
                <div key={drop.id} className="drops animate-water-drop" style={{
                    width: drop.size + "px",
                    height: drop.size * 1.2 + "px", // Make drops slightly taller for realism
                    left: drop.x + "%",
                    top: drop.y + "%",
                    opacity: drop.opacity,
                    transform: `rotate(${drop.rotation}deg)`,
                    animationDuration: drop.animationDuration + "s",
                    animationDelay: Math.random() * 2 + "s",
                }}/>
            ))}
            {raindrops.map(raindrop => (
                <div key={raindrop.id} className="raindrop animate-rain" style={{
                    left: raindrop.x + "%",
                    top: "-60px",
                    animationDelay: raindrop.delay + "s",
                    animationDuration: raindrop.animationDuration + "s",
                }}/>
            ))}
        </div>
    )
}