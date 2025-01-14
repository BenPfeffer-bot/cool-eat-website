import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[2000px] ${className}`}>
            <div className="max-w-screen-2xl mx-auto">
                {children}
            </div>
        </div>
    );
};

export default Container; 