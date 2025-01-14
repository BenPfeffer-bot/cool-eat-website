import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import { SafeHygenicIcon, NoExtraBagsIcon, SecureStorageIcon, MinimizeWasteIcon } from '../components/icons/SolutionIcons';

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
        image: "public/fridge.png",
        slug: "university-food-storage"
    },
    {
        title: "Partnership with Leading Supermarket Chain",
        excerpt: "CoolEat expands its reach with a new partnership to tackle food waste.",
        date: "March 10, 2024",
        category: "Partnership",
        image: "public/Gray Basket Photo.jpg",
        slug: "supermarket-partnership"
    }
];

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[70vh] relative flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/home.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Cool Eat
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Transform your workplace with innovative, sustainable food storage solutions
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                        >
                            Start Trial
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                Our Features
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Smart Solutions for Every Need
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Discover how our innovative storage solutions can transform your space
                                and reduce food waste.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={index * 100}>
                                <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100 group">
                                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <ScrollReveal>
                            <div className="space-y-6">
                                <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                    Our Impact
                                </span>
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Making a Difference
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Our smart storage solutions are helping businesses reduce food waste
                                    and improve efficiency across the board.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-8">
                                    <div>
                                        <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                                        <p className="text-gray-600">Reduction in food waste</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-green-600 mb-2">2000+</div>
                                        <p className="text-gray-600">Active users</p>
                                    </div>
                                </div>
                                <Link
                                    to="/about"
                                    className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mt-8"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/impact.jpg"
                                    alt="Our Impact"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Latest News */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                Latest News
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Stay Updated
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Keep up with our latest developments and success stories
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {latestNews.map((article, index) => (
                            <ScrollReveal key={article.title} delay={index * 100}>
                                <Link to={`/news/${article.slug}`} className="block group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <span className="text-green-600 font-medium text-sm">
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-400 text-sm">
                                                    {article.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-4">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {article.excerpt}
                                            </p>
                                            <span className="inline-flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
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
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-green-600 text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                Transform your space with our smart storage solutions. Start your 1-month trial today.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
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