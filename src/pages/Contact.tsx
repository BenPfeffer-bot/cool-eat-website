import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';

const Contact = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-[70vh] relative flex items-center bg-primary-50">
                <Container>
                    <div className="max-w-3xl">
                        <AnimatedText as="h1" variant="heading" className="mb-6">
                            Start Your Trial Today
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Experience how CoolEat can transform your space with our 1-month trial
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Contact Form */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <ScrollReveal direction="left">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl font-serif mb-6">Get Started</h2>
                                    <p className="text-xl text-primary-600 leading-relaxed">
                                        Ready to transform your workplace and reduce food waste? Schedule a 1-month
                                        trial and see the difference CoolEat can make.
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    {contactInfo.map((item, index) => (
                                        <div key={item.label} className="flex items-start space-x-4">
                                            <div className="w-6 h-6 mt-1 text-primary">{item.icon}</div>
                                            <div>
                                                <h3 className="font-medium mb-1">{item.label}</h3>
                                                <a
                                                    href={item.link}
                                                    className="text-primary-600 hover:text-primary transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={200}>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Organization Type</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary">
                                        <option value="">Select an option</option>
                                        <option value="supermarket">Supermarket/Local Shop</option>
                                        <option value="university">University/Open Space</option>
                                        <option value="restaurant">Local Restaurant</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary"
                                        placeholder="Tell us about your needs and space requirements"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                                >
                                    Schedule Trial
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Trial Info */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl font-serif text-center mb-16">What to Expect</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {trialSteps.map((step, index) => (
                                <ScrollReveal key={step.title} delay={200 * index}>
                                    <div className="text-center space-y-4">
                                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-xl font-medium">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-medium">{step.title}</h3>
                                        <p className="text-primary-600">{step.description}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

const contactInfo = [
    {
        label: "Email",
        value: "a.s@Cooleat.eu",
        link: "mailto:a.s@Cooleat.eu",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        label: "French Mobile",
        value: "+33 6 77 04 68 51",
        link: "tel:+33677046851",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        label: "English Mobile",
        value: "+44 7467 819 042",
        link: "tel:+447467819042",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    }
];

const trialSteps = [
    {
        title: "Initial Consultation",
        description: "We'll discuss your needs and assess your space requirements"
    },
    {
        title: "Installation",
        description: "Quick and seamless setup of your CoolEat smart locker system"
    },
    {
        title: "1-Month Trial",
        description: "Experience the benefits firsthand with full support from our team"
    }
];

export default Contact; 