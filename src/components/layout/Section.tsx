interface SectionProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    background?: 'white' | 'light' | 'primary' | 'gradient';
}

const Section = ({
    children,
    className = '',
    size = 'md',
    background = 'white'
}: SectionProps) => {
    const sizes = {
        sm: 'py-12',
        md: 'py-16',
        lg: 'py-24'
    };

    const backgrounds = {
        white: 'bg-white',
        light: 'bg-gray-50',
        primary: 'bg-primary text-white',
        gradient: 'bg-gradient-to-br from-primary to-secondary text-white'
    };

    const classes = [
        sizes[size],
        backgrounds[background],
        className
    ].join(' ');

    return <section className={classes}>{children}</section>;
};

export default Section; 