export default function About() {
    return (
        <section className="profile-container" style={{ overflowY: 'auto', height: 'auto', minHeight: '100vh' }}>
            <div className="hud-top-bar" style={{ position: 'fixed', top: '20px' }}>
                <span className="hud-title">PLAYER LORE</span>
                <span className="hud-line"></span>
                <span className="hud-location">SYSTEM ARCHIVES</span>
            </div>

            <div className="about-wrapper">
                
                {/* COLUNA ESQUERDA: Informações Rápidas e Vitais */}
                <div className="about-left-col">
                    <div className="about-glass-card identity-card">
                        <div className="avatar-core-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        
                        <h2 className="about-title" style={{ textAlign: 'center' }}>[ Player Info ]</h2>
                        <div className="divider-line" style={{ background: 'linear-gradient(90deg, transparent, #00d2ff, transparent)' }}></div>
                        
                        <div className="info-list">
                            <div className="info-box">
                                <span className="info-label">Nome de Registro</span>
                                <span className="info-value">Amadeus Moura dos Santos</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Servidor Base</span>
                                <span className="info-value">Recife, PE</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Classe Atual</span>
                                <span className="info-value">Desenvolvedor Backend Júnior<br/>Jovem Aprendiz · GuardSecure</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Formação</span>
                                <span className="info-value">Ciência da Computação — UNIFG<br/>Conclusão: Dez/2026</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Contato</span>
                                <span className="info-value">amadeus.moura1@gmail.com<br/>+55 81 99711-3723</span>
                            </div>
                            
                            <a href="https://linkedin.com/in/amadeus-moura" target="_blank" rel="noreferrer">
                                <button className="equip-btn" style={{ marginTop: '30px' }}>ESTABELECER CONEXÃO</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* COLUNA DIREITA: A Lore, Missões e Background */}
                <div className="about-right-col">
                    
                    {/* Background */}
                    <div className="about-glass-card block-bg">
                        <h2 className="about-title highlight-orange">📖 Caminho do Aprendizado (Background)</h2>
                        <div className="divider-line"></div>
                        <p className="about-text">
                            Minha jornada na programação começou há cerca de três anos e meio. Desde então, mergulhei de cabeça na construção de sistemas lógicos, estruturação de APIs e arquitetura de banco de dados. Concilio a <strong>Ciência da Computação na UNIFG</strong> com a vivência prática na <strong>GuardSecure</strong>, onde atuo em suporte de TI, gestão de almoxarifado e organização documental — habilidades que considero essenciais para escrever código limpo e trabalhar bem em equipe.
                        </p>
                    </div>

                    {/* Missão */}
                    <div className="about-glass-card block-mission">
                        <h2 className="about-title highlight-cyan">🎯 Missão Principal (Objetivos)</h2>
                        <div className="divider-line"></div>
                        <p className="about-text">
                            Busco ativamente minha primeira oportunidade como <strong>Desenvolvedor Backend Júnior ou Estagiário</strong>. Meu arsenal está sendo afiado diariamente com projetos reais — <em>SmartSync</em> e <em>MediaFlow</em> — aplicando Node.js, TypeScript e MySQL. Quero evoluir junto com um time experiente e agregar valor real desde o primeiro dia.
                        </p>
                    </div>

                    {/* Experiência GuardSecure */}
                    <div className="about-glass-card block-mission">
                        <h2 className="about-title highlight-cyan">🏢 Missão Atual — GuardSecure</h2>
                        <div className="divider-line"></div>
                        <p className="about-text" style={{ marginBottom: '10px' }}>
                            <strong>Jovem Aprendiz Administrativo</strong> · Set/2025 – Presente
                        </p>
                        <ul style={{ paddingLeft: '16px', color: '#a0c4d8', fontSize: '0.85rem', lineHeight: '1.8' }}>
                            <li>Suporte de TI: formatações, diagnóstico de hardware/software e reparos técnicos.</li>
                            <li>Controle rigoroso de estoque — fluxo de equipamentos, uniformes e EPIs.</li>
                            <li>Gestão documental e arquivo físico com sigilo e rastreabilidade.</li>
                            <li>Uso de Excel e Pacote Office no suporte operacional diário.</li>
                        </ul>
                    </div>

                    {/* Side Quests */}
                    <div className="about-glass-card block-quests">
                        <h2 className="about-title highlight-purple">📜 Inventário de Personalidade (Side Quests)</h2>
                        <div className="divider-line"></div>
                        <p className="about-text" style={{ marginBottom: '15px' }}>
                            A disciplina que aplico no código se reflete no resto da minha rotina. Minha estamina diária vai violenta para o treino de <strong>hipertrofia</strong> na academia (<i style={{color: '#ff9600'}}>o objetivo é crescer!</i>).
                        </p>
                        <p className="about-text">
                            Sou aficionado por otimizar sistemas de ponta a ponta e atuo como <strong>baixista</strong> nas horas vagas, criando linhas de Rock e Metal.
                        </p>
                    </div>

                </div>
            </div>

            <div className="profile-matrix-background" style={{ position: 'fixed' }}></div>
        </section>
    );
}