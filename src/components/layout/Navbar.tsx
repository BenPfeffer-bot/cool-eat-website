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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <Container>
                <div className="relative flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center flex-shrink-0"
                        aria-label="CoolEat"
                    >
                        <img
                            src="/logo.png"
                            alt="CoolEat"
                            className="h-12 w-auto"
                            loading="eager"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === item.href
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Start Trial
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                        ? 'max-h-screen opacity-100 visible'
                        : 'max-h-0 opacity-0 invisible'
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${location.pathname === item.href
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="block w-full px-3 py-4 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
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