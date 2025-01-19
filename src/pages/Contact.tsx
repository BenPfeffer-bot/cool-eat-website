import { useState } from 'react';
import Container from '../components/layout/Container';
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
    { value: 'restaurant', label: 'Local Restaurant' },
    { value: 'others', label: 'Others' },
];

const contactInfo: ContactInfo[] = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: 'Email Contact',
        value: 'a.s@cooleat.eu',
        link: 'mailto:a.s@cooleat.eu'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.63.001z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: 'Office Address',
        value: 'Opening Soon',
    }
];

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch('https://formspree.io/f/mkggenog', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.currentTarget.reset();
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (err) {
            setError('Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
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
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                        <p className="text-gray-600">We'll be in touch with you shortly.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
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
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                                                Phone (Optional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="organizationType" className="block text-sm font-medium text-gray-600 mb-2">
                                                Organization Type
                                            </label>
                                            <select
                                                id="organizationType"
                                                name="organizationType"
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
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                                                required
                                            />
                                        </div>

                                        {error && (
                                            <div className="text-red-600 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </>
                                )}
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                    Help Center
                                </span>
                                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Everything you need to know about using CoolEat
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Important Notice */}
                        <ScrollReveal>
                            <div className="bg-green-50 rounded-2xl p-6 mb-12">
                                <h3 className="text-xl font-semibold text-green-800 mb-4">Keep in Mind</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-green-800">Lockers are available on a first-come, first-serve basis.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-green-800">There are 13 lockers only. If all lockers are taken, you can register your interest by adding your email to the waitlist on our web application.</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* FAQ Accordion */}
                        <div className="space-y-4">
                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How do I use CoolEat for my lunchbox?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6 space-y-4">
                                        <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-4">
                                            <li>Scan the QR code on the locker fridge.</li>
                                            <li>Log in to the web application.</li>
                                            <li>Choose a subscription model that fits your needs.</li>
                                            <li>Store your lunchbox in a designated locker.</li>
                                            <li>You'll receive an email confirmation with your assigned locker number.</li>
                                            <li>To retrieve your lunchbox, unlock the locker using the web application.</li>
                                            <li>Enjoy your lunch!</li>
                                        </ol>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How do I use CoolEat to buy meals from cafeterias or supermarkets?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6 space-y-4">
                                        <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-4">
                                            <li>Scan the QR code on the locker fridge.</li>
                                            <li>Log in to the web application.</li>
                                            <li>Browse the available lockers and select the meal you want.</li>
                                            <li>Make the payment via the web application.</li>
                                            <li>Unlock the locker using the web application.</li>
                                            <li>Enjoy your meal!</li>
                                        </ol>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How do I use CoolEat to buy meals from local restaurants?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6 space-y-4">
                                        <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-4">
                                            <li>Scan the QR code on the locker fridge.</li>
                                            <li>Log in to the web application.</li>
                                            <li>Before 10 AM on weekdays, select the meal you want from the web application from our local restaurants partners.</li>
                                            <li>Pay for the meal via the web application.</li>
                                            <li>You'll receive an email confirmation with your assigned locker number.</li>
                                            <li>Your meal will be delivered directly to your locker.</li>
                                            <li>Unlock the locker using the web application.</li>
                                            <li>Enjoy your meal!</li>
                                        </ol>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How do I reach CoolEat customer service?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600">
                                            Email us at{' '}
                                            <a href="mailto:contact@cooleat.eu" className="text-green-600 hover:text-green-700 transition-colors">
                                                contact@cooleat.eu
                                            </a>
                                        </p>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How long can I store my lunchbox?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600">
                                            You can store your lunchbox for one day only. Every evening, you will receive an email notification reminding you to retrieve it.
                                        </p>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            What happens if I forget my lunchbox?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600">
                                            If you forget to collect your lunchbox, it will be placed on shelves next to the CoolEat lockers for you to pick up the next day. CoolEat fridges are cleaned every evening to prevent cross-contamination.
                                        </p>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            When can I use CoolEat?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600">
                                            CoolEat smart locker fridges are accessible 24/7.
                                        </p>
                                    </div>
                                </details>
                            </ScrollReveal>

                            {/* Privacy Policy Section */}
                            <div className="mt-12 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy FAQs</h3>
                            </div>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How long is my data stored?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600">
                                            Your data is stored for as long as necessary to provide our services or comply with legal obligations. If you stop using CoolEat, your data will be retained for 1 month before being permanently deleted, unless you request its removal earlier.
                                        </p>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            Where is my data stored?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600">Your data is securely stored:</p>
                                        <ul className="mt-4 space-y-2 text-gray-600 ml-6 list-disc">
                                            <li>In the UK for operational purposes.</li>
                                            <li>On Amazon Web Services (AWS) servers, which comply with high security standards and data protection regulations.</li>
                                        </ul>
                                    </div>
                                </details>
                            </ScrollReveal>

                            <ScrollReveal>
                                <details className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer group">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                            How can I delete my account?
                                        </h3>
                                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                            <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-6">
                                        <p className="text-gray-600 mb-4">To delete your account:</p>
                                        <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-4">
                                            <li>Log in to the web application.</li>
                                            <li>Go to Account Settings.</li>
                                            <li>Select Delete My Account and confirm the action.</li>
                                        </ol>
                                        <p className="mt-4 text-gray-600">
                                            You will receive an email confirmation once your account and associated data have been permanently deleted.
                                        </p>
                                        <p className="mt-4 text-gray-600">
                                            Alternatively, email us at{' '}
                                            <a href="mailto:contact@cooleat.eu" className="text-green-600 hover:text-green-700 transition-colors">
                                                contact@cooleat.eu
                                            </a>
                                            {' '}to request account deletion.
                                        </p>
                                    </div>
                                </details>
                            </ScrollReveal>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact; 