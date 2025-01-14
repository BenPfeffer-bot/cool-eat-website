const Home = () => {
    return (
        <div className="page">
            <section className="hero">
                <h1>Le Casier Français</h1>
                <p>Le leader du casier connecté</p>
                <button className="cta-button">Découvrir</button>
            </section>

            <section className="featured-products">
                <h2>Nos Solutions</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-image"></div>
                        <h3>Producteurs et Artisans</h3>
                        <p>Solution idéale pour vendre vos produits en circuit court</p>
                        <button>En savoir plus</button>
                    </div>
                    <div className="product-card">
                        <div className="product-image"></div>
                        <h3>Logistique</h3>
                        <p>Casier consigne automatique pour vos besoins logistiques</p>
                        <button>En savoir plus</button>
                    </div>
                    <div className="product-card">
                        <div className="product-image"></div>
                        <h3>Restauration Collective</h3>
                        <p>Distributeurs automatiques alimentaires pour vos établissements</p>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 