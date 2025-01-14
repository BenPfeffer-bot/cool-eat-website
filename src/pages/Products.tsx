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
                            Our Solutions
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Smart food storage systems for modern institutions
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Product Overview */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <ScrollReveal direction="left">
                            <Image
                                src="/product overview.png"
                                alt="Product Overview"
                                aspectRatio="4:3"
                                hover="zoom"
                                className="rounded-lg shadow-lg"
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif">Smart Storage System</h2>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    Our innovative food storage solution combines advanced technology
                                    with sustainable practices. Features include temperature control,
                                    real-time monitoring, and secure access management.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Smart Fridge Showcase */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Smart Fridge Solutions</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ScrollReveal delay={200}>
                            <Image
                                src="/fridge.png"
                                alt="Smart Fridge"
                                aspectRatio="4:3"
                                hover="fade"
                                className="rounded-lg shadow-lg"
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <Image
                                src="/fridge 2.png"
                                alt="Smart Fridge Installation"
                                aspectRatio="4:3"
                                hover="fade"
                                className="rounded-lg shadow-lg"
                            />
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Key Features</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal delay={200}>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif">Smart Technology</h3>
                                <ul className="space-y-4 text-primary-600">
                                    <li className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>App-based control system</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Real-time temperature monitoring</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Secure access management</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif">Sustainability</h3>
                                <ul className="space-y-4 text-primary-600">
                                    <li className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Energy-efficient operation</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Reduced food waste</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Eco-friendly materials</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Technical Specifications */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Technical Specifications</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {specifications.map((spec, index) => (
                            <ScrollReveal key={spec.label} delay={100 * index}>
                                <div className="border-b border-primary-200 pb-4">
                                    <h3 className="text-lg font-medium mb-2">{spec.label}</h3>
                                    <p className="text-primary-600">{spec.value}</p>
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
                            <h2 className="text-4xl font-serif mb-6">Ready to Transform Your Food Storage?</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Contact us to learn more about our solutions and how they can benefit your institution.
                            </p>
                            <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors">
                                Get Started
                            </button>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

const specifications = [
    {
        label: "Dimensions",
        value: "180cm x 100cm x 60cm"
    },
    {
        label: "Temperature Range",
        value: "-20°C to +15°C"
    },
    {
        label: "Power Consumption",
        value: "Energy-efficient, 220V-240V"
    },
    {
        label: "Capacity",
        value: "Up to 500L storage volume"
    },
    {
        label: "Connectivity",
        value: "4G/WiFi enabled with real-time monitoring"
    },
    {
        label: "Security",
        value: "Advanced access control system"
    }
];

export default Products; 