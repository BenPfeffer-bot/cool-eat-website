import React from 'react';
import Container from '../components/layout/Container';

const Privacy: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50">
            <Container>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At CoolEat, we take your privacy seriously. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you use our website and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>Name and contact information</li>
                                    <li>Account credentials</li>
                                    <li>Payment information</li>
                                    <li>Usage data and preferences</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    We use the collected information for various purposes:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>To provide and maintain our services</li>
                                    <li>To notify you about changes to our services</li>
                                    <li>To provide customer support</li>
                                    <li>To gather analysis or valuable information to improve our services</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect
                                your personal information. However, please note that no method of transmission over
                                the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>Access your personal data</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to data processing</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:a.s@Cooleat.eu" className="text-green-600 hover:text-green-700">
                                    a.s@Cooleat.eu
                                </a>
                            </p>
                        </section>

                        <section>
                            <p className="text-sm text-gray-500">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Privacy; 