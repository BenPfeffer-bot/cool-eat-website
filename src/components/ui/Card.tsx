interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
    const baseStyles = 'bg-white rounded-xl shadow-sm overflow-hidden';
    const hoverStyles = hover ? 'transition-transform hover:translate-y-[-4px] hover:shadow-md' : '';

    const classes = [baseStyles, hoverStyles, className].join(' ');

    return <div className={classes}>{children}</div>;
};

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
    return (
        <div className={`p-6 border-b ${className}`}>
            {children}
        </div>
    );
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

const CardContent = ({ children, className = '' }: CardContentProps) => {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    );
};

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

const CardFooter = ({ children, className = '' }: CardFooterProps) => {
    return (
        <div className={`p-6 border-t bg-gray-50/50 ${className}`}>
            {children}
        </div>
    );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card; 