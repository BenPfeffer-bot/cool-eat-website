import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import PartnerBanner from '../components/sections/PartnerBanner';
import { SafeHygenicIcon, NoExtraBagsIcon, SecureStorageIcon, MinimizeWasteIcon } from '../components/icons/SolutionIcons';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import HomeArticles from '../components/home/HomeArticles';

interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

interface NewsArticle {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    slug: string;
}

interface HomeProps { }

const features: Feature[] = [
    {
        icon: <SafeHygenicIcon />,
        title: 'Sustainable Storage',
        description: 'Smart lockers that maintain optimal temperature and reduce energy consumption while keeping food fresh.'
    },
    {
        icon: <NoExtraBagsIcon />,
        title: 'Convenient Access',
        description: 'Easy-to-use mobile app for seamless locker access and real-time notifications.'
    },
    {
        icon: <SecureStorageIcon />,
        title: 'Secure System',
        description: 'Advanced security features ensure your food is safe and accessible only to authorized users.'
    },
    {
        icon: <MinimizeWasteIcon />,
        title: 'Waste Reduction',
        description: 'Innovative solutions that help minimize food waste and promote sustainable practices.'
    }
];

const latestNews: NewsArticle[] = [
    {
        title: "Revolutionizing Food Storage in Universities",
        excerpt: "How our smart lockers are transforming campus dining and reducing food waste.",
        date: "March 15, 2024",
        category: "Case Study",
        image: "/fridge.png",
        slug: "university-food-storage"
    },
    {
        title: "Partnership with Leading Supermarket Chain",
        excerpt: "CoolEat expands its reach with a new partnership to tackle food waste.",
        date: "March 10, 2024",
        category: "Partnership",
        image: "/Gray Basket Photo.jpg",
        slug: "supermarket-partnership"
    }
];

const Home: React.FC<HomeProps> = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[60vh] sm:min-h-[70vh] relative flex items-center">
                <ResponsiveImage
                    mobileSrc="/home-mobile.webp"
                    tabletSrc="/home-tablet.webp"
                    desktopSrc="/fridge.png"
                    alt="CoolEat Hero"
                    className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-black/40 z-0" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
                            Cool Eat
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
                            Transform your workplace with innovative, sustainable food storage solutions
                        </p>
                        <Link
                            to="/contact"
                            className="mobile-link inline-block px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Start Trial
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Partner Banner */}
            <PartnerBanner />

            {/* Impact Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                        <ScrollReveal>
                            <div className="space-y-4 sm:space-y-6">
                                <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                                    Our Impact
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                    Making a Difference
                                </h2>
                                <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                                    Our smart storage solutions are helping businesses reduce food waste
                                    and improve efficiency across the board.
                                </p>
                                <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4 sm:pt-8">
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">90%</div>
                                        <p className="text-sm sm:text-base text-gray-600">Reduction in food waste</p>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">0</div>
                                        <p className="text-sm sm:text-base text-gray-600">Active users</p>
                                    </div>
                                </div>
                                <Link
                                    to="/about"
                                    className="mobile-link inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-6 sm:mt-8"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <ResponsiveImage
                                mobileSrc="/impact-mobile.jpg"
                                tabletSrc="/impact-tablet.jpg"
                                desktopSrc="/impact.jpg"
                                alt="Our Impact"
                                className="aspect-video rounded-2xl overflow-hidden shadow-lg"
                            />
                        </ScrollReveal>
                    </div>
                </Container>
            </section>


            {/* Features Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                                Our Features
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6">
                                Smart Solutions for Every Need
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Discover how our innovative storage solutions can transform your space
                                and reduce food waste.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={index * 100}>
                                <div className="touch-feedback text-center space-y-4 p-4 sm:p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>
            {/* Latest News */}
            {/* <section className="py-16 sm:py-20 md:py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                                Latest News
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6">
                                Stay Updated
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Keep up with our latest developments and success stories
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                        {latestNews.map((article, index) => (
                            <ScrollReveal key={article.title} delay={index * 100}>
                                <Link to={`/news/${article.slug}`} className="block group touch-feedback">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                        <div className="aspect-video overflow-hidden">
                                            <ResponsiveImage
                                                mobileSrc={article.image.replace('.', '-mobile.')}
                                                tabletSrc={article.image.replace('.', '-tablet.')}
                                                desktopSrc={article.image}
                                                alt={article.title}
                                                className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6 md:p-8">
                                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                                <span className="text-blue-600 font-medium text-sm">
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-400 text-sm">
                                                    {article.date}
                                                </span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 sm:mb-4">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-600 mb-4">
                                                {article.excerpt}
                                            </p>
                                            <span className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                                                Read More
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section> */}

            {/* Featured Articles */}
            <HomeArticles />
            {/* CTA Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-blue-600 text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Ready to Get Started?</h2>
                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                                Transform your space with our smart storage solutions. Start your 1-month trial today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="mobile-link px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    to="/contact"
                                    className="mobile-link px-6 sm:px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home; 