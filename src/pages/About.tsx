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
        icon: '/logo_resp.webp',
        title: 'Responsible Consumption',
        description: 'Promoting sustainable practices by reducing food waste and encouraging responsible consumption patterns.'
    },
    {
        icon: '/sdg13.png',
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
                        backgroundImage: 'url("/responsable_consump.webp")',
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
                            Our Mission
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Empowering sustainable food storage solutions for a better tomorrow
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
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
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/mission.webp"
                                    alt="Our Mission"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <div className="space-y-6">
                                <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
                                    Our Purpose
                                </span>
                                <h2 className="text-4xl font-bold text-primary">
                                    Transforming Food Storage
                                </h2>
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
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
                                Environmental Impact
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                Our Commitment to Sustainability
                            </h2>
                            <p className="text-lg text-primary-600 leading-relaxed">
                                We're dedicated to creating a more sustainable future through innovative food storage solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {sustainabilityGoals.map((goal, index) => (
                            <ScrollReveal key={goal.title} delay={index * 200}>
                                <div className="text-center space-y-4 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100">
                                    <img
                                        src={goal.icon}
                                        alt={goal.title}
                                        className="w-32 h-32 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300"
                                    />
                                    <h3 className="text-xl font-semibold text-primary">
                                        {goal.title}
                                    </h3>
                                    <p className="text-primary-600">
                                        {goal.description}
                                    </p>
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
                            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
                                Our Team
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                Meet the People Behind CoolEat
                            </h2>
                            <p className="text-lg text-primary-600 leading-relaxed">
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
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-primary mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-green-500 font-medium mb-4">
                                            {member.role}
                                        </p>
                                        <p className="text-primary-600">
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
            <section className="py-24 bg-green-600 text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Ready to transform food storage and reduce waste? Contact us to learn more about
                                our solutions.
                            </p>
                            {/* <div className="space-y-4">
                                <p className="text-lg">
                                    Email: <a href="mailto:a.s@Cooleat.eu" className="underline hover:text-green-400 transition-colors">
                                        a.s@Cooleat.eu
                                    </a>
                                </p>
                                <p className="text-lg">
                                    French Mobile: <a href="tel:+33677046851" className="underline hover:text-green-400 transition-colors">
                                        +33 6 77 04 68 51
                                    </a>
                                </p>
                                <p className="text-lg">
                                    English Mobile: <a href="tel:+447467819042" className="underline hover:text-green-400 transition-colors">
                                        +44 7467 819 042
                                    </a>
                                </p>
                            </div> */}
                            <div className="mt-12">
                                <Link
                                    to="/contact"
                                    className="inline-block px-8 py-3 bg-white text-[#3B5BDB] rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About; 