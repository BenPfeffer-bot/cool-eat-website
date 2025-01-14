import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    distance?: number;
    className?: string;
}

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    distance = 20,
    className = ''
}: ScrollRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getInitialTransform = () => {
        switch (direction) {
            case 'up':
                return `translateY(${distance}px)`;
            case 'down':
                return `translateY(-${distance}px)`;
            case 'left':
                return `translateX(${distance}px)`;
            case 'right':
                return `translateX(-${distance}px)`;
            default:
                return 'none';
        }
    };

    const styles = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
    };

    return (
        <div ref={elementRef} style={styles} className={className}>
            {children}
        </div>
    );
};

export default ScrollReveal; 