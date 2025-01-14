import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import Image from '../components/ui/Image';

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-[70vh] relative flex items-center bg-primary-50">
                <Container>
                    <div className="max-w-3xl">
                        <AnimatedText as="h1" variant="heading" className="mb-6">
                            Our Story
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Transforming food distribution through innovation and sustainability
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <ScrollReveal direction="left">
                            <Image
                                src="/benefits.png"
                                alt="Cool Eat Benefits"
                                aspectRatio="4:3"
                                hover="fade"
                                className="rounded-lg"
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif">Our Impact</h2>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    We create value for both students and universities through our innovative
                                    food storage solutions. Our system promotes fresher meals, safety,
                                    convenience, and cost savings while reducing food waste.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Problems We Solve */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Problems We Solve</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ScrollReveal direction="left">
                            <Image
                                src="/problems.png"
                                alt="Food Distribution Problems"
                                aspectRatio="16:9"
                                hover="fade"
                                className="rounded-lg mb-8"
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl uppercase tracking-widest">Food Spoilage</h3>
                                    <p className="text-primary-600">Preventing food from being left at room temperature</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl uppercase tracking-widest">Food Waste</h3>
                                    <p className="text-primary-600">Reducing waste in cafeterias and workplaces</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl uppercase tracking-widest">Storage Solutions</h3>
                                    <p className="text-primary-600">Providing convenient and secure food storage</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Our Solutions */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Our Solutions</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ScrollReveal direction="left">
                            <div className="space-y-6">
                                <Image
                                    src="/solutions.png"
                                    alt="Cool Eat Solutions"
                                    aspectRatio="1:1"
                                    hover="fade"
                                    className="rounded-lg mb-8"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl uppercase tracking-widest">Safe and Hygienic</h3>
                                    <p className="text-primary-600">Temperature-controlled storage for food safety</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl uppercase tracking-widest">Smart Technology</h3>
                                    <p className="text-primary-600">App-based control and monitoring system</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl uppercase tracking-widest">Sustainability</h3>
                                    <p className="text-primary-600">Focus on reducing food waste and environmental impact</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Our Team</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal delay={200}>
                            <div className="text-center space-y-4">
                                <Image
                                    src="/founder_Amandine.JPG"
                                    alt="Founder"
                                    aspectRatio="1:1"
                                    hover="fade"
                                    className="rounded-full w-48 h-48 mx-auto mb-6"
                                />
                                <h3 className="text-xl font-medium">Amandine</h3>
                                <p className="text-primary-600">Founder</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <div className="text-center space-y-4">
                                <Image
                                    src="/tech_lead_vishal.png"
                                    alt="Tech Lead"
                                    aspectRatio="1:1"
                                    hover="fade"
                                    className="rounded-full w-48 h-48 mx-auto mb-6"
                                />
                                <h3 className="text-xl font-medium">Vishal</h3>
                                <p className="text-primary-600">Tech Lead</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Sustainability Goals */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Sustainability Goals</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal delay={200}>
                            <Image
                                src="/sdg.png"
                                alt="SDG 12 - Responsible Consumption"
                                aspectRatio="1:1"
                                hover="fade"
                                className="rounded-lg"
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <Image
                                src="/sdg2.png"
                                alt="SDG 13 - Climate Action"
                                aspectRatio="1:1"
                                hover="fade"
                                className="rounded-lg"
                            />
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Zero Waste Vision */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl font-serif text-center mb-16">Our Zero Waste Vision</h2>
                            <Image
                                src="/zero waste.png"
                                alt="Zero Waste Vision"
                                aspectRatio="16:9"
                                hover="fade"
                                className="rounded-lg mb-8"
                            />
                            <p className="text-xl text-primary-600 text-center leading-relaxed">
                                We're committed to reducing food waste and promoting sustainable consumption
                                through our innovative storage solutions.
                            </p>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About; 