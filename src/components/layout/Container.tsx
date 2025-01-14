interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Container = ({ children, className = '', size = 'lg' }: ContainerProps) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl'
    };

    const classes = [
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
    ].join(' ');

    return <div className={classes}>{children}</div>;
};

export default Container; 