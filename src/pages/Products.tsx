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
                            Innovative food distribution systems designed for efficiency and sustainability
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Featured Product */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <ScrollReveal direction="left">
                            <Image
                                src="/product-main.jpg"
                                alt="Smart Distribution System"
                                aspectRatio="4:3"
                                hover="zoom"
                                className="rounded-lg shadow-lg"
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif">Smart Distribution System</h2>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    Our flagship solution combines advanced technology with sustainable practices
                                    to revolutionize food distribution. Features include temperature control,
                                    real-time monitoring, and automated inventory management.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Product Features */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Key Features</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={200 * index}>
                                <div className="space-y-4">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        aspectRatio="1:1"
                                        hover="fade"
                                        className="mb-6 rounded-lg"
                                    />
                                    <h3 className="text-xl uppercase tracking-widest">{feature.title}</h3>
                                    <p className="text-primary-600">{feature.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Technical Specifications */}
            <section className="py-24 bg-white">
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
                            <h2 className="text-4xl font-serif mb-6">Ready to Transform Your Distribution?</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Contact us to learn more about our solutions and how they can benefit your business.
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

const features = [
    {
        title: "Temperature Control",
        description: "Precise temperature management for optimal food preservation",
        image: "/feature-temp.jpg"
    },
    {
        title: "Smart Monitoring",
        description: "Real-time tracking and analytics for inventory management",
        image: "/feature-monitor.jpg"
    },
    {
        title: "Eco-Friendly",
        description: "Sustainable design with energy-efficient operation",
        image: "/feature-eco.jpg"
    }
];

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