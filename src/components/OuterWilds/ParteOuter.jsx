
export default function OuterWilds(){
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
        style={{ backgroundImage: "url('/images/TopUm/IrF.gif')" }} 
        >
 {/**       relative          Posição relativa para permitir posicionamento absoluto interno 
            min-h-screen        Garante altura mínima de 100% da tela 
            w-full              Ocupa toda a largura da tela 
            bg-cover            Faz com que a imagem de fundo cubra toda a área disponível 
            bg-center           Centraliza a imagem de fundo 
            flex               Usa flexbox para organizar os elementos internos 
            flex-col            Organiza os elementos em coluna 
            items-center        Alinha os itens horizontalmente ao centro 
            justify-center      Centraliza os itens verticalmente 
            px-4               Adiciona um padding horizontal pequeno 
            sm:px-10            Em telas pequenas ou maiores, aumenta o padding horizontal 
            overflow-x-hidden   Evita que a página tenha rolagem horizontal  */}


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
        
  {/**animate-fade      /* Aplica uma animação de fade-in 
                bg-black/70        Define um fundo preto com 70% de opacidade 
                text-white         Define a cor do texto como branca 
                p-10               Adiciona padding interno de 2.5rem 
                rounded-2xl        Bordas arredondadas 
                max-w-[1000px]     Define a largura máxima do container como 1000px 
                w-full             Faz com que ocupe toda a largura disponível 
                flex               Usa flexbox 
                flex-col           Organiza os elementos em coluna 
                items-center       Alinha os itens horizontalmente ao centro 
                justify-between    Distribui os elementos com espaço entre eles 
                gap-8              Adiciona um espaçamento de 2rem entre os itens internos  */}

        <h1 className="text-4xl font-bold text-yellow-500 self-start">#1 Outer Wilds</h1>
  {/**          text-4xl         Define um tamanho de fonte grande (4xl ≈ 2.25rem) 
                font-bold        Aplica negrito ao texto 
                text-yellow-500  Define a cor do texto como amarelo 
                self-start       Faz com que o título se alinhe à esquerda dentro do container */}

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 ">
  {/**          flex               Usa flexbox 
                flex-col           Em telas pequenas, os itens são empilhados verticalmente 
                md:flex-row        Em telas médias e maiores, os itens são organizados lado a lado 
                items-center       Alinha os itens verticalmente ao centro 
                justify-between    Distribui os itens uniformemente 
                w-full             Faz com que o container ocupe toda a largura 
                gap-8              Adiciona espaçamento entre os elementos */}

          
          <div className="w-full md:w-1/2 text-center md:text-center">
  {/**          w-full         Ocupa toda a largura disponível 
                md:w-1/2       Em telas médias ou maiores, ocupa metade da largura 
                text-center    Centraliza o texto 
                md:text-center  Em telas médias e maiores, mantém o texto centralizado 
                     */}
          
          
          <p className="mt-4 text-2xl md:text-2xl">
          Outer wilds com certeza é o meu jogo favorito de todos os tempos, com uma experiência única de exploração e mistério, além de ter uma das melhores histórias que eu já vi em toda minha vida. Com certeza absoluta eu posso dizer que Outer Wilds é uma experiência que eu nunca esquecerei e que será difícil qualquer outra experiência se equiparar a esse jogo.
          </p>
  {/**          mt-4        Adiciona uma margem superior 
                text-2xl    Define um tamanho de fonte maior 
                md:text-2xl  Mantém o tamanho grande da fonte também em telas médias e maiores  */}



          </div>
       


          <img src="/images/TopUm/Outer.webp" alt="Outerwilds" className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end max-w-sm h-auto rounded-xl" />
  {/**        w-full          Ocupa toda a largura disponível 
              md:w-1/2        Em telas médias, ocupa metade da largura 
              lg:w-2/5        Em telas grandes, ocupa 40% da largura 
              flex            Usa flexbox 
              justify-center  Centraliza a imagem horizontalmente 
              md:justify-end  Em telas médias ou maiores, alinha à direita 
              max-w-sm        Define uma largura máxima pequena para evitar que a imagem fique muito grande 
              h-auto          Mantém a proporção da imagem 
              rounded-xl      Bordas arredondadas  */}




          </div>
          
        </div>
      </div>
    )
}