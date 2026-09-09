export default function Profile() {
    return (
        <section className="profile-container">
            {/* O cabeçalho decorativo superior do ambiente */}
            <div className="hud-top-bar">
                <span className="hud-title">PLAYER STATUS</span>
                <span className="hud-line"></span>
                <span className="hud-location">LOC: RECIFE, PE</span>
            </div>
            <div className="profile-grid">
                
                {/* COLUNA ESQUERDA: AVATAR / WIREFRAME */}
                <div className="avatar-section">
                    <div className="avatar-hologram">
                        {/* Círculos Rotativos Animados em CSS 3D */}
                        <div className="spin-ring ring-1"></div>
                        <div className="spin-ring ring-2"></div>
                        <div className="spin-ring ring-3"></div>
                        
                        {/* Ícone de perfil central */}
                        <div className="avatar-core">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                    </div>
                </div>

                {/* COLUNA CENTRAL: STATUS DE TEXTO E SIDE QUESTS */}
                <div className="stats-section">
                    <h1 className="player-name">Amadeus Moura</h1>
                    <h2 className="player-class">Desenvolvedor Backend | Node.js · TypeScript · MySQL</h2>
                    <p className="player-guild">Guild: GuardSecure · Jovem Aprendiz Administrativo</p>
                    <div className="divider-line"></div>

                    <div className="equips-list">
                        <h3>[ ATRIBUTOS DO PERSONAGEM ]</h3>
                        <ul className="attr-list">
                            <li>
                                <span className="bullet"></span>
                                <span className="attr-desc">Resolução de Problemas Complexos</span>
                                <span className="attr-val">88</span>
                            </li>
                            <li>
                                <span className="bullet"></span>
                                <span className="attr-desc">Lógica &amp; Arquitetura de Sistemas</span>
                                <span className="attr-val">85</span>
                            </li>
                            <li>
                                <span className="bullet"></span>
                                <span className="attr-desc">Aprendizado de Novas Tecnologias</span>
                                <span className="attr-val">92</span>
                            </li>
                            <li>
                                <span className="bullet"></span>
                                <span className="attr-desc">Clean Code &amp; Boas Práticas</span>
                                <span className="attr-val">80</span>
                            </li>
                            <li>
                                <span className="bullet"></span>
                                <span className="attr-desc">Trabalho em Equipe &amp; Comunicação</span>
                                <span className="attr-val">78</span>
                            </li>
                        </ul>
                        <h3 style={{marginTop:'18px'}}>[ SIDE QUESTS ATIVAS ]</h3>
                        <ul>
                            <li><span className="bullet"></span> Treino pesado de hipertrofia na base.</li>
                            <li><span className="bullet"></span> Criar linhas insanas no contrabaixo (Rock &amp; Metal).</li>
                        </ul>
                    </div>
                </div>

                {/* COLUNA DIREITA: BARRAS VITALS DE SAO E EXP */}
                <div className="vitals-section">
                    {/* Barra de Vida Verde */}
                    <div className="vital-bar-container hp-margin">
                        <div className="vital-label">
                            <span>HP (Saúde Física)</span>
                            <span>100% (Alive)</span>
                        </div>
                        <div className="bar-track">
                            <div className="bar-fill hp-fill"></div>
                        </div>
                    </div>

                    {/* Barra de MP Azul (Foco) */}
                    <div className="vital-bar-container">
                        <div className="vital-label">
                            <span>MP (Foco Mental)</span>
                            <span>90%</span>
                        </div>
                        <div className="bar-track">
                            <div className="bar-fill mp-fill"></div>
                        </div>
                    </div>
                    
                    {/* EXP Dourada */}
                    <div className="vital-bar-container mt">
                        <div className="vital-label">
                            <span>EXP (Evolução Profissional em TI)</span>
                            <span>Em constante nível</span>
                        </div>
                        <div className="bar-track thin-track">
                            <div className="bar-fill exp-fill"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* O Grid matrix escuro ao fundo apenas por estética ambiente */}
            <div className="profile-matrix-background"></div>
        </section>
    );
}