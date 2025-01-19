import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import Timeline from '../components/sections/Timeline';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

interface SustainabilityGoal {
    icon: string;
    title: string;
    description: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Amandine',
        role: 'Founder',
        bio: "With an international background and studies at McGill University and ESCP, Amandine brings a global perspective to solving food waste challenges. Her experience in economics and finance drives CoolEat's strategic vision.",
        image: '/founder_Amandine.JPG'
    },
    {
        name: 'Vishal',
        role: 'Technical Lead',
        bio: "A Computer Science student at King's College London with experience at IBM and Amadeus, Vishal leads the technical development of CoolEat's smart locker technology and mobile application.",
        image: '/tech_lead_vishal.png'
    }
];

const sustainabilityGoals: SustainabilityGoal[] = [
    {
        icon: '/12_eco.png',
        title: 'Responsible Consumption',
        description: 'Promoting sustainable practices by reducing food waste and encouraging responsible consumption patterns.'
    },
    {
        icon: '/13_eco.png',
        title: 'Climate Action',
        description: 'Contributing to climate action by reducing food waste and its associated environmental impact.'
    }
];

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[70vh] relative flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/zero waste.png")',
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
                            <span className="inline-block animate-float">Our</span>{" "}
                            <span className="inline-block animate-float-delayed">Mission</span>{" "}
                            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent inline-block animate-float-more-delayed">to Transform</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 animate-fade-in-up max-w-2xl">
                            Empowering sustainable food storage solutions for a better tomorrow
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium animate-fade-in-up"
                        >
                            Join Our Mission
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <ScrollReveal direction="left">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src="/fridge_2.png"
                                    alt="Our Mission"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium">
                                    Our Purpose
                                </span>
                                <h2 className="text-4xl font-bold">
                                    <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                        Transforming Food Storage
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    CoolEat enhances the daily experience of students and employees by providing
                                    convenient, secure, and sustainable food storage solutions that align with
                                    their well-being and environmental values.
                                </p>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Through our tech-driven, eco-friendly approach, we empower healthy habits
                                    and help minimize food waste while creating a positive environmental impact.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Sustainability Goals */}
            <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium mb-4">
                                Environmental Impact
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                    Our Commitment to Sustainability
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We're dedicated to creating a more sustainable future through innovative food storage solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {sustainabilityGoals.map((goal, index) => (
                            <ScrollReveal key={goal.title} delay={index * 200}>
                                <div className="text-center space-y-4 p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-blue/10 group transform hover:-translate-y-2">
                                    <img
                                        src={goal.icon}
                                        alt={goal.title}
                                        className="w-32 h-32 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-semibold group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                        {goal.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {goal.description}
                                    </p>
                                    <div className="mt-6 h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-500 mx-auto" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium mb-4">
                                Our Team
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                    Meet the People Behind CoolEat
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A dedicated team of professionals working to revolutionize food storage.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <ScrollReveal key={member.name} delay={index * 200}>
                                <div className="space-y-6 text-center">
                                    <div className="relative group">
                                        <div className="aspect-square w-64 mx-auto rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent font-medium mb-4">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Timeline Section */}
            <Timeline />

            {/* Contact Section */}
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
                                Be Part of the Change
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white animate-blur-in">
                                Join Our Mission
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up">
                                Ready to transform food storage and reduce waste?
                                <br className="hidden sm:block" />
                                Contact us to learn more about our solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    to="/contact"
                                    className="group relative px-8 sm:px-10 py-4 bg-white/90 backdrop-blur overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative font-semibold group-hover:text-white transition-colors duration-500 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                        Get in Touch
                                    </span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="group px-8 sm:px-10 py-4 border-2 border-white/50 hover:border-white text-white rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-500 font-semibold animate-fade-in-up delay-100"
                                >
                                    Learn More
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

export default About; 