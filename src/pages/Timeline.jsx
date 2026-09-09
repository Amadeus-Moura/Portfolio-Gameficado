export default function Timeline() {
    return (
        <section className="profile-container">
            <div className="hud-top-bar">
                <span className="hud-title">PLAYER TIMELINE</span>
                <span className="hud-line"></span>
                <span className="hud-location">SYSTEM LOG</span>
            </div>

            <div className="timeline-wrapper">
                <div className="mission-card">
                    <h2 className="mission-title">🏹 Objetivo Principal da Campanha</h2>
                    <div className="divider-line"></div>
                    <p className="mission-text">
                        Evolução profissional direta para a área de TI. 
                        Estou preparando o meu arsenal diário e afiando o currículo para encarar processos seletivos 
                        e desafios técnicos monstruosos nas maiores "guildas" corporativas do mercado.
                    </p>
                    <div className="mission-status">
                        STATUS: <span className="in-progress">EM ANDAMENTO...</span>
                    </div>
                </div>
            </div>
            
            <div className="profile-matrix-background"></div>
        </section>
    );
}
