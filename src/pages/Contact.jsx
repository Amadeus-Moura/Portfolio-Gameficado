import './Contact.css';
import './Profile.css';

export default function Contact() {
    return (
        <section className="profile-container">
            <div className="hud-top-bar">
                <span className="hud-title">MENSAGENS DIRETAS</span>
                <span className="hud-line"></span>
                <span className="hud-location">CANAL: ABERTO</span>
            </div>

            <div className="contact-grid">

                {/* COLUNA ESQUERDA: Card principal de contato */}
                <div className="contact-main-card">
                    <div className="contact-avatar-ring">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <h1 className="contact-name">Amadeus Moura</h1>
                    <p className="contact-role">Desenvolvedor Backend · Node.js · TypeScript · MySQL</p>
                    <p className="contact-status">
                        <span className="status-dot"></span>
                        Online · Aberto a oportunidades
                    </p>
                    <div className="divider-line" style={{margin: '20px 0'}}></div>
                    <p className="contact-bio">
                        Base em Recife, PE. Disponível para projetos freelance,
                        estágios e vagas CLT na área de desenvolvimento backend.
                    </p>
                </div>

                {/* COLUNA DIREITA: Cards de canal */}
                <div className="contact-channels">

                    <a href="mailto:amadeus.moura1@gmail.com" className="channel-card email-card">
                        <div className="channel-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className="channel-info">
                            <span className="channel-label">E-MAIL</span>
                            <span className="channel-value">amadeus.moura1@gmail.com</span>
                            <span className="channel-action">Enviar mensagem →</span>
                        </div>
                    </a>

                    <a href="tel:+5581997113723" className="channel-card phone-card">
                        <div className="channel-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div className="channel-info">
                            <span className="channel-label">TELEFONE / WHATSAPP</span>
                            <span className="channel-value">+55 81 99711-3723</span>
                            <span className="channel-action">Ligar ou chamar →</span>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/amadeus-moura" target="_blank" rel="noreferrer" className="channel-card linkedin-card">
                        <div className="channel-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                        <div className="channel-info">
                            <span className="channel-label">LINKEDIN</span>
                            <span className="channel-value">linkedin.com/in/amadeus-moura</span>
                            <span className="channel-action">Ver perfil profissional →</span>
                        </div>
                    </a>

                    <a href="https://github.com/Amadeus-Moura" target="_blank" rel="noreferrer" className="channel-card github-card">
                        <div className="channel-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </div>
                        <div className="channel-info">
                            <span className="channel-label">GITHUB</span>
                            <span className="channel-value">github.com/Amadeus-Moura</span>
                            <span className="channel-action">Ver repositórios →</span>
                        </div>
                    </a>

                </div>
            </div>

            <div className="profile-matrix-background"></div>
        </section>
    );
}
