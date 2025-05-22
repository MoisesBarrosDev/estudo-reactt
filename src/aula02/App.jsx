// Aqui vamos aprender como funciona os eventos no react.
// Os eventos são sintéticos, ou seja, criados pelo próprio React, mas seguem as especificações da W3C.
// Isso garante que funcionem de forma consistente em todos os navegadores suportados pelo React.


// Dentro do componente, criamos uma função que recebe o parâmetro `event`.
// Utilizamos `event.target` para identificar qual elemento foi clicado ou teve o mouse passado por cima,
// e exibimos essa informação no console.
const App = () => {

  function handleClick(event) {
    console.log(event.target)
  }

  /*
    window/document
    Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, 
   usando o addEventListener. */
  // Criamos uma função com o parâmetro `event` e exibimos esse evento no console.
  function handleScroll(event) {
    console.log(event);
  }
  // Aqui estamos usando o objeto `window`, que representa a raiz do navegador.
  // Adicionamos um evento de scroll diretamente com `addEventListener`, que chama a função `handleScroll`.
  // Isso fará com que um objeto de evento seja exibido no console toda vez que a página for rolada.
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div style={{ height: '200vh' }}>

        {/* Repare que os nomes dos eventos seguem a convenção camelCase no React. 
            Este botão está usando dois eventos: `onClick` e `onMouseMove`, ambos acionando a função `handleClick`. */}
        <button onClick={handleClick} onMouseMove={handleClick}>Cique</button>

        {/* Veja outra maneira de fazer o evento, com uma função anônima: */}
        {/* Este botão possui um estilo adicional apenas para afastá-lo visualmente do outro. 
            Ao ser clicado, ele dispara uma função anônima que mostra um alerta com o texto do botão,
            usando `event.target.innerText`. */}
        <button style={{ margin: '1rem' }} onClick={({ target }) => alert(target.innerText)}>
          clique
        </button>

      </div>


    </>
  )
}

export { App }