// Aqui abaixo criamos um componente e estamos fazendo a desestruturação das props, pra que serve essas props? 
// essas props que estão em {label,id ...props}  elas são usadas na hora que chamamos o componente Input, 
// oque está acontecendo aqui abaixo?

// 1º criamos um componente que recebe propiedades e o rest = que sgnifica? (pegando o restante das propiedades e armazenando).
// 2º criamos um label que vai recebe dentro do htmlFor um id, e porque? porque toda vez que um label for clicado e conter 
// o mesmo id vai cair dentro do input.

// 3º criamos um input que recebe um id e o tipo desse input é um texto, além disso estamos pegando o restante das props e colocando dentro 
// dele.

// 4º pegamos o restante das props e espalhamos dentro do input.

// Aí sua pergunta pode ser, aonde estão essas propiedades? veja dentro do Componente form.



const Input = ({ label, id, children, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}  />
    </>
  )
}

export default Input
