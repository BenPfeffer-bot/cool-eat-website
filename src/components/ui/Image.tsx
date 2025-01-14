import { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2';
    hover?: 'zoom' | 'fade' | 'none';
}

const Image = ({
    src,
    alt,
    aspectRatio = '1:1',
    hover = 'none',
    className = '',
    ...props
}: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const aspectRatios = {
        '1:1': 'aspect-square',
        '16:9': 'aspect-video',
        '4:3': 'aspect-[4/3]',
        '3:2': 'aspect-[3/2]'
    };

    const hoverEffects = {
        zoom: 'hover:scale-105',
        fade: 'hover:opacity-80',
        none: ''
    };

    const classes = [
        'w-full h-full object-cover transition-all duration-700',
        aspectRatios[aspectRatio],
        hoverEffects[hover],
        isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm',
        className
    ].join(' ');

    return (
        <div className={`relative overflow-hidden bg-primary-100 ${aspectRatios[aspectRatio]}`}>
            <img
                src={src}
                alt={alt}
                className={classes}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default Image; 