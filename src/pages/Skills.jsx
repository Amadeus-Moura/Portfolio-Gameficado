export default function Skills() {
    return (
        <section className="profile-container" style={{ overflowY: 'auto', height: 'auto', minHeight: '100vh' }}>
            <div className="hud-top-bar">
                <span className="hud-title">BATTLE SKILLS</span>
                <span className="hud-line"></span>
                <span className="hud-location">SYSTEM TECH</span>
            </div>
            <div className="skills-wrapper">

                {/* SET DE ATAQUE */}
                <div className="skill-tree attack-tree">
                    <h2 className="tree-title">⚔️ Skills de Ataque (Linguagens & Frameworks)</h2>
                    <div className="tree-items">
                        <div className="skill-item">
                            <span className="skill-name">Node.js & TypeScript</span>
                            <div className="skill-bar"><div className="skill-fill atk-fill" style={{width: '80%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">JavaScript</span>
                            <div className="skill-bar"><div className="skill-fill atk-fill" style={{width: '82%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Python &amp; Engenharia de IA (LLMs/Gemini)</span>
                            <div className="skill-bar"><div className="skill-fill atk-fill" style={{width: '78%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">React (Zustand &amp; Ecossistema)</span>
                            <div className="skill-bar"><div className="skill-fill atk-fill" style={{width: '60%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">APIs RESTful (Design &amp; Consumo)</span>
                            <div className="skill-bar"><div className="skill-fill atk-fill" style={{width: '78%'}}></div></div>
                        </div>
                    </div>
                </div>

                {/* SET DE PASSIVAS */}
                <div className="skill-tree passive-tree">
                    <h2 className="tree-title">🛡️ Passivas (Dados, Infra &amp; Ferramentas)</h2>
                    <div className="tree-items">
                        <div className="skill-item">
                            <span className="skill-name">MySQL · PostgreSQL · SQLite</span>
                            <div className="skill-bar"><div className="skill-fill pass-fill" style={{width: '75%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Docker &amp; Cloud (Oracle OCI / Linux 24/7)</span>
                            <div className="skill-bar"><div className="skill-fill pass-fill" style={{width: '76%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Prisma ORM &amp; Modelagem Relacional</span>
                            <div className="skill-bar"><div className="skill-fill pass-fill" style={{width: '70%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Git &amp; GitHub (CI/CD &amp; Deploy Keys)</span>
                            <div className="skill-bar"><div className="skill-fill pass-fill" style={{width: '85%'}}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Linux &amp; Suporte de TI (Hardware/Software)</span>
                            <div className="skill-bar"><div className="skill-fill pass-fill" style={{width: '72%'}}></div></div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="profile-matrix-background"></div>
        </section>
    );
}