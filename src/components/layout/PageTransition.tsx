import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage('fadeOut');
        }
    }, [location, displayLocation]);

    const handleAnimationEnd = () => {
        if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
        }
    };

    return (
        <div
            className={`min-h-screen ${transitionStage === 'fadeIn' ? 'animate-fade-in' : 'opacity-0 transition-opacity duration-200'}`}
            onAnimationEnd={handleAnimationEnd}
        >
            {children}
        </div>
    );
};

export default PageTransition; 