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
            <section className="min-h-[80vh] relative flex items-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <ResponsiveImage
                        mobileSrc="/home-mobile.webp"
                        tabletSrc="/home-tablet.webp"
                        desktopSrc="/fridge.png"
                        alt="CoolEat Hero"
                        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl animate-fade-in">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 flex items-center">
                            <span className="text-[#1a75bb] animate-float">Cool</span>
                            <span className="text-[#2b8743] flex items-center animate-float-delayed">
                                Eat
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1 animate-float-more-delayed" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.6 10.9c-2.5-2.5-6.1-2.5-8.2-1.7.8 2.1.8 5.7-1.7 8.2-2.9 2.9-7.2 2.9-7.2 2.9s0-4.3 2.9-7.2c2.5-2.5 6.1-2.5 8.2-1.7.8-2.1.8-5.7-1.7-8.2C6.9.3 2.7.3 2.7.3s0 4.3 2.9 7.2c.4.4.8.7 1.2 1-.4.2-.7.5-1.1.8C2.9 11.7 0 16 0 16s4.3 0 7.2-2.9c.4-.4.7-.8 1-1.2.2.4.5.8.8 1.1 2.9 2.9 7.2 2.9 7.2 2.9s0-4.3-2.9-7.2c-.4-.4-.8-.7-1.2-1 .4-.2.7-.5 1.1-.8 2.8-2.9 7.1-2.9 7.1-2.9s0 4.3-2.9 7.2z"/>
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl animate-fade-in-up">
                            Transform your workplace with innovative, sustainable food storage solutions
                        </p>
                        <Link
                            to="/contact"
                            className="mobile-link inline-block px-8 sm:px-10 py-4 bg-gradient-to-r from-[#1a75bb] to-[#2b8743] text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium animate-fade-in-up"
                        >
                            Start Trial
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Partner Banner */}
            <PartnerBanner />

            {/* Impact Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                        <ScrollReveal>
                            <div className="space-y-4 sm:space-y-6">
                                <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#1a75bb]/10 to-[#2b8743]/10 text-[#1a75bb] rounded-full text-sm font-medium">
                                    Our Impact
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold">
                                    <span className="bg-gradient-to-r from-[#1a75bb] to-[#2b8743] bg-clip-text text-transparent">
                                        Making a Difference
                                    </span>
                                </h2>
                                <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                                    Our smart storage solutions are helping businesses reduce food waste
                                    and improve efficiency across the board.
                                </p>
                                <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4 sm:pt-8">
                                    <div className="group">
                                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1a75bb] to-[#2b8743] bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform">90%</div>
                                        <p className="text-sm sm:text-base text-gray-600">Reduction in food waste</p>
                                    </div>
                                    <div className="group">
                                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1a75bb] to-[#2b8743] bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform">13</div>
                                        <p className="text-sm sm:text-base text-gray-600">Active users</p>
                                    </div>
                                </div>
                                <Link
                                    to="/about"
                                    className="mobile-link inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-[#1a75bb] to-[#2b8743] text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-6 sm:mt-8"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="relative group">
                                <ResponsiveImage
                                    mobileSrc="/impact-mobile.jpg"
                                    tabletSrc="/impact-tablet.jpg"
                                    desktopSrc="/impact.jpg"
                                    alt="Our Impact"
                                    className="aspect-video rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1a75bb]/20 to-[#2b8743]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#1a75bb]/10 to-[#2b8743]/10 text-[#1a75bb] rounded-full text-sm font-medium mb-4">
                                Why Choose CoolEat
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                <span className="inline-block animate-float">Innovative</span>{" "}
                                <span className="inline-block animate-float-delayed">Solutions</span>{" "}
                                <span className="bg-gradient-to-r from-[#1a75bb] to-[#2b8743] bg-clip-text text-transparent inline-block animate-float-more-delayed">for You</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                Experience the future of food storage with our cutting-edge technology
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {features.map((feature, index) => (
                            <ScrollReveal 
                                key={feature.title} 
                                delay={index * 150}
                                className="group perspective"
                            >
                                <div className="relative p-8 sm:p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#1a75bb] overflow-hidden transform-gpu hover:translate-y-[-8px] hover:rotate-1">
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a75bb]/5 to-[#2b8743]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative flex flex-col items-center text-center">
                                        {/* Icon Container with Pulse Effect */}
                                        <div className="relative mb-6">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a75bb]/20 to-[#2b8743]/20 rounded-full animate-ping-slow opacity-0 group-hover:opacity-100" />
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#1a75bb] to-[#2b8743] p-0.5 transform-gpu group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                                    <div className="transform group-hover:scale-110 transition-transform duration-500 text-[#1a75bb] group-hover:text-[#2b8743]">
                                                        {feature.icon}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#1a75bb] group-hover:to-[#2b8743] group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                                            {feature.description}
                                        </p>
                                        
                                        {/* Animated Line */}
                                        <div className="mt-6 h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-[#1a75bb] to-[#2b8743] transition-all duration-500" />
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Featured Articles */}
            <HomeArticles />

            {/* CTA Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue animate-gradient-xy opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/50 via-transparent to-brand-green/50 mix-blend-overlay animate-gradient-x" />
                
                {/* Animated overlay patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_25%)] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_25%)] animate-pulse-slow delay-700" />
                </div>

                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-float">
                                Join the Future of Food Storage
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white animate-blur-in">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up">
                                Transform your space with our smart storage solutions.
                                <br className="hidden sm:block" />
                                Start your 1-month trial today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    to="/contact"
                                    className="group relative px-8 sm:px-10 py-4 bg-white/90 backdrop-blur overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative font-semibold group-hover:text-white transition-colors duration-500 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                        Start Free Trial
                                    </span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="group px-8 sm:px-10 py-4 border-2 border-white/50 hover:border-white text-white rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-500 font-semibold animate-fade-in-up delay-100"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>

                {/* Decorative elements */}
                <div className="absolute left-0 bottom-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-tr-3xl blur-2xl animate-float" />
                <div className="absolute right-0 top-0 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-bl-3xl blur-2xl animate-float-delayed" />
            </section>
        </div>
    );
};

export default Home; 