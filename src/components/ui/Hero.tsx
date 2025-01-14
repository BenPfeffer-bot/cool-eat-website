import Container from '../layout/Container';

interface HeroProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    align?: 'left' | 'center';
    size?: 'sm' | 'lg';
    background?: 'gradient' | 'light' | 'none';
}

const Hero = ({
    title,
    description,
    children,
    align = 'center',
    size = 'lg',
    background = 'gradient'
}: HeroProps) => {
    const alignments = {
        left: 'text-left',
        center: 'text-center'
    };

    const sizes = {
        sm: 'py-16',
        lg: 'py-24 lg:py-32'
    };

    const backgrounds = {
        gradient: 'bg-gradient-to-br from-primary to-secondary text-white',
        light: 'bg-gray-50',
        none: ''
    };

    const titleStyles = [
        'font-bold tracking-tight',
        size === 'lg' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl',
        background === 'gradient' ? 'text-white' : 'text-gray-900'
    ].join(' ');

    const descriptionStyles = [
        'mt-6 max-w-3xl',
        size === 'lg' ? 'text-xl' : 'text-lg',
        background === 'gradient' ? 'text-gray-100' : 'text-gray-600',
        align === 'center' ? 'mx-auto' : ''
    ].join(' ');

    return (
        <div className={`relative overflow-hidden ${backgrounds[background]} ${sizes[size]}`}>
            <Container className={alignments[align]}>
                <h1 className={titleStyles}>{title}</h1>
                {description && <p className={descriptionStyles}>{description}</p>}
                {children && <div className="mt-8">{children}</div>}
            </Container>
        </div>
    );
};

export default Hero; 