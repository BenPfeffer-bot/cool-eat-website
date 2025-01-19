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
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            <span className="inline-block animate-float">Latest</span>{" "}
                            <span className="inline-block animate-float-delayed">News</span>{" "}
                            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent inline-block animate-float-more-delayed">& Updates</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 animate-fade-in-up max-w-2xl">
                            Stay updated with the latest developments in sustainable food storage solutions
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium animate-fade-in-up"
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
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium mb-4">
                                Featured Story
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                    Latest Highlight
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <Link to={`/news/${featuredArticle.slug}`} className="block group">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg relative">
                                    <img
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium">
                                            {featuredArticle.category}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {featuredArticle.date}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                        {featuredArticle.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <span className="inline-flex items-center bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent font-medium group-hover:translate-x-2 transition-transform">
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
            <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium mb-4">
                                Recent Updates
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                    Latest Articles
                                </span>
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
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-brand-blue/10 transform hover:-translate-y-2">
                                        <div className="aspect-video overflow-hidden relative">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 text-brand-blue rounded-full text-sm font-medium">
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-400 text-sm">
                                                    {article.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green group-hover:bg-clip-text group-hover:text-transparent transition-colors mb-4">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 flex-grow">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                                <span className="text-gray-400 text-sm">
                                                    {article.date}
                                                </span>
                                                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
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
            <section className="relative py-24 sm:py-32 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue animate-gradient-xy opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/50 via-transparent to-brand-green/50 mix-blend-overlay animate-gradient-x" />
                
                {/* Animated overlay patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_25%)] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_25%)] animate-pulse-slow delay-700" />
                </div>

                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-float">
                                Never Miss an Update
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white animate-blur-in">
                                Stay Updated
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up">
                                Subscribe to our newsletter to receive the latest updates and insights
                                <br className="hidden sm:block" />
                                about sustainable food storage solutions.
                            </p>
                            <form className="max-w-md mx-auto animate-fade-in-up">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white/90 backdrop-blur focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all placeholder:text-gray-400"
                                    />
                                    <button
                                        type="submit"
                                        className="group relative px-8 py-4 bg-white/90 backdrop-blur overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <span className="relative font-semibold group-hover:text-white transition-colors duration-500 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                                            Subscribe
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>

                {/* Decorative elements */}
                <div className="absolute left-0 bottom-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-tr-3xl blur-2xl animate-float" />
                <div className="absolute right-0 top-0 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-bl-3xl blur-2xl animate-float-delayed" />
            </section>
        </div>
    );
};

export default News; 