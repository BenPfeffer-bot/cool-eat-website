interface AnimatedTextProps {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    variant?: 'heading' | 'subheading' | 'body';
    delay?: number;
    className?: string;
}

const AnimatedText = ({
    children,
    as = 'p',
    variant = 'body',
    delay = 0,
    className = ''
}: AnimatedTextProps) => {
    const baseStyles = {
        heading: 'font-serif text-4xl md:text-5xl lg:text-6xl leading-tight',
        subheading: 'text-xl md:text-2xl font-light tracking-wide',
        body: 'text-lg leading-relaxed'
    };

    const Component = as;
    const animationDelay = `delay-[${delay}ms]`;

    const classes = [
        baseStyles[variant],
        'opacity-0 translate-y-4',
        'animate-fade-in-up',
        animationDelay,
        className
    ].join(' ');

    return <Component className={classes}>{children}</Component>;
};

export default AnimatedText; 