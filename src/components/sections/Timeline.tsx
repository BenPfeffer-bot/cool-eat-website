import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const timelineEvents = [
    {
        date: '2023 Q3',
        title: 'Company Foundation',
        description: 'CoolEat was founded with a vision to revolutionize food storage and reduce waste.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        ),
        status: 'completed'
    },
    {
        date: '2023 Q4',
        title: 'First Prototype',
        description: 'Developed and tested our first smart locker prototype at ESCP Business School.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        status: 'completed'
    },
    {
        date: '2024 Q1',
        title: 'Barclays Partnership',
        description: 'Strategic partnership with Barclays to implement smart lockers in corporate offices.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        status: 'completed'
    },
    {
        date: '2024 Q2',
        title: 'University Expansion',
        description: 'Launching smart locker solutions across multiple university campuses.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        status: 'in-progress'
    },
    {
        date: '2024 Q3',
        title: 'Mobile App Launch',
        description: 'Release of our mobile app for seamless locker access and management.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        status: 'planned'
    },
    {
        date: '2024 Q4',
        title: 'European Expansion',
        description: 'Expanding our services to major European cities.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        status: 'planned'
    }
];

const Timeline: React.FC = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-50/50">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
                    <p className="text-lg text-gray-600">
                        From idea to innovation: the story of CoolEat's growth and future plans
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

                    {/* Timeline events */}
                    <div className="relative">
                        {timelineEvents.map((event, index) => (
                            <ScrollReveal
                                key={event.title}
                                delay={index * 100}
                                className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                <div
                                    className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                                        }`}
                                >
                                    <div className="group">
                                        <span className={`text-sm font-semibold ${event.status === 'completed'
                                            ? 'text-green-600'
                                            : event.status === 'in-progress'
                                                ? 'text-blue-600'
                                                : 'text-gray-500'
                                            }`}>
                                            {event.date}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-green-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${event.status === 'completed'
                                        ? 'border-green-600 bg-green-100 text-green-600'
                                        : event.status === 'in-progress'
                                            ? 'border-blue-600 bg-blue-100 text-blue-600'
                                            : 'border-gray-400 bg-gray-100 text-gray-500'
                                        }`}>
                                        {event.icon}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline; 