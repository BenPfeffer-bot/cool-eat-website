import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import ScrollReveal from '../ui/ScrollReveal';
import { homeArticles } from '../../data/home/articles';

const HomeArticles: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                            Latest Updates
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
                            Featured Stories
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Explore our latest articles and success stories in sustainable food storage
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homeArticles.map((article, index) => (
                        <ScrollReveal key={article.id} delay={index * 100}>
                            <Link to={article.link} className="block group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-green-600 font-medium text-sm">
                                                {article.category}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                {article.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {article.description}
                                        </p>
                                        <span className="inline-flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                                            Read More
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HomeArticles; 