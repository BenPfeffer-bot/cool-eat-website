import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';

interface NavLink {
    name: string;
    href: string;
}

const navigation: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="logo.png" alt="CoolEat Logo" className="h-10 w-auto" />
                        <span className={`text-xl font-medium ${isScrolled ? 'text-primary' : 'text-green-500'}`}>
                            CoolEat
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-primary hover:text-primary-600' : 'text-white hover:text-white/80'
                                    } ${location.pathname === item.href ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-white text-green-500 hover:bg-white/90'
                                }`}
                        >
                            Start Trial
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <div className="py-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`block text-sm font-medium transition-colors ${isScrolled ? 'text-primary hover:text-primary-600' : 'text-white hover:text-white/80'
                                    } ${location.pathname === item.href ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={`block px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors ${isScrolled
                                ? 'bg-primary text-white hover:bg-primary-600'
                                : 'bg-white text-primary hover:bg-white/90'
                                }`}
                        >
                            Start Trial
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar; 