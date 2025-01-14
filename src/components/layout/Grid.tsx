interface GridProps {
    children: React.ReactNode;
    className?: string;
    cols?: 1 | 2 | 3 | 4;
    gap?: 'sm' | 'md' | 'lg';
}

const Grid = ({
    children,
    className = '',
    cols = 3,
    gap = 'md'
}: GridProps) => {
    const columns = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    const gaps = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8'
    };

    const classes = [
        'grid',
        columns[cols],
        gaps[gap],
        className
    ].join(' ');

    return <div className={classes}>{children}</div>;
};

export default Grid; 