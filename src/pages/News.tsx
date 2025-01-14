import Container from '../components/layout/Container';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';
import Image from '../components/ui/Image';

const News = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-[70vh] relative flex items-center bg-primary-50">
                <Container>
                    <div className="max-w-3xl">
                        <AnimatedText as="h1" variant="heading" className="mb-6">
                            Latest News
                        </AnimatedText>
                        <AnimatedText
                            variant="subheading"
                            delay={200}
                            className="text-primary-600"
                        >
                            Stay updated with our latest developments and industry insights
                        </AnimatedText>
                    </div>
                </Container>
            </section>

            {/* Featured Article */}
            <section className="py-24 bg-white">
                <Container>
                    <ScrollReveal direction="up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <div className="space-y-6">
                                <p className="text-primary-600 uppercase tracking-widest">Featured Story</p>
                                <h2 className="text-4xl font-serif">Revolutionizing Food Distribution with Smart Technology</h2>
                                <p className="text-xl text-primary-600 leading-relaxed">
                                    Discover how our latest innovations are transforming the way food reaches consumers,
                                    making the process more efficient and sustainable than ever before.
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-primary-600">
                                    <span>June 15, 2024</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                            <Image
                                src="/news-featured.jpg"
                                alt="Featured Story"
                                aspectRatio="16:9"
                                hover="zoom"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </ScrollReveal>
                </Container>
            </section>

            {/* Recent Articles */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <ScrollReveal>
                        <h2 className="text-4xl font-serif text-center mb-16">Recent Articles</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {articles.map((article, index) => (
                            <ScrollReveal key={article.title} delay={200 * index}>
                                <article className="space-y-4">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        aspectRatio="16:9"
                                        hover="fade"
                                        className="rounded-lg mb-6"
                                    />
                                    <div className="flex items-center space-x-4 text-sm text-primary-600">
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-medium">{article.title}</h3>
                                    <p className="text-primary-600">{article.excerpt}</p>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-serif mb-6">Stay Informed</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Subscribe to our newsletter for the latest updates and industry insights.
                            </p>
                            <form className="flex gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg text-primary"
                                />
                                <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>
        </div>
    );
};

const articles = [
    {
        title: "Sustainable Food Distribution: A Look into the Future",
        excerpt: "Exploring innovative solutions for reducing food waste and improving distribution efficiency.",
        date: "June 10, 2024",
        readTime: "4 min read",
        image: "/news-1.jpg"
    },
    {
        title: "Smart Technology in Food Storage",
        excerpt: "How IoT and smart sensors are revolutionizing temperature-controlled storage solutions.",
        date: "June 5, 2024",
        readTime: "3 min read",
        image: "/news-2.jpg"
    },
    {
        title: "The Impact of Local Food Distribution",
        excerpt: "Understanding the benefits of supporting local food systems and communities.",
        date: "May 30, 2024",
        readTime: "6 min read",
        image: "/news-3.jpg"
    }
];

export default News; 