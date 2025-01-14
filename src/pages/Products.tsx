const Products = () => {
    return (
        <div className="page products">
            <section className="products-hero">
                <h1>Nos Produits</h1>
                <p>Découvrez notre gamme de casiers connectés</p>
            </section>

            <section className="products-grid">
                <div className="product-card large">
                    <div className="product-image"></div>
                    <h2>Casiers pour Producteurs et Artisans</h2>
                    <p>Solution idéale pour vendre vos fruits, légumes et autres produits locaux en continu. Accessible 7j/7 24h/24.</p>
                    <ul className="product-features">
                        <li>✓ Meilleure rémunération sur la vente</li>
                        <li>✓ Commerce accessible 24/7</li>
                        <li>✓ Coûts d'exploitation réduits</li>
                    </ul>
                    <button className="cta-button">En savoir plus</button>
                </div>

                <div className="product-card large">
                    <div className="product-image"></div>
                    <h2>Casiers Logistiques</h2>
                    <p>Notre casier consigne automatique répond à vos besoins logistiques les plus précis.</p>
                    <ul className="product-features">
                        <li>✓ SAV internalisé et fiable</li>
                        <li>✓ Modulable selon l'emplacement</li>
                        <li>✓ Fabrication française</li>
                    </ul>
                    <button className="cta-button">En savoir plus</button>
                </div>

                <div className="product-card large">
                    <div className="product-image"></div>
                    <h2>Casiers Restauration</h2>
                    <p>Distributeurs automatiques alimentaires pour vos établissements.</p>
                    <ul className="product-features">
                        <li>✓ Casiers réfrigérés</li>
                        <li>✓ Accessibles 24/7</li>
                        <li>✓ Fonctionnement autonome</li>
                    </ul>
                    <button className="cta-button">En savoir plus</button>
                </div>
            </section>
        </div>
    );
};

export default Products; 