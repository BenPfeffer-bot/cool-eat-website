import React from 'react';
import Container from '../components/layout/Container';

const Terms: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50">
            <Container>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing or using CoolEat's services, you agree to be bound by these Terms of Service
                                and all applicable laws and regulations. If you do not agree with any of these terms,
                                you are prohibited from using or accessing our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    Permission is granted to temporarily access and use CoolEat's services for personal,
                                    non-commercial purposes. This license does not include:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>Modifying or copying our materials</li>
                                    <li>Using materials for commercial purposes</li>
                                    <li>Attempting to reverse engineer any software</li>
                                    <li>Removing any copyright or proprietary notations</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Service Description</h2>
                            <p className="text-gray-600 leading-relaxed">
                                CoolEat provides smart food storage solutions and related services. We reserve the right
                                to withdraw or amend our service, and any service or material we provide, in our sole
                                discretion without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    As a user of our services, you are responsible for:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>Maintaining the confidentiality of your account</li>
                                    <li>Using the service in compliance with laws and regulations</li>
                                    <li>Ensuring proper use of the storage facilities</li>
                                    <li>Reporting any unauthorized use or security breaches</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                CoolEat shall not be liable for any indirect, incidental, special, consequential, or
                                punitive damages resulting from your use or inability to use the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify users of any
                                material changes via email or through our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Questions about the Terms of Service should be sent to us at{' '}
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

export default Terms; 