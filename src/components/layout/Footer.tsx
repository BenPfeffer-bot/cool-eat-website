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
    social: [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/amandine-saltiel/',
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/cooleat.eu/',
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
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
                            <div className="flex space-x-6">
                                {navigation.social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-primary-400 hover:text-primary-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
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
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        Contact
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <a
                                                href="mailto:a.s@Cooleat.eu"
                                                className="text-base text-primary-600 hover:text-primary-800"
                                            >
                                                a.s@Cooleat.eu
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tel:+33677046851"
                                                className="text-base text-primary-600 hover:text-primary-800"
                                            >
                                                +33 6 77 04 68 51
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tel:+447467819042"
                                                className="text-base text-primary-600 hover:text-primary-800"
                                            >
                                                +44 7467 819 042
                                            </a>
                                        </li>
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