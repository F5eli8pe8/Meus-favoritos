import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar o menu

export default function Header({ scrollToSection, katanaRef, outerRef, underRef }) {
    const [isOpen, setIsOpen] = useState(false);
// Estado para controlar se o menu está aberto ou fechado
    return (
        <header className="bg-gray-900 text-white w-full h-18 top-0 left-0 flex flex-col justify-center items-center relative p-4">
        {/*  Título com gradiente no texto */}    
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-blue-900 text-transparent bg-clip-text">
                &lt; Meus-Favoritos &gt;
            </div>
            
{/*  Botão de menu hambúrguer (aparece apenas em telas menores) */}             
            <button 
                className="md:hidden absolute right-4 top-4 text-white" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Se o menu estiver aberto, mostra o ícone "X", senão mostra o "Menu" */}
            </button>

 {/*  Menu de navegação (nav) (mostrado apenas se isOpen for true ou em telas maiores) */}            
            <nav className={`md:flex md:space-x-8 ${isOpen ? "flex flex-col mt-4 space-y-4" : "hidden"}`}>
               {/* Cada botão chama a função scrollToSection e fecha o menu (para mobile) o setIsOpen(false) */}
                <button onClick={() => { scrollToSection(outerRef); setIsOpen(false); }} 
                    className="text-yellow-400 text-xl px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                    #1 Posição
                </button>
                <button onClick={() => { scrollToSection(katanaRef); setIsOpen(false); }} 
                    className="text-gray-300 text-xl px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                    #2 Posição
                </button>
                <button onClick={() => { scrollToSection(underRef); setIsOpen(false); }} 
                    className="text-orange-400 text-xl px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                    #3 Posição
                </button>
            </nav>
        </header>
    );
}
