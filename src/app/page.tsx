'use client'

import { useRef } from "react";
import OuterWilds from "@/components/OuterWilds/ParteOuter"; 
import KatanaZero from "@/components/Katanazero/KatanaZero";
import Header from  "@/components/Header/Header"
import Undertale from "@/components/Undertale/Undertale"

export default function Home() {
    const katanaRef = useRef(null);
    const outerRef = useRef(null);
    const underRef = useRef(null)
    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div>
            {/* Passando as referências e a função para o Header */}
            <Header scrollToSection={scrollToSection} katanaRef={katanaRef} outerRef={outerRef} underRef={underRef} />
            
            {/* Seções com refs */}
            <div ref={underRef} >
            <Undertale />
            </div>
            <div ref={katanaRef}>
                <KatanaZero />
            </div>
            <div ref={outerRef}>
                <OuterWilds />
            </div>
        </div>
    );
}
