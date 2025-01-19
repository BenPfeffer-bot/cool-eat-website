import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import { FridgeIcon, LunchboxIcon, TheftIcon, WasteIcon } from '../components/icons/ProblemIcons';
import { SafeHygenicIcon, NoExtraBagsIcon, SecureStorageIcon, MinimizeWasteIcon } from '../components/icons/SolutionIcons';
import { useState, useEffect } from 'react';

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
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, setSliderRef] = useState<HTMLDivElement | null>(null);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? productFeatures.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === productFeatures.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (sliderRef) {
            sliderRef.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide, sliderRef]);

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
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            <span className="inline-block animate-float">Smart</span>{" "}
                            <span className="inline-block animate-float-delayed">Solutions</span>{" "}
                            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent inline-block animate-float-more-delayed">for Every Need</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 animate-fade-in-up max-w-2xl">
                            Discover how our innovative storage solutions can transform your space
                            and reduce food waste.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium animate-fade-in-up"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Origin Story Section */}
            <section className="py-24 bg-white overflow-hidden" aria-labelledby="story-title">
                <Container>
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <ScrollReveal>
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium mb-4">
                                Our Story
                            </span>
                            <h2
                                id="story-title"
                                className="text-4xl font-bold mt-4 mb-6"
                            >
                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                    How CoolEat Was Born
                                </span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Story Timeline */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-brand-blue/20 via-brand-green/40 to-brand-blue/20" />

                        {/* Story Segments */}
                        <div className="space-y-24">
                            {/* The Problem */}
                            <ScrollReveal>
                                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="relative z-10">
                                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-blue/10 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                                                1
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                                The Student Experience
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                As a student across different universities and countries, I consistently faced the same challenge: 
                                                there was never a convenient place to store lunch during the day. Food would get warm, 
                                                containers would leak in bags, and carrying both work and food bags became cumbersome.
                                            </p>
                                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                    Multiple bags
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                    Warm food
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                    Leaking containers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg group">
                                            <img
                                                src="/Unhappy-child.jpg"
                                                alt="Student lunch storage problems"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* The Solution */}
                            <ScrollReveal>
                                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:grid-flow-dense">
                                    <div className="relative lg:col-start-2">
                                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-blue/10 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                                                2
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                                The CoolEat Solution
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                What if you could store your meals in a secure, temperature-controlled locker? 
                                                CoolEat was born: a smart locker fridge connected via a web application, 
                                                keeping your food fresh and accessible throughout the day.
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-gradient-to-r from-brand-blue/5 to-brand-green/5 rounded-lg p-4 group">
                                                    <div className="font-semibold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent mb-1">
                                                        Secure Storage
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        Personal access via web app
                                                    </div>
                                                </div>
                                                <div className="bg-gradient-to-r from-brand-blue/5 to-brand-green/5 rounded-lg p-4 group">
                                                    <div className="font-semibold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent mb-1">
                                                        Temperature Control
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        Keep food fresh all day
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative lg:col-start-1">
                                        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg group">
                                            <img
                                                src="/fridge.png"
                                                alt="CoolEat smart locker solution"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* The Impact */}
                            <ScrollReveal>
                                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="relative z-10">
                                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-blue/10 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                                                3
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                                Beyond Convenience
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                CoolEat isn't just about convenience – it's about sustainability and wellbeing. 
                                                We're partnering with cafeterias to reduce food waste by providing a platform 
                                                to sell leftover food instead of throwing it away.
                                            </p>
                                            <div className="bg-gradient-to-r from-brand-blue/5 to-brand-green/5 rounded-xl p-6">
                                                <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent mb-2">40%</div>
                                                <div className="text-sm text-gray-600">
                                                    Reduction in food waste through smart management and partnerships
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg group">
                                            <img
                                                src="/zero waste.png"
                                                alt="Sustainability impact"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <ScrollReveal>
                        <div className="mt-24 text-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                            >
                                <span className="text-lg">Join Our Journey</span>
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </ScrollReveal>
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
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium mb-4">
                                Our Solutions
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                    Smart Storage Solutions
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Discover how our innovative solutions can benefit your business
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Slider Section */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Slider Container */}
                        <div className="overflow-hidden">
                            <div 
                                ref={setSliderRef}
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {productFeatures.map((feature, index) => (
                                    <div key={feature.title} className="w-full flex-shrink-0 flex-grow-0" style={{ minWidth: '100%' }}>
                                        <div className="px-4 mx-auto max-w-6xl">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
                                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                                        <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                                            {feature.title}
                                                        </span>
                                                    </h2>
                                                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                    <ul className="space-y-2 sm:space-y-4">
                                                        {feature.benefits.map((benefit) => (
                                                            <li key={benefit} className="flex items-center space-x-3">
                                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green flex items-center justify-center">
                                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="pt-4">
                                                        <Link
                                                            to="/contact"
                                                            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                                        >
                                                            Learn More
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                                    <div className="aspect-4/3 group">
                                                        <img
                                                            src={feature.image}
                                                            alt={feature.title}
                                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                            loading="lazy"
                                                            width="800"
                                                            height="600"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                            <button
                                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-800 hover:text-brand-blue transform hover:scale-105"
                                onClick={handlePrevSlide}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-800 hover:text-brand-blue transform hover:scale-105"
                                onClick={handleNextSlide}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Dots Navigation */}
                        <div className="flex justify-center space-x-2 mt-8">
                            {productFeatures.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentSlide === index 
                                            ? 'bg-gradient-to-r from-brand-blue to-brand-green w-8' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

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

export default Products; 