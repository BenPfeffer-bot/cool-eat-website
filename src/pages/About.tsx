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
                            Our Mission
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Empowering sustainable food storage solutions for a better tomorrow
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <ScrollReveal direction="left">
                            <Image
                                src="/mission.jpg"
                                alt="Our Mission"
                                aspectRatio="4:3"
                                hover="fade"
                                className="rounded-lg shadow-lg"
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif">Transforming Food Distribution</h2>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    CoolEat enhances the daily experience of students and employees by providing
                                    convenient, secure, and sustainable food storage solutions that align with
                                    their well-being and environmental values.
                                </p>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    Through our tech-driven, eco-friendly approach, we empower healthy habits
                                    and help minimize food waste while creating a positive environmental impact.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Sustainability Goals */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Our Commitment to Sustainability</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal delay={200}>
                            <div className="text-center space-y-4">
                                <Image
                                    src="/sdg12.png"
                                    alt="SDG 12 - Responsible Consumption"
                                    aspectRatio="1:1"
                                    className="w-32 mx-auto mb-6"
                                />
                                <h3 className="text-xl font-medium">Responsible Consumption</h3>
                                <p className="text-primary-600">
                                    Promoting sustainable practices by reducing food waste and encouraging
                                    responsible consumption patterns.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <div className="text-center space-y-4">
                                <Image
                                    src="/sdg13.png"
                                    alt="SDG 13 - Climate Action"
                                    aspectRatio="1:1"
                                    className="w-32 mx-auto mb-6"
                                />
                                <h3 className="text-xl font-medium">Climate Action</h3>
                                <p className="text-primary-600">
                                    Contributing to climate action by reducing food waste and its associated
                                    environmental impact.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Meet Our Team</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal delay={200}>
                            <div className="space-y-6">
                                <Image
                                    src="/founder_Amandine.JPG"
                                    alt="Amandine - Founder"
                                    aspectRatio="1:1"
                                    hover="fade"
                                    className="rounded-lg shadow-lg w-64 mx-auto"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-medium">Amandine</h3>
                                    <p className="text-primary-600 mb-4">Founder</p>
                                    <p className="text-primary-600">
                                        With an international background and studies at McGill University and ESCP,
                                        Amandine brings a global perspective to solving food waste challenges. Her
                                        experience in economics and finance drives CoolEat's strategic vision.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <div className="space-y-6">
                                <Image
                                    src="/team-vishal.jpg"
                                    alt="Vishal - Technical Lead"
                                    aspectRatio="1:1"
                                    hover="fade"
                                    className="rounded-lg shadow-lg w-64 mx-auto"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-medium">Vishal</h3>
                                    <p className="text-primary-600 mb-4">Technical Lead</p>
                                    <p className="text-primary-600">
                                        A Computer Science student at King's College London with experience at IBM
                                        and Amadeus, Vishal leads the technical development of CoolEat's smart
                                        locker technology and mobile application.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-serif mb-6">Join Our Mission</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Ready to transform food storage and reduce waste? Contact us to learn more about
                                our solutions.
                            </p>
                            <div className="space-y-4">
                                <p className="text-lg">
                                    Email: <a href="mailto:a.s@Cooleat.eu" className="underline">a.s@Cooleat.eu</a>
                                </p>
                                <p className="text-lg">
                                    French Mobile: <a href="tel:+33677046851" className="underline">+33 6 77 04 68 51</a>
                                </p>
                                <p className="text-lg">
                                    English Mobile: <a href="tel:+447467819042" className="underline">+44 7467 819 042</a>
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About; 