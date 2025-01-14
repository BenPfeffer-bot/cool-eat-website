import React from 'react';

interface LoadingProps {
    fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen = false }) => {
    const content = (
        <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
                {content}
            </div>
        );
    }

    return <div className="py-8">{content}</div>;
};

export default Loading; 