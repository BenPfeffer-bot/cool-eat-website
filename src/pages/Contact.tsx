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
                            Get in Touch
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Let's discuss how we can transform your food distribution system
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
                                    <h2 className="text-4xl font-serif mb-6">Contact Us</h2>
                                    <p className="text-xl text-primary-600 leading-relaxed">
                                        We're here to help you find the perfect solution for your needs.
                                        Fill out the form and we'll get back to you soon.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <div key={item.label} className="flex items-start space-x-4">
                                            <div className="w-6 h-6 mt-1">{item.icon}</div>
                                            <div>
                                                <h3 className="font-medium mb-1">{item.label}</h3>
                                                <p className="text-primary-600">{item.value}</p>
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
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:border-primary"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Map Section */}
            <section className="h-[400px] bg-primary-50">
                <div className="w-full h-full">
                    {/* Replace with actual map implementation */}
                    <div className="w-full h-full bg-primary-100 flex items-center justify-center">
                        <p className="text-primary-600">Map placeholder</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const contactInfo = [
    {
        label: "Email",
        value: "contact@cooleat.com",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        label: "Phone",
        value: "+1 (555) 123-4567",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        label: "Address",
        value: "123 Innovation Street, Tech City, TC 12345",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

export default Contact; 