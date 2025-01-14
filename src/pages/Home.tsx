import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-screen relative overflow-hidden bg-primary-50">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-50/90" />
                    <img
                        src="/hero-bg.jpg"
                        alt="Background"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <Container className="relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-3xl animate-fade-in">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
                            Revolutionizing Food Distribution
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-600 mb-8 font-light tracking-wide">
                            Creating sustainable solutions for a better food system
                        </p>
                        <Link
                            to="/about"
                            className="inline-block text-lg border-b-2 border-primary pb-1 hover:pb-2 transition-all duration-300"
                        >
                            Discover Our Mission
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif">Our Approach</h2>
                            <p className="text-xl text-primary-600 leading-relaxed">
                                We combine innovative technology with sustainable practices to create
                                a more efficient and environmentally conscious food distribution system.
                            </p>
                            <Link
                                to="/products"
                                className="inline-block text-lg border-b-2 border-primary pb-1 hover:pb-2 transition-all duration-300"
                            >
                                Explore Solutions
                            </Link>
                        </div>
                        <div className="aspect-square bg-primary-100 relative overflow-hidden">
                            <img
                                src="/approach.jpg"
                                alt="Our Approach"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-primary-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl uppercase tracking-widest mb-4">Sustainable</h3>
                            <p className="text-primary-600">
                                Eco-friendly solutions that reduce waste and environmental impact
                                throughout the food distribution chain.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl uppercase tracking-widest mb-4">Efficient</h3>
                            <p className="text-primary-600">
                                Smart technology that optimizes delivery routes and reduces food waste
                                through precise inventory management.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl uppercase tracking-widest mb-4">Local</h3>
                            <p className="text-primary-600">
                                Supporting local producers and creating stronger connections between
                                farmers and consumers.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-serif mb-6">Ready to Transform Food Distribution?</h2>
                        <p className="text-xl mb-8 text-white/80">
                            Join us in creating a more sustainable and efficient food system.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block text-lg border-b-2 border-white pb-1 hover:pb-2 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Latest News Preview */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif">Latest Updates</h2>
                            <p className="text-xl text-primary-600 leading-relaxed">
                                Stay informed about our latest innovations and success stories in
                                sustainable food distribution.
                            </p>
                            <Link
                                to="/news"
                                className="inline-block text-lg border-b-2 border-primary pb-1 hover:pb-2 transition-all duration-300"
                            >
                                View All News
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <article className="space-y-4">
                                <time className="text-sm text-primary-500">January 15, 2024</time>
                                <h3 className="text-xl font-medium">Expanding Our Network of Local Producers</h3>
                                <p className="text-primary-600">
                                    We're proud to announce new partnerships with local farmers...
                                </p>
                            </article>
                            <article className="space-y-4">
                                <time className="text-sm text-primary-500">December 28, 2023</time>
                                <h3 className="text-xl font-medium">Introducing Smart Routing Technology</h3>
                                <p className="text-primary-600">
                                    Our new AI-powered routing system reduces delivery times...
                                </p>
                            </article>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home; 