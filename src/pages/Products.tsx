import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import Image from '../components/ui/Image';

const Products = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-[70vh] relative flex items-center bg-primary-50">
                <Container>
                    <div className="max-w-3xl">
                        <AnimatedText as="h1" variant="heading" className="mb-6">
                            Smart Solutions for Every Need
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Eat Better, Live Better: The Smart Way to Store Your Meals
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="space-y-32">
                        {/* Supermarkets/Local Shops */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <ScrollReveal direction="left">
                                <Image
                                    src="/supermarket-solution.jpg"
                                    alt="Supermarket Solution"
                                    aspectRatio="4:3"
                                    hover="zoom"
                                    className="rounded-lg shadow-lg"
                                />
                            </ScrollReveal>
                            <ScrollReveal direction="right" delay={200}>
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-serif">For Supermarkets & Local Shops</h2>
                                    <p className="text-xl text-primary-600 leading-relaxed">
                                        Transform surplus food into revenue with our smart locker fridges. Instead of discarding
                                        leftover meals, store them securely and sell them even after hours - no additional
                                        staff needed.
                                    </p>
                                    <ul className="space-y-4 text-primary-600">
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Generate revenue from surplus food</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Reduce food waste significantly</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>No additional staff required</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Universities/Open Spaces */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <ScrollReveal direction="right" delay={200} className="md:order-2">
                                <Image
                                    src="/university-solution.jpg"
                                    alt="University Solution"
                                    aspectRatio="4:3"
                                    hover="zoom"
                                    className="rounded-lg shadow-lg"
                                />
                            </ScrollReveal>
                            <ScrollReveal direction="left" className="md:order-1">
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-serif">For Universities & Open Spaces</h2>
                                    <p className="text-xl text-primary-600 leading-relaxed">
                                        Provide students and employees with secure, hygienic storage for their homemade meals.
                                        Our solution promotes sustainability while solving everyday storage challenges.
                                    </p>
                                    <ul className="space-y-4 text-primary-600">
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Secure, individual storage lockers</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Temperature-controlled environment</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Convenient app-based access</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Local Restaurants */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <ScrollReveal direction="left">
                                <Image
                                    src="/restaurant-solution.jpg"
                                    alt="Restaurant Solution"
                                    aspectRatio="4:3"
                                    hover="zoom"
                                    className="rounded-lg shadow-lg"
                                />
                            </ScrollReveal>
                            <ScrollReveal direction="right" delay={200}>
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-serif">For Local Restaurants</h2>
                                    <p className="text-xl text-primary-600 leading-relaxed">
                                        Offer convenient pickup options for your customers while maintaining full price margins.
                                        Our smart lockers integrate seamlessly with your delivery service.
                                    </p>
                                    <ul className="space-y-4 text-primary-600">
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Direct integration with your app</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Maintain full price margins</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Flexible pickup options</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Key Features</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={200 * index}>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 text-primary-600 mx-auto">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-medium text-center">{feature.title}</h3>
                                    <p className="text-primary-600 text-center">{feature.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-serif mb-6">Ready to Get Started?</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Contact us to schedule a 1-month trial and see how CoolEat can transform your space
                                and reduce food waste.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors">
                                    Schedule Trial
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

const features = [
    {
        title: "Smart App Integration",
        description: "Secure mobile app access with real-time notifications and status updates",
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Temperature Control",
        description: "Advanced cooling system keeps meals fresh and safe",
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        )
    },
    {
        title: "Secure Storage",
        description: "Individual lockers prevent theft and ensure food safety",
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        )
    },
    {
        title: "Customizable",
        description: "Flexible solutions adaptable to any space or requirement",
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

export default Products; 