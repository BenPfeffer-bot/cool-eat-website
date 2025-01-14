import React from 'react';
import Container from '../layout/Container';

const partners = [
    {
        name: 'Barclays',
        logo: '/barclays_logo.png',
        width: 'w-28',
    },
    {
        name: 'ESCP Business School',
        logo: '/escp_logo.png',
        width: 'w-32',
    },
];

const PartnerBanner: React.FC = () => {
    return (
        <div className="py-8 relative bg-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/4 w-32 h-32 -translate-y-1/2 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-32 h-32 -translate-y-1/2 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-300" />
            </div>

            <Container>
                <div className="text-center mb-6">
                    <h2 className="text-base font-semibold text-gray-800 tracking-wide uppercase">
                        Trusted By Industry Leaders
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-12">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative"
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-green-100 rounded-lg opacity-0 group-hover:opacity-100 transform scale-110 group-hover:scale-105 transition-all duration-300 -z-10" />

                            {/* Logo container */}
                            <div className="relative p-4 rounded-lg transition-transform duration-500 transform group-hover:scale-110">
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className={`${partner.width} h-12 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-lg`}
                                />

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                            </div>

                            {/* Tooltip */}
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                <div className="bg-gray-900 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
                                    {partner.name}
                                </div>
                                <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default PartnerBanner; 