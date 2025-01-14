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
    date: string;
    title: string;
    excerpt: string;
    link: string;
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
        date: 'January 15, 2024',
        title: 'CoolEat Launches New Smart Locker System',
        excerpt: 'Introducing our latest generation of temperature-controlled smart lockers...',
        link: '/news/smart-locker-launch'
    },
    {
        date: 'December 28, 2023',
        title: 'Reducing Food Waste in Universities',
        excerpt: 'How our solutions are helping universities across the UK minimize food waste...',
        link: '/news/university-impact'
    }
];

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-screen relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                    <video
                        src="/video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <Container className="relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-3xl">
                        <AnimatedText
                            as="h1"
                            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                        >
                            Smart Food Storage Solutions
                        </AnimatedText>
                        <AnimatedText
                            delay={200}
                            className="text-xl md:text-2xl text-white/80 mb-8 font-light"
                        >
                            Revolutionizing workplace food storage with sustainable, secure, and convenient solutions
                        </AnimatedText>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/products"
                                className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Explore Solutions
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Start Trial
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
                                Why Choose CoolEat
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                Smart Solutions for Modern Workplaces
                            </h2>
                            <p className="text-lg text-primary-600">
                                Our innovative technology transforms how food is stored and managed in workplaces,
                                making it more sustainable, secure, and convenient.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={index * 100}>
                                <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100 group">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-green-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-primary-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-[#3B5BDB] text-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <ScrollReveal direction="left">
                            <div className="space-y-8">
                                <h2 className="text-5xl font-bold">Making a Real Impact</h2>
                                <p className="text-xl text-white/80 leading-relaxed">
                                    Our smart storage solutions are helping businesses and institutions reduce food waste,
                                    save energy, and create more sustainable workplaces.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-4xl font-bold text-green-400">40%</div>
                                        <p className="text-white/80">Reduction in food waste</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-green-400">1000+</div>
                                        <p className="text-white/80">Active users</p>
                                    </div>
                                </div>
                                <Link
                                    to="/about"
                                    className="inline-block px-8 py-3 bg-white text-[#3B5BDB] rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="/fridge.png"
                                    alt="CoolEat Impact"
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
                            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
                                Latest Updates
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                News & Insights
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {latestNews.map((article, index) => (
                            <ScrollReveal key={article.title} delay={index * 100}>
                                <Link to={article.link} className="block group">
                                    <article className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100">
                                        <time className="text-sm text-green-500">{article.date}</time>
                                        <h3 className="text-xl font-semibold mt-2 mb-4 group-hover:text-green-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-primary-600 mb-4">
                                            {article.excerpt}
                                        </p>
                                        <span className="text-green-500 font-medium group-hover:underline">
                                            Read More →
                                        </span>
                                    </article>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold mb-6">
                                Ready to Transform Your Workplace?
                            </h2>
                            <p className="text-xl text-primary-600 mb-8">
                                Start your 1-month trial today and experience the future of food storage.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Start Free Trial
                            </Link>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home; 