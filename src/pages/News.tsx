import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import ScrollReveal from '../components/ui/ScrollReveal';
import { newsArticles, featuredArticle } from '../data/news/articles';

const News = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[70vh] relative flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/wind_background.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Latest News
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Stay updated with the latest developments in sustainable food storage solutions
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                        >
                            Subscribe to Updates
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Featured Article */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                Featured Story
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Latest Highlight
                            </h2>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <Link to={`/news/${featuredArticle.slug}`} className="block group">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="text-green-600 font-medium text-sm">
                                            {featuredArticle.category}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {featuredArticle.date}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                        {featuredArticle.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <span className="inline-flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                                        Read More
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </ScrollReveal>
                </Container>
            </section>

            {/* Recent Articles */}
            <section className="py-24 bg-gray-50">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                                Recent Updates
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Latest Articles
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Discover our most recent news and updates about sustainable food storage
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Recent Articles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                        {newsArticles.map((article, index) => (
                            <ScrollReveal key={article.id} delay={index * 100}>
                                <Link to={`/news/${article.slug}`} className="block group h-full">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                                <span className="text-green-600 font-medium text-sm">
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-400 text-sm">
                                                    {article.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-4">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 flex-grow">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                                <span className="text-gray-400 text-sm">
                                                    {article.date}
                                                </span>
                                                <span className="text-green-600 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                                                    Read More
                                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-green-600 text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                Subscribe to our newsletter to receive the latest updates and insights about sustainable food storage solutions.
                            </p>
                            <form className="max-w-md mx-auto">
                                <div className="flex gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-6 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default News; 