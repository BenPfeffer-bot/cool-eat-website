const About = () => {
    return (
        <div className="page about">
            <section className="about-hero">
                <h1>Qui Sommes-Nous ?</h1>
                <p>Le Casier Français, leader dans la distribution automatique française</p>
            </section>

            <section className="about-content">
                <div className="about-section">
                    <h2>Notre Mission</h2>
                    <p>Nous sommes concepteurs et fabricants de distributeurs automatiques et connectés. Un concept innovant, sur-mesure et répondant à de nombreux usages de la vie quotidienne.</p>
                </div>

                <div className="about-section">
                    <h2>Pourquoi Nous Choisir ?</h2>
                    <ul className="features-list">
                        <li>✓ Fabriqués en France</li>
                        <li>✓ Modulables sur-mesure</li>
                        <li>✓ Disponibles à l'achat ou en location</li>
                        <li>✓ Distribution de vos produits en circuit court</li>
                        <li>✓ Adaptables à vos produits : tempéré, réfrigéré ou congelé</li>
                        <li>✓ Qualité haut de gamme avec une expertise industrielle de pointe</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>Notre Engagement</h2>
                    <p>Nous nous engageons à fournir des solutions innovantes et durables pour répondre aux besoins de nos clients, tout en maintenant les plus hauts standards de qualité et de service.</p>
                </div>
            </section>
        </div>
    );
};

export default About; 