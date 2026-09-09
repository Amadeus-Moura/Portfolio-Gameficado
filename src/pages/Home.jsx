import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [isImmersing, setIsImmersing] = useState(false);
    const navigate = useNavigate();

    const handleLinkStart = () => {
        setIsImmersing(true); // Engatilha a animação de clarão
        
        // Redireciona logo após o clarão cobrir a tela (ex: 1.2s)
        setTimeout(() => {
            navigate('/main');
        }, 1200);
    };

    return (
        <section className={`home-container ${isImmersing ? 'immerse-active' : ''}`}>
            {/* O Grid matrix de fundo rodando lento simulando NerveGear */}
            <div className="matrix-background"></div>
            
            {/* O clarão absoluto que fica invisível até engatilhar o isImmersing */}
            <div className="flash-overlay"></div>

            {/* Console Central do Sistema */}
            <div className="terminal-glass">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                
                <div className="terminal-body">
                    <p className="system-text fade-in-1">SYSTEM CALL...</p>
                    <p className="system-text fade-in-2">GENERATING WORLD...</p>
                    <p className="system-text fade-in-3 success mt-small">AURA LEVEL: GREEN</p>
                    <p className="system-text fade-in-4">USER CHECK: COMPLETE</p>

                    <h1 className="welcome-player mt-large">Welcome, Player!</h1>
                    
                    <button className="link-start-btn mt-large" onClick={handleLinkStart}>
                        LINK START
                    </button>
                </div>
            </div>
        </section>
    );
}
