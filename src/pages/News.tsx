const News = () => {
    return (
        <div className="page news">
            <section className="news-hero">
                <h1>Actualités</h1>
                <p>Restez informé de nos dernières nouvelles</p>
            </section>

            <section className="news-grid">
                <article className="news-card">
                    <div className="news-image"></div>
                    <div className="news-content">
                        <div className="news-meta">
                            <span className="category">Portraits de producteurs</span>
                            <span className="date">13 janvier 2025</span>
                        </div>
                        <h2>Les Boucheries du Bocage : des casiers boucherie pour rapprocher les saveurs du centre-ville</h2>
                        <p>Bienvenue à Fougères, à la rencontre de Frédéric et Sonia, artisans passionnés à la tête...</p>
                        <button className="read-more">Lire la suite</button>
                    </div>
                </article>

                <article className="news-card">
                    <div className="news-image"></div>
                    <div className="news-content">
                        <div className="news-meta">
                            <span className="category">Nos casiers</span>
                            <span className="date">30 décembre 2024</span>
                        </div>
                        <h2>Le casier connecté Le Casier Français, une solution idéale pour les commerçants</h2>
                        <p>Que vous soyez boulanger, traiteur, restaurateur, pisciniste ou quincailler...</p>
                        <button className="read-more">Lire la suite</button>
                    </div>
                </article>

                <article className="news-card">
                    <div className="news-image"></div>
                    <div className="news-content">
                        <div className="news-meta">
                            <span className="category">Innovation</span>
                            <span className="date">21 novembre 2024</span>
                        </div>
                        <h2>Nouvelle Application Mobile : Click and Case Collect</h2>
                        <p>Découvrez notre nouvelle fonctionnalité permettant à vos clients d'acheter en ligne...</p>
                        <button className="read-more">Lire la suite</button>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default News; 