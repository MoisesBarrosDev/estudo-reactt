import Title from "./Title"
import Paragraph from "./Paragraph"

const Sobre = () => {
  return (
    <div>
      <Title titulo='Sobre' />
      <Paragraph>
        Este projeto foi desenvolvido com o objetivo de praticar os conceitos fundamentais do React, como a criação de componentes reutilizáveis, uso de props e organização do código em módulos.
        A proposta é oferecer uma base sólida para o desenvolvimento de aplicações web modernas, utilizando boas práticas de estruturação e reutilização de código.Ao longo do desenvolvimento, diferentes páginas e componentes foram criados com foco na simplicidade, clareza e aprendizado progressivo, servindo como base para evoluções futuras, como a introdução de rotas, hooks e gerenciamento de estado.
        Este é um projeto em constante evolução, voltado para o estudo e aprimoramento contínuo em React.
      </Paragraph>
    </div>
  )
}

export default Sobre
