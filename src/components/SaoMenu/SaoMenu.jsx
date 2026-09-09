import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SaoMenu() {
    const location = useLocation();
    
    // Todos OS HOOKS DECLARADOS SEMPRE (A Regra de Ouro do React)
    const [isOpen, setIsOpen] = useState(false);
    const [isTriggerHidden, setIsTriggerHidden] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null); // 'profile', 'projects', 'contact'
    
    const timerRef = useRef(null);
    const navRef = useRef(null);

    const startInactivityTimer = () => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setActiveSubMenu(null);
        }, 4000);
    };

    const stopInactivityTimer = () => {
        clearTimeout(timerRef.current);
    };

    const openMenu = () => {
        setIsTriggerHidden(true);
        setTimeout(() => setIsOpen(true), 10);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveSubMenu(null);
        setTimeout(() => {
            setIsTriggerHidden(false);
        }, 500);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const isClickInsideNav = navRef.current && navRef.current.contains(e.target);
            const isClickOnTrigger = e.target.closest('#sao-trigger');

            if (isOpen && !isClickInsideNav && !isClickOnTrigger) {
                closeMenu();
                return;
            }

            if (!e.target.closest('.has-submenu')) {
                setActiveSubMenu(null);
                stopInactivityTimer();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    // EARLY RETURN: APÓS todos os hooks, agora sim nós abortamos a renderização caso seja a tela preta inicial!
    // Sem quebrar as leis do React.
    if (location.pathname === '/') {
        return null;
    }

    return (
        <>
            <button 
                id="sao-trigger" 
                className={`sao-btn sao-trigger ${isTriggerHidden ? 'hidden' : ''}`}
                onClick={openMenu}
            >
                <span className="hamburger-icon"></span>
            </button>
            
            <div id="sao-menu-container" className="sao-menu-container" ref={navRef}>
                <nav id="sao-nav" className={`sao-nav ${isTriggerHidden ? '' : 'hidden'} ${isOpen ? 'open' : ''}`}>
                    <ul className="sao-menu-list">
                        
                        {/* 1: PERFIL */}
                        <li style={{ "--delay": "0.1s" }} className={`has-submenu ${activeSubMenu === 'profile' ? 'active-submenu' : ''}`}>
                            <button 
                                className="sao-btn sao-icon-btn"
                                onMouseEnter={() => { setActiveSubMenu('profile'); startInactivityTimer(); }}
                                onClick={(e) => { e.stopPropagation(); setActiveSubMenu('profile'); startInactivityTimer(); }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </button>
                            <ul className="sao-submenu" onMouseEnter={stopInactivityTimer} onMouseLeave={startInactivityTimer}>
                                <li style={{ "--sub-delay": "0.1s" }}><Link to="/main" onClick={closeMenu}>Player Status</Link></li>
                                <li style={{ "--sub-delay": "0.2s" }}><Link to="/about" onClick={closeMenu}>Sobre Mim</Link></li>
                                <li style={{ "--sub-delay": "0.3s" }}><Link to="/timeline" onClick={closeMenu}>Minha Trajetória</Link></li>
                            </ul>
                        </li>

                        {/* 2: PROJETOS */}
                        <li style={{ "--delay": "0.2s" }} className={`has-submenu ${activeSubMenu === 'projects' ? 'active-submenu' : ''}`}>
                            <button 
                                className="sao-btn sao-icon-btn"
                                onMouseEnter={() => { setActiveSubMenu('projects'); startInactivityTimer(); }}
                                onClick={(e) => { e.stopPropagation(); setActiveSubMenu('projects'); startInactivityTimer(); }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                            </button>
                            <ul className="sao-submenu" onMouseEnter={stopInactivityTimer} onMouseLeave={startInactivityTimer}>
                                <li style={{ "--sub-delay": "0.1s" }}><Link to="/projects" onClick={closeMenu}>Meus Projetos</Link></li>
                                <li style={{ "--sub-delay": "0.2s" }}><Link to="/skills" onClick={closeMenu}>Habilidades Técnicas</Link></li>
                            </ul>
                        </li>

                        {/* 3: CONTATO */}
                        <li style={{ "--delay": "0.3s" }} className={`has-submenu ${activeSubMenu === 'contact' ? 'active-submenu' : ''}`}>
                            <button 
                                className="sao-btn sao-icon-btn"
                                onMouseEnter={() => { setActiveSubMenu('contact'); startInactivityTimer(); }}
                                onClick={(e) => { e.stopPropagation(); setActiveSubMenu('contact'); startInactivityTimer(); }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </button>
                            <ul className="sao-submenu" onMouseEnter={stopInactivityTimer} onMouseLeave={startInactivityTimer}>
                                <li style={{ "--sub-delay": "0.1s" }}><Link to="/contact" onClick={closeMenu}>Mensagens (Contato)</Link></li>
                            </ul>
                        </li>

                        {/* SAIR (X) */}
                        <li style={{ "--delay": "0.4s" }} className={`close-menu-item has-submenu ${activeSubMenu === 'close' ? 'active-submenu' : ''}`}>
                            <button 
                                className="sao-btn sao-icon-btn close-btn" 
                                onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                onMouseEnter={() => { setActiveSubMenu('close'); startInactivityTimer(); }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <ul className="sao-submenu logout-variant" onMouseEnter={stopInactivityTimer} onMouseLeave={startInactivityTimer}>
                                <li style={{ "--sub-delay": "0.1s" }}><Link to="/" onClick={closeMenu}>Log Out (Sair do Sistema)</Link></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    );
}
