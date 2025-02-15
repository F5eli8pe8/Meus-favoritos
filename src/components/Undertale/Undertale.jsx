

export default function Undertale(){
    return(
        <div
        className="        
        relative 
        min-h-screen 
        w-full 
        bg-cover 
        bg-center 
        flex 
        flex-col 
        items-center 
        justify-center 
        px-4 
        sm:px-10 
        overflow-x-hidden"   
        style={{ backgroundImage: "url('/images/TopTres/UndertaleFundo.gif')" }} 
        >
 
  <div className="          
          animate-fade 
          bg-black/70 
          text-white 
          p-10 
          rounded-2xl 
          max-w-[1000px] 
          w-full 
          flex 
          flex-col 
          items-center 
          justify-between 
          gap-8">

        <h1 className="text-4xl font-bold text-orange-400 self-start">#3 Undertale</h1>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 ">
          
          
          <div className="w-full md:w-1/2 text-center md:text-center">

          <p className="mt-4 text-2xl md:text-2xl">
          Undertale é lindo, uma experiência emocionante, que te prende não apenas pela gameplay completamente diferente de jogos de rpg tradicionais, mas pela história única e personagens extremamente marcantes. Undertale consegue fazer o jogador realmente sentir o peso de suas ações e escolhas, e te pune ou recompensa por isso, com certeza um jogo que fica na memória após se experimentar.  

          </p>
          </div>
       
         
          <img src="/images/TopTres/undertale.webp" alt="Undertale" className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end max-w-sm h-auto rounded-xl" />
         

          </div>
          
        </div>
      </div>
    )
}