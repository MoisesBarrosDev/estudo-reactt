import Titulo from './Titulo'
import Paragraph from './Paragraph'

const Sobre = () => {
  return (
    <section>
      <Titulo titulo='Sobre' />
      <Paragraph
        text=' Este projeto foi desenvolvido com o objetivo de praticar os conceitos básicos de React, como componentes, props e organização de arquivos.  
             Ao longo do desenvolvimento, diferentes exercícios foram implementados para reforçar o aprendizado de forma progressiva e prática.'/>
      <Paragraph
        text='  A ideia é criar uma base sólida em React antes de avançar para tópicos mais avançados, como gerenciamento de estado, hooks e rotas.  
              Todo o conteúdo apresentado aqui foi escrito com foco no aprendizado, priorizando clareza e simplicidade.'/>
    </section>
  )
}

export default Sobre
