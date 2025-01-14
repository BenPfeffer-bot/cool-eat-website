import { useState } from 'react';
import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';

interface ContactInfo {
    icon: JSX.Element;
    label: string;
    value: string;
    link?: string;
}

interface OrganizationType {
    value: string;
    label: string;
}

const organizationTypes: OrganizationType[] = [
    { value: 'supermarket', label: 'Supermarket/Local Shop' },
    { value: 'university', label: 'University/Open Space' },
    { value: 'restaurant', label: 'Local Restaurant' }
];

const contactInfo: ContactInfo[] = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: 'Email',
        value: 'a.s@Cooleat.eu',
        link: 'mailto:a.s@Cooleat.eu'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: 'French Mobile',
        value: '+33 6 77 04 68 51',
        link: 'tel:+33677046851'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: 'English Mobile',
        value: '+44 7467 819 042',
        link: 'tel:+447467819042'
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organizationType: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[70vh] relative flex items-center bg-green-600 text-white">
                <Container>
                    <div className="max-w-3xl">
                        <AnimatedText as="h1" className="text-5xl md:text-6xl font-bold mb-6">
                            Start Your Trial Today
                        </AnimatedText>
                        <AnimatedText
                            delay={200}
                            className="text-xl text-white/90 mb-8"
                        >
                            Experience our smart storage solutions with a 1-month trial. No commitment required.
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Contact Information */}
                        <ScrollReveal>
                            <div className="space-y-12">
                                <div>
                                    <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                        Get Started
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                                        Schedule Your Trial
                                    </h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Ready to transform your food storage? Fill out the form and we'll help you
                                        get started with a 1-month trial of our smart storage solution.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {contactInfo.map((info) => (
                                        <div key={info.label} className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">{info.label}</p>
                                                <a
                                                    href={info.link}
                                                    className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white flex-shrink-0">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                                                <p className="text-gray-600">We'll discuss your needs and find the perfect solution.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white flex-shrink-0">
                                                2
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Installation</h4>
                                                <p className="text-gray-600">Quick and hassle-free setup of your smart storage system.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white flex-shrink-0">
                                                3
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">1-Month Trial</h4>
                                                <p className="text-gray-600">Experience the benefits with full support from our team.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal delay={200}>
                            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="organizationType" className="block text-sm font-medium text-gray-600 mb-2">
                                        Organization Type
                                    </label>
                                    <select
                                        id="organizationType"
                                        name="organizationType"
                                        value={formData.organizationType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                        required
                                    >
                                        <option value="">Select your organization type</option>
                                        {organizationTypes.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                        placeholder="Tell us about your needs and space requirements..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                                >
                                    Schedule Trial
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact; 