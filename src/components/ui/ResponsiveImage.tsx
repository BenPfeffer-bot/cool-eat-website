import React, { useState } from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    mobileSrc?: string;
    tabletSrc?: string;
    desktopSrc: string;
    alt: string;
    className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
    mobileSrc,
    tabletSrc,
    desktopSrc,
    alt,
    className = '',
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            )}
            <picture>
                {mobileSrc && (
                    <source media="(max-width: 639px)" srcSet={mobileSrc} />
                )}
                {tabletSrc && (
                    <source
                        media="(min-width: 640px) and (max-width: 1023px)"
                        srcSet={tabletSrc}
                    />
                )}
                <source media="(min-width: 1024px)" srcSet={desktopSrc} />
                <img
                    src={desktopSrc}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                    onLoad={handleLoad}
                    {...props}
                />
            </picture>
        </div>
    );
};

export default ResponsiveImage; 