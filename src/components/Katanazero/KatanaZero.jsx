

export default function KatanaZero(){
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
        style={{ backgroundImage: "url('/images/TopDois/KatanaZeroFundo.gif')" }} 
        >
  {/* Container principal*/}
 
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
{/* Container interno*/}
        <h1 className="text-4xl font-bold text-gray-300 self-start">#2 Katana-Zero</h1>
{/* posição do jogo */}
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
{/* Container flexível*/}          
          
          
          <div className="w-full md:w-1/2 text-center md:text-center">
{/* Conteiner de texto*/}

          <p className="mt-4 text-2xl md:text-2xl">
          Katana Zero, um jogo com uma história extremamente imersiva e uma experiência incrível, lutas fluidas e uma dificuldade alta para primeiras tentativas, além de uma trilha sonora que envolve o jogador facilmente no ambiente e nas cenas de ação. Katana zero é facilmente uma das melhores experiências com jogos de ação que tive, além de ser extremamente satisfatório re-jogar mais vezes e ver a evolução de suas habilidades no jogo.          </p>
{/* Parágrafo*/}
          </div>
       

{/**Imagem*/}
          <img src="/images/TopDois/katanaZeroCapa.jpg" alt="KatanaZero" className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end max-w-sm h-auto rounded-xl" />

          </div>
          
        </div>
      </div>
    )
}