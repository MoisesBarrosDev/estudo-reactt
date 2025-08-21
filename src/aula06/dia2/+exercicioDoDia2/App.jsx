// Exercício extra de fixação (Form com objeto no estado)
// Objetivo:

// Treinar estado único em objeto

// Consolidar handleChange genérico

// Trabalhar com vários tipos de input

// Regras:

// Criar um formulário com:

// Nome

// Email

// Senha

// Checkbox de “Aceito os termos”

// Select de “Cargo desejado”

// Usar um único useState para todo o form.

// Mostrar em tempo real todos os valores abaixo do form.

// Ao enviar, mostrar o objeto completo no console e resetar o form.

import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import Button from './Button'

const App = () => {
  // Um único estado para todo formulario (objeto).
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    termos: false,
    cargos: ''
  })

  function handleChange({ target }) {
    // essa função está desestruturando o name e o valor que está dentro de target de cada componente.
    const { name, value } = target
    // pegamos o restante do formulario e espalhamos aqui (spread), pegamos o name desestrutuado e botamos para receber o valor.
    // ATENÇÃO: aqui temos que colocar [] no name para receber o valor atualizado.
    // form => copia o estado antigo
    // [name]: value => atualiza o estado 
    setForm({ ...form, [name]: value })
  }

  // Nessa função handleChecked:
  // pegamos o valor restante do formulário espalhamos dentro da função atualizadora e atualizamos apenas o termos.
  // esse target.checked verifica se o valor do checkbox foi clicado.
  //  o target.checked se ler assim: está marcado?
  function handleChecked({ target }) {
    // form => copia o estado antigo
    // termos: target.checked  => atualiza o estado somente da propiedade termos.
    setForm({ ...form, termos: target.checked })
  }


  // Na função handleSubmit:
  // 1º - ela previne o reloading com: event.preventDefault()
  // 2º - mostra no console a mensagem que o formulario foi enviado,mais o estado contendo o objeto.
  // 3º - pega a função atualizadora e pega cada propiedade e formata pro padrão normal, assim que o usuario clica no botão de submit.
  function handleSubmit(event) {
    event.preventDefault()
    console.log('FORMULARIO ENVIADO!!', form)
    setForm({ nome: '', email: '', senha: '', termos: false, cargos: '' })
  }
  return (
    //  No formulario temos o evento onSubmit que contém a função handleSubmit que so executa quando o usuario clica no botão de submit.
    <form onSubmit={handleSubmit}>
      {/* Nesse componente abaixo contem os parametros que foi definido no componente <Input/>. */}
      {/* 
         1º propiedade type - contém qual é o tipo do input, que no caso é de text.

         2º propiedade name - contém a propiedade com o valor dela 'nome', ela é impotante para o motor do react entender 
         que esse componente é um grupo.

         3º propiedade label - contém o valor 'nome' para colocar como texto, assim que clicar no label vai está dentro do input. 

         4º propiedade id -  contém o valor 'nome' no id para referenciar assim que clicar no label.

         5º propiedade value - contém o valor da propiedade form.nome, que no caso é '' pois nada foi digitado.

         6º propiedade onChange - contém a função handleChange que pega o valor que foi digitado  e joga dentro do value. 
        */}
      <Input
        type='text'
        name='nome'
        label='nome'
        id='nome'
        value={form.nome}
        onChange={handleChange}
      />
      <Input
        type='email'
        name='email'
        label='email'
        id='email'
        value={form.email}
        onChange={handleChange}
      />
      <Input
        type='password'
        name='senha'
        label='senha'
        id='senha'
        value={form.senha}
        onChange={handleChange}
        required
      />

      {/* Aqui temos um <div> contendo um componente <Select/> */}
      <div style={{ marginBottom: '1rem' }}>
        <h2>Escolha o cargo desejado:</h2>
        {/* Nesse componente abaixo contem os parametros que foi definido no componente <Select/>. */}
        {/* 
         1º propiedade options - contém um array com opções dos cargos.

         2º propiedade name - contém a propiedade com o valor dela 'cargos', ela é impotante para o motor do react entender 
         que esse componente é um grupo, sem ele não seria possivel marcar qualquer opção.

         3º propiedade value - contém o valor da propiedade cargos, que no caso é '' porque não tem nenhum marcado.

         4º propiedade onChange - contém a função handleChange que pega o valor que foi selecionado  e joga dentro do value. 
        */}
        <Select
          options={['Gerente', 'Faxineiro', 'Coferente', 'Auxiliar', 'Jovem Aprendiz']}
          name='cargos'
          value={form.cargos}
          onChange={handleChange}
        />
      </div>


      {/* Aqui temos um <div> contendo um componente <Checkbox/> */}
      <div style={{ marginBottom: '1rem' }}>
        {/* Nesse componente abaixo contem os parametros que foi definido no componente <Checkbox/>. */}
        {/*
            1º propiedade type - contém o tipo do input.

            2º propiedade name - contém a propiedade com o valor dela 'termos', ela é importante para o motor do React entender 
               que esse componente é um grupo. Sem ela não seria possível marcar.

            3º propiedade label - contém o valor do texto que fica em cima do checkbox.

            4º propiedade id - contém o nome do id para referenciar. Assim que clicar no label (texto em cima do checkbox)
                ele preenche o checkbox.

            5º propiedade checked - verifica se a propiedade do formulário está marcada.
               Aqui usamos "checked" ao invés de "value" porque:
              - value em um checkbox não muda se marcar ou desmarcar (sempre será "on" ou o valor definido no atributo value).
              - checked retorna true ou false, que é o que precisamos para controlar o estado booleano do checkbox.

             6º propiedade onChange - contém a função que atualiza se o checkbox foi marcado. 

            Dica:
            - Um checkbox simples → estado booleano (true/false), usa checked.
            - Vários checkboxes que formam uma lista → estado array, adiciona/remove itens com filter e spread.
       */}
        <Checkbox
          type='checkbox'
          name='termos'
          label='Aceito todos os termos'
          id='termos'
          checked={form.termos}
          onChange={handleChecked}
        />
      </div>


      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default App
