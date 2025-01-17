import Container from './Container';
import { Link } from 'react-router-dom';

const navigation = {
    solutions: [
        { name: 'For Supermarkets', href: '/products#supermarkets' },
        { name: 'For Universities', href: '/products#universities' },
        { name: 'For Restaurants', href: '/products#restaurants' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary-100" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <Container>
                <div className="py-12 lg:py-16">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8 xl:col-span-1">
                            <Link to="/" className="flex items-center space-x-2">
                                <img src="/logo.png" alt="CoolEat Logo" className="h-10 w-auto" />
                                <span className="text-xl font-medium text-primary">CoolEat</span>
                            </Link>
                            <p className="text-base text-primary-600">
                                Transforming food storage with smart, sustainable solutions.
                            </p>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        Solutions
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.href}
                                                    className="text-base text-primary-600 hover:text-primary-800"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        Company
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.company.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.href}
                                                    className="text-base text-primary-600 hover:text-primary-800"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        Legal
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.href}
                                                    className="text-base text-primary-600 hover:text-primary-800"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-primary-100 pt-8">
                        <p className="text-base text-primary-400 xl:text-center">
                            &copy; {new Date().getFullYear()} CoolEat. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer; 