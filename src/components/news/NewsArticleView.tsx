import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../layout/Container';
import ScrollReveal from '../ui/ScrollReveal';
import { newsArticles, featuredArticle, type NewsArticle } from '../../data/news/articles';

const NewsArticleView: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find the article by slug
    const article = [...newsArticles, featuredArticle].find(
        article => article.slug === slug
    );

    if (!article) {
        return (
            <div className="min-h-screen py-24">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Article Not Found</h1>
                        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                        <Link
                            to="/news"
                            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Back to News
                        </Link>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Article Header */}
            <section className="pt-32 pb-16 bg-gray-50">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="text-green-600 font-medium text-sm">
                                    {article.category}
                                </span>
                                <span className="text-gray-400 text-sm">
                                    {article.date}
                                </span>
                                <span className="text-gray-400 text-sm">
                                    {article.readTime}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {article.title}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {article.excerpt}
                            </p>
                        </div>
                    </ScrollReveal>
                </Container>
            </section>

            {/* Article Content */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal>
                            {/* Featured Image */}
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-12">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none">
                                {article.content.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                                        {paragraph.trim()}
                                    </p>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Navigation */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <Link
                                to="/news"
                                className="inline-flex items-center text-green-600 font-medium hover:-translate-x-2 transition-transform"
                            >
                                <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                Back to News
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default NewsArticleView; 