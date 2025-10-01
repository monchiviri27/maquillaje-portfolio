// src/components/MenuButton.jsx - VERSIÓN CORREGIDA
import React, { useState, useEffect } from 'react';

const MenuButton = ({ links, cta }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        document.body.style.overflowY = newState ? 'hidden' : 'auto';
        document.body.style.overflowX = 'hidden';
    };

    // Cerrar menú al redimensionar (si se cambia a desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isOpen) {
                setIsOpen(false);
                document.body.style.overflowY = 'auto';
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <>
            {/* Botón Hamburguesa */}
            <button 
                onClick={toggleMenu} 
                aria-label={isOpen ? "Cerrar Menú" : "Abrir Menú"}
                className="relative z-[100] text-gray-900 focus:outline-none p-2"
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                    />
                </svg>
            </button>

            {/* Fondo Oscuro Mejorado */}
            {isOpen && (
                <div 
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/90 z-[90] lg:hidden" 
                    aria-hidden="true"
                ></div>
            )}

            {/* Menú Lateral Corregido */}
            <nav 
                className={`fixed top-0 right-0 h-full w-[85vw] max-w-[100%] bg-white z-[95] shadow-2xl transform transition-transform duration-300 ease-in-out p-6 lg:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ 
                    height: '100dvh', // Usa dynamic viewport height para móviles
                    paddingTop: 'calc(2rem + env(safe-area-inset-top, 0px))'
                }}
            >
                <div className="flex flex-col space-y-5 mt-12">
                    {links.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={toggleMenu}
                            className="title-font text-xl font-semibold text-gray-800 hover:text-pink-600 transition duration-150 border-b border-gray-100 pb-3"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* CTA Mejorado */}
                    <div className="pt-6">
                        <a 
                            href={cta.href} 
                            onClick={toggleMenu}
                            className="block w-full text-center px-4 py-3 bg-pink-600 text-white title-font font-bold uppercase tracking-widest hover:bg-pink-700 transition duration-300 rounded-sm text-sm"
                        >
                            {cta.text}
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MenuButton;
