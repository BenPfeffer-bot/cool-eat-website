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
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif">Our Mission</h2>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    We're on a mission to revolutionize food distribution by creating
                                    sustainable, efficient solutions that benefit both producers and
                                    consumers while minimizing environmental impact.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Our Values</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ScrollReveal delay={200}>
                            <div className="space-y-4">
                                <h3 className="text-xl uppercase tracking-widest mb-4">Innovation</h3>
                                <p className="text-primary-600">
                                    Constantly pushing boundaries to create smarter, more efficient
                                    distribution solutions.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <div className="space-y-4">
                                <h3 className="text-xl uppercase tracking-widest mb-4">Sustainability</h3>
                                <p className="text-primary-600">
                                    Committed to reducing environmental impact through eco-conscious
                                    practices and technologies.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={600}>
                            <div className="space-y-4">
                                <h3 className="text-xl uppercase tracking-widest mb-4">Community</h3>
                                <p className="text-primary-600">
                                    Building strong relationships between producers, distributors,
                                    and consumers.
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
                        <h2 className="text-4xl font-serif text-center mb-16">Our Team</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((member, index) => (
                            <ScrollReveal key={member} delay={200 * index}>
                                <div className="space-y-4">
                                    <Image
                                        src={`/team-${member}.jpg`}
                                        alt={`Team Member ${member}`}
                                        aspectRatio="1:1"
                                        hover="zoom"
                                        className="mb-6"
                                    />
                                    <h3 className="text-xl font-medium">Team Member {member}</h3>
                                    <p className="text-primary-600">Position</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-serif mb-6">Our Vision</h2>
                            <p className="text-xl text-white/80 leading-relaxed">
                                We envision a future where food distribution is seamlessly
                                connected, sustainable, and accessible to all. Through continuous
                                innovation and collaboration, we're working to make this vision
                                a reality.
                            </p>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About; 