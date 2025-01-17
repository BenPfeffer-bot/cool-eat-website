import React, { useState, useEffect } from 'react';
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
    { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Handle keyboard navigation
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${hasScrolled || isOpen
                ? 'bg-white/95 shadow-lg'
                : 'bg-transparent'
                }`}
            onKeyDown={handleKeyPress}
            role="navigation"
            aria-label="Main navigation"
        >
            <Container>
                <div className="relative flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center flex-shrink-0 group"
                        aria-label="CoolEat - Back to homepage"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src="/logo.png"
                                alt=""
                                className="h-24 w-auto transform transition-all duration-300 group-hover:scale-110"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-green-200/0 via-green-200/30 to-green-200/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${location.pathname === item.href
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-700 hover:text-green-600'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-200 ${location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="ml-4 px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Start Trial
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">
                            {isOpen ? 'Close main menu' : 'Open main menu'}
                        </span>
                        <div className="relative w-6 h-6">
                            <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                }`} />
                            <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'
                                }`} />
                            <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                }`} />
                        </div>
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                        ? 'max-h-96 opacity-100 visible'
                        : 'max-h-0 opacity-0 invisible'
                        }`}
                    aria-hidden={!isOpen}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${location.pathname === item.href
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50/70'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="block w-full mt-4 px-4 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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