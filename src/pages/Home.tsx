const Home = () => {
    return (
        <div className="page">
            <section className="hero">
                <h1>Cool Eat</h1>
                <p>Des solutions innovantes pour une alimentation durable</p>
                <button className="cta-button">Découvrir nos solutions</button>
            </section>

            <section className="featured-products">
                <h2>Nos Solutions</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-image"></div>
                        <h3>Restauration Durable</h3>
                        <p>Solutions écologiques pour restaurants et traiteurs</p>
                        <button className="cta-button">En savoir plus</button>
                    </div>
                    <div className="product-card">
                        <div className="product-image"></div>
                        <h3>Distribution Intelligente</h3>
                        <p>Systèmes automatisés pour la distribution alimentaire</p>
                        <button className="cta-button">En savoir plus</button>
                    </div>
                    <div className="product-card">
                        <div className="product-image"></div>
                        <h3>Circuit Court</h3>
                        <p>Connectez-vous directement avec les producteurs locaux</p>
                        <button className="cta-button">En savoir plus</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>🌱 Écologique</h3>
                        <p>Solutions respectueuses de l'environnement</p>
                    </div>
                    <div className="feature-item">
                        <h3>💡 Innovant</h3>
                        <p>Technologies de pointe pour l'alimentation moderne</p>
                    </div>
                    <div className="feature-item">
                        <h3>🤝 Local</h3>
                        <p>Soutien aux producteurs et artisans locaux</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 