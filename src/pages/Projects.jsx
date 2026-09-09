import { useState } from 'react';
import droneImg from '/projects/drone.png';
import mediaflowImg from '/projects/mediaflow.png';

export default function Projects() {
    const [selected, setSelected] = useState(null);

    const projects = [
        {
            title: "SmartSync — Sistema SCADA B2B",
            rarity: "Item Lendário",
            rarityColor: "legendary",
            role: "Líder Técnico · Projeto IoT / B2B · Ago/2024 – Presente",
            stack: "React · Node.js · Prisma · WebSockets · BullMQ",
            desc: "Plataforma de controle de dispositivos IoT a longa distância. Possui painel sinótico de alta densidade visual, motor de permissões (RBAC) e interface baseada nas normas NR-12.",
            fullDesc: "O SmartSync nasceu com o objetivo de monitorar e controlar o consumo de energia e dispositivos IoT em tempo real para gestão predial e industrial. Atuei como líder técnico, sendo responsável por toda a arquitetura do sistema, configuração dos servidores locais, criação e documentação da API RESTful em Node.js com TypeScript, modelagem do banco de dados via Prisma ORM e integração de eventos em tempo real com WebSockets e BullMQ. O projeto ainda está ativo e em expansão contínua.",
            image: null,
            github: null,
            status: "Em desenvolvimento"
        },
        {
            title: "MediaFlow — Transcrição de Contrabaixo",
            rarity: "Item Épico",
            rarityColor: "epic",
            role: "Projeto Pessoal · Open-Source · Engenharia de Áudio",
            stack: "TypeScript · Node.js · yt-dlp · DOM Manipulation",
            desc: "Plataforma open-source que transcreve músicas em tablaturas interativas de contrabaixo, sincronizando áudio e mapeamento de frequências no fretboard em tempo real.",
            fullDesc: "O MediaFlow é onde eu uno engenharia de software com a minha vivência no contrabaixo. É uma plataforma open-source que extrai mídias via links utilizando a biblioteca yt-dlp e aplica um algoritmo customizado para mapear frequências sonoras diretamente para as casas do instrumento (fretboard). Para garantir que a tablatura acompanhe o groove perfeitamente em tempo real, implementei técnicas de manipulação direta do DOM, focando em altíssima performance e sincronia sem sobrecarregar o renderizador.",
            image: mediaflowImg,
            github: "https://github.com/Amadeus-Moura/MidiaFlow",
            status: "Desenvolvimento ativo"
        },
        {
            title: "Drone Bombeiro Autônomo",
            rarity: "Item Raro",
            rarityColor: "rare",
            role: "Projeto Acadêmico · Lógica e Hardware",
            stack: "Python · Lógica de Navegação · Modelagem Matemática",
            desc: "Conceitualização de um sistema de software embarcado para um drone de combate a incêndios. Focado em navegação autônoma e modelagem matemática para cálculo de pressão.",
            fullDesc: "Projeto acadêmico interdisciplinar desenvolvido com foco em modelagem matemática e sistemas embarcados. Consistiu na criação de um modelo computacional conceitual para um drone de combate a incêndios, envolvendo cálculo de trajetória, pressão hidráulica e alcance do jato d'água em diferentes condições de vento e altitude. O software foi estruturado em Python, aliando lógica de navegação autônoma à física de fluidos.",
            image: droneImg,
            github: "https://github.com/Amadeus-Moura/Simula-Voo-Drone-Bombeiro",
            status: "Concluído"
        }
    ];

    return (
        <section className="profile-container scrollable">
            <div className="hud-top-bar" style={{ position: 'fixed' }}>
                <span className="hud-title">INVENTORY / PROJECTS</span>
                <span className="hud-line"></span>
                <span className="hud-location">ITEMS RECOVERED: {projects.length}</span>
            </div>

            <div className="projects-wrapper">
                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="project-card" style={{ animationDelay: `${0.3 + (idx * 0.2)}s` }}>
                            <div className={`project-rarity ${proj.rarityColor}`}>{proj.rarity}</div>
                            <h2 className="project-title">{proj.title}</h2>
                            <p style={{ fontSize: '0.7rem', color: '#00d2ff', margin: '4px 0 2px', letterSpacing: '0.05em' }}>{proj.role}</p>
                            <p style={{ fontSize: '0.68rem', color: '#a0c4d8', margin: '0 0 8px', fontFamily: 'monospace' }}>[ {proj.stack} ]</p>
                            <div className="divider-line small-div"></div>
                            <p className="project-desc">{proj.desc}</p>

                            <button className="equip-btn" onClick={() => setSelected(proj)}>INSPECT ITEM</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL DE INSPEÇÃO */}
            {selected && (
                <div className="inspect-overlay" onClick={() => setSelected(null)}>
                    <div className="inspect-panel" onClick={e => e.stopPropagation()}>

                        {/* Botão fechar */}
                        <button className="inspect-close" onClick={() => setSelected(null)}>✕</button>

                        {/* Badge de raridade */}
                        <div className={`inspect-rarity-badge ${selected.rarityColor}`}>{selected.rarity}</div>

                        {/* Conteúdo — lado esquerdo */}
                        <div className="inspect-content">
                            <h2 className="inspect-title">{selected.title}</h2>

                            <div className="inspect-meta">
                                <span className="inspect-meta-item">
                                    <span className="meta-label">STACK</span>
                                    <span className="meta-value">[ {selected.stack} ]</span>
                                </span>
                                <span className="inspect-meta-item">
                                    <span className="meta-label">STATUS</span>
                                    <span className="meta-value status-active">{selected.status}</span>
                                </span>
                            </div>

                            <p className="inspect-role">{selected.role}</p>

                            <div className="divider-line" style={{margin: '16px 0'}}></div>

                            <p className="inspect-fulldesc">{selected.fullDesc}</p>

                            {selected.github && (
                                <a href={selected.github} target="_blank" rel="noreferrer" className="inspect-github-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                    </svg>
                                    Ver no GitHub
                                </a>
                            )}
                        </div>

                        {/* Imagem — lado direito */}
                        <div className="inspect-image-container">
                            {selected.image ? (
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="inspect-image"
                                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />
                            ) : null}
                            <div className="inspect-image-placeholder" style={{ display: selected.image ? 'none' : 'flex' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="60" height="60" opacity="0.3">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                                <span>CONFIDENCIAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="profile-matrix-background" style={{ position: 'fixed' }}></div>
        </section>
    );
}