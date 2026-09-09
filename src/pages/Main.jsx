import './Profile.css'; // reaproveitar o estilo de contêiner escuro da base
import './Main.css'; // importando o css dedicado

export default function Main() {
    return (
        <section className="profile-container main-content-wrapper">
            <div className="hud-top-bar">
                <span className="hud-title">SYSTEM WELCOME</span>
                <span className="hud-line"></span>
                <span className="hud-location">LOC: ROOT</span>
            </div>

            <div className="main-welcome-card">
                <h1 className="main-title">
                    Bem-vindo ao Sistema!
                </h1>
                <p className="main-text">
                    A imersão foi concluída com sucesso. Navegue pelo Menu SAO à direita para explorar sua Ficha de Personagem, Habilidades e Inventário Épico.
                </p>
            </div>

            <div className="profile-matrix-background"></div>
        </section>
    );
}
