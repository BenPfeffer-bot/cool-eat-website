const Contact = () => {
    return (
        <div className="page contact">
            <section className="contact-hero">
                <h1>Contact</h1>
                <p>Nous sommes à votre écoute</p>
            </section>

            <section className="contact-content">
                <div className="contact-info">
                    <div className="info-section">
                        <h2>Coordonnées</h2>
                        <p>📞 03 20 96 76 02</p>
                        <p>✉️ contact@lecasierfrancais.fr</p>
                        <p>🏢 Siège social: France</p>
                    </div>

                    <div className="info-section">
                        <h2>Horaires</h2>
                        <p>Lundi - Vendredi: 9h00 - 18h00</p>
                        <p>Service client disponible pour vous accompagner</p>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Envoyez-nous un message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nom *</label>
                            <input type="text" id="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Sujet *</label>
                            <input type="text" id="subject" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" rows={5} required></textarea>
                        </div>

                        <button type="submit" className="cta-button">Envoyer</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact; 