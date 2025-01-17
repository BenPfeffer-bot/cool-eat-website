import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import { FridgeIcon, LunchboxIcon, TheftIcon, WasteIcon } from '../components/icons/ProblemIcons';
import { SafeHygenicIcon, NoExtraBagsIcon, SecureStorageIcon, MinimizeWasteIcon } from '../components/icons/SolutionIcons';

interface Problem {
    icon: JSX.Element;
    title: string;
    description: string;
}

interface Solution {
    icon: JSX.Element;
    title: string;
    description: string;
    stats: string;
    statsLabel: string;
}

interface ProductFeature {
    title: string;
    description: string;
    benefits: string[];
    image: string;
}

const problems: Problem[] = [
    {
        icon: <FridgeIcon />,
        title: 'Food Spoilage',
        description: 'Food should not be left out at room temperature for more than 2 hours'
    },
    {
        icon: <LunchboxIcon />,
        title: 'Inconvenient Storage',
        description: 'Storing meals in your bag can get messy, it could leak, ruin your bag and your lunch'
    },
    {
        icon: <TheftIcon />,
        title: 'Food Theft',
        description: '25%* of workers fully located in offices in the UK have experienced food theft in the workplace'
    },
    {
        icon: <WasteIcon />,
        title: 'Food Waste',
        description: 'Bars and cafeterias in most workplaces throw away the unsold food at closing time'
    }
];

const solutions: Solution[] = [
    {
        icon: <SafeHygenicIcon />,
        title: 'Safe and Hygienic',
        description: 'Temperature-controlled environment keeps food fresh and safe for consumption.',
        stats: '99.9%',
        statsLabel: 'Food Safety Rate'
    },
    {
        icon: <NoExtraBagsIcon />,
        title: 'Convenient Access',
        description: 'No need for extra bags or containers. Access your food whenever you need it.',
        stats: '24/7',
        statsLabel: 'Accessibility'
    },
    {
        icon: <SecureStorageIcon />,
        title: 'Secure Storage',
        description: 'Advanced security features ensure your food is safe and accessible only to you.',
        stats: '100%',
        statsLabel: 'Security Rate'
    },
    {
        icon: <MinimizeWasteIcon />,
        title: 'Minimize Waste',
        description: 'Smart management system helps reduce food waste significantly.',
        stats: '-40%',
        statsLabel: 'Waste Reduction'
    }
];

const productFeatures: ProductFeature[] = [
    {
        title: 'For Supermarkets & Local Shops',
        description: 'Transform surplus food into revenue with our smart locker fridges. Instead of discarding leftover meals, store them securely and sell them even after hours.',
        benefits: [
            'Generate revenue from surplus food',
            'Reduce food waste significantly',
            'No additional staff required',
            'Temperature-controlled storage'
        ],
        image: '/supermarket.webp'
    },
    {
        title: 'For Universities & Open Spaces',
        description: 'Provide students and employees with secure, hygienic storage for their homemade meals. Our solution promotes sustainability while solving everyday storage challenges.',
        benefits: [
            'Secure, individual storage lockers',
            'Temperature-controlled environment',
            'Convenient app-based access',
            'Energy-efficient operation'
        ],
        image: '/uni.webp'
    },
    {
        title: 'For Local Restaurants',
        description: 'Offer convenient pickup options for your customers while maintaining full price margins. Our smart lockers integrate seamlessly with your delivery service.',
        benefits: [
            'Direct integration with your app',
            'Maintain full price margins',
            'Flexible pickup options',
            'Real-time temperature monitoring'
        ],
        image: '/restaurant.webp'
    }
];

const Products = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[70vh] relative flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/food_2.png")',
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
                            Smart Solutions for Every Need
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Discover how our innovative storage solutions can transform your space
                            and reduce food waste.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Problems Section */}
            <section className="py-24 bg-white" aria-labelledby="problems-title">
                <Container>
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <ScrollReveal>
                            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                Current Challenges
                            </span>
                            <h2
                                id="problems-title"
                                className="text-4xl font-bold text-gray-900 mt-4 mb-6"
                            >
                                Problems We're Solving
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every day, workplaces face these common food storage challenges.
                                Our mission is to address them with smart solutions.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Problems Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {problems.map((problem, index) => (
                            <ScrollReveal
                                key={problem.title}
                                delay={index * 100}
                            >
                                <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl 
                                    bg-white shadow-sm hover:shadow-md transition-all duration-300
                                    border border-gray-100 hover:border-green-100 group h-full">
                                    <div className="w-16 sm:w-20 lg:w-24 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {problem.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 group-hover:text-green-600 transition-colors">
                                        {problem.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Footnote */}
                    <div className="mt-12 text-center text-sm text-gray-500">
                        <p>* Based on workplace survey conducted in 2024</p>
                    </div>
                </Container>
            </section>

            {/* Solutions Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50" aria-labelledby="solutions-title">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                    Our Solution
                                </span>
                                <h2
                                    id="solutions-title"
                                    className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900"
                                >
                                    Smart Storage for Modern Needs
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    Our innovative smart locker system combines cutting-edge technology with practical solutions
                                    to address your food storage challenges.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {solutions.map((solution, index) => (
                                <ScrollReveal
                                    key={solution.title}
                                    delay={index * 150}
                                >
                                    <div className="relative group">
                                        {/* Card Background with hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 -z-10" />

                                        {/* Card Content */}
                                        <div className="relative p-6 flex flex-col items-center text-center space-y-4">
                                            {/* Icon with animated background */}
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 transform group-hover:scale-150 transition-all duration-700" />
                                                <div className="relative w-16 h-16 flex items-center justify-center text-green-600 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                                    {solution.icon}
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div className="mt-2">
                                                <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
                                                    {solution.stats}
                                                </div>
                                                <div className="text-sm text-gray-600 mt-1">
                                                    {solution.statsLabel}
                                                </div>
                                            </div>

                                            {/* Title and Description */}
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {solution.description}
                                                </p>
                                            </div>

                                            {/* Decorative elements */}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <ScrollReveal delay={600}>
                            <div className="mt-16 text-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 group"
                                >
                                    <span>Start Your Free Trial</span>
                                    <svg
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Product Features */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                        {productFeatures.map((feature, index) => (
                            <ScrollReveal key={feature.title}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                    <div className={`space-y-4 sm:space-y-6 lg:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                            {feature.title}
                                        </h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-2 sm:space-y-4">
                                            {feature.benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-center space-x-3">
                                                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4">
                                            <Link
                                                to="/contact"
                                                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white text-sm sm:text-base rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                                        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                                width="800"
                                                height="600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-green-600">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
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

export default Products; 