import React, { useEffect } from 'react';

const Produto = () => {

  // useEffect permite executar código quando o componente é montado, atualizado ou desmontado
  useEffect(() => {

    // Função que será chamada sempre que o usuário rolar a página
    function handleScroll(event) {
      console.log(event); // Exibe o evento de scroll no console
    }

    // 🟩 Por que usamos window.addEventListener('scroll', handleScroll)?
    // Queremos executar uma função sempre que o usuário rolar a página.
    // window.addEventListener escuta esse tipo de evento.
    // Neste caso, quando o evento de scroll acontece, ele chama a função handleScroll.
    window.addEventListener('scroll', handleScroll);

    // 🧹 Por que colocamos window.removeEventListener(...) no return?
    // Essa função dentro do return do useEffect é chamada de função de limpeza (cleanup).
    // Ela é executada quando o componente for removido da tela
    // ou antes do efeito ser executado de novo, se as dependências mudarem.
    // Serve para limpar qualquer efeito colateral, como event listeners, timers (setInterval, setTimeout) ou assinaturas.
    // Evita problemas como:
    // - Funções sendo chamadas mesmo depois do componente não existir mais
    // - Vazamento de memória no navegador
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  // 🔄 Por que o array [] no useEffect?
  // Com o array vazio ([]), o useEffect só roda uma vez, quando o componente aparece na tela (montagem).
  // Isso é parecido com o componentDidMount das classes.
  }, []);

  // O que será exibido na tela
  return (
    // 200vh significa que a altura da div é 200% da altura da janela, permitindo rolagem
    <div style={{ height: '200vh' }}>
      <p>Meu Produto!</p>
    </div>
  );
};

// ✅ Quando usar esse padrão?
// Você vai usar esse padrão com useEffect + addEventListener sempre que:
// - Quiser ouvir eventos globais (scroll, resize, keydown, etc.)
// - Quiser montar algo que precisa ser limpo depois (WebSocket, timer, etc.)

export default Produto;
