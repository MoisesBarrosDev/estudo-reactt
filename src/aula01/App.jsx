const App1 = () => {
  // Uma das coisas que podemos fazer com arrays  é colocar tags dentro  deles junto com atributos
  // Pra que serve esse atributo key? ele serve para colocar uma chave, e essa chave tem que ser unica para que o jsx entenda
  //  que não são elementos repetidos. e o jsx nescessita pra cada elemento do array precisa de um key.
  const produtoss = [<li key='Notebook'>Notebook</li>, <li key='Tablet'>Tablet</li>, <li key='Smartphone'>Smartphone</li>]
  // Aqui estamos pegando o array filmes
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  //  O cenário mais comum é trabalhar com array's de objetos.
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ]

  return (
    <>
      <ul>
        {produtoss}
      </ul>

      {/* Aqui abaixo estamos criando  um elemento UL, pegando o array filmes e iterando sobre ele, colocando sobre 
          cada elemento do array a chave, que é o nome do array. */}
      <ul>
        {filmes.map((filme) => (

          <li key={filme}>{filme}</li>
        ))}

      </ul>

      {/* Aqui abaixo, vamos ter o contexto geral, que no caso , que é oque geralmente vamos mais fazer, que é o
          Array de objetos, vamos iterar sobre esse array. Pegamos a variavel livros e filtramos ela 
          pelo objeto ano, pegamos somente o livro do ano maior ou igual a 1998,depois mapeamos o livro e criamos 
          uma li e passamos a chave com o nome do livro para cada iteração, e colocamos na tela o nome do livro e o ano do livro*/}

      <ul>
        {livros.filter((livro) =>
          livro.ano >= 1998).map(({ nome, ano }) => (
            <li key={nome}>
              {nome} {ano}
            </li>
          ))}
      </ul>
    </>
  )
}

// Exercicio do que já foi aprendido

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const price = produtos
    .filter(({ preco }) => Number(preco.replace('R$', '').trim()) > 1500)
    .map(({ nome, preco, id, cores }) => (
      <div key={id}>
        <h1>{nome}</h1>
        <p> Preço: {preco}</p>

        <ul>
          {cores.map((cor, index) => (
            <li
              key={index} style={
                { backgroundColor: cor, color: 'white', marginTop: '6px', width: '40%', listStyle: 'none', paddingLeft: '10px' }
              }
            >
              {cor}

            </li>
          ))}
        </ul>
      </div>

    ))



  return (
    <>
      <div>
        {price}
      </div>
    </>
  )
};

const cursos = [
  {
    id: 1,
    nome: 'React para Iniciantes',
    nota: 9,
    ativo: true,
    nivel: 'iniciante',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    nome: 'JavaScript Completo',
    nota: 7.5,
    ativo: true,
    nivel: 'intermediário',
    tecnologias: ['ES6', 'DOM', 'Fetch API'],
  },
  {
    id: 3,
    nome: 'Node.js Avançado',
    nota: 9.5,
    ativo: true,
    nivel: 'avancado',
    tecnologias: ['Express', 'MongoDB', 'JWT'],
  },
  {
    id: 4,
    nome: 'UI Design',
    nota: 8.5,
    ativo: false,
    nivel: 'iniciante',
    tecnologias: ['Figma', 'UX', 'UI'],
  },
];


// 🚀 Exercício React: Exibir Cursos Ativos e Com Nota Alta
// ✅ Objetivo:
// Renderizar apenas os cursos que estão ativos (ativo: true) e cuja nota seja maior que 8.

// Para cada curso, exiba:

// O nome do curso

// A nota

// A lista de tecnologias, com cada uma aparecendo como uma caixinha colorida (fundo cinza, texto branco).

// Se o curso for de nível avançado, destaque o nome em vermelho e negrito.


const ListCourseAtive = () => {

  const courseAtv = cursos
    .filter(({ nota, ativo }) => nota > 8 && ativo == true)
    .map(({ nome, nota, tecnologias, nivel }, index) =>
      <ul key={index} style={{ listStyle: 'none' }}>
        <li>

          <span
            style={{
              color: nivel === 'avancado' ? 'red' : 'black',
              fontWeight: nivel === 'avancado' ? 'bold' : 'normal',
            }}
          >
            Nome: {nome}
          </span>.

          Nota: {nota}

          <div style={{ marginTop: '8px' }}>
            {tecnologias.map((tecnologia, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: 'gray',
                  color: 'white',
                  padding: '4px 8px',
                  marginRight: '6px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                {tecnologia}
              </span>
            )
            )}
          </div>
        </li>
      </ul>

    )
  return (
    <>
      {courseAtv}
    </>
  )
}

const obrasLiterarias = [
  {
    titulo: 'A Guerra dos Tronos',
    autor: 'George R. R. Martin',
    paginas: 694,
    status: 'disponível',
    generos: ['Fantasia', 'Ficção'],
  },
  {
    titulo: 'O Poder do Hábito',
    autor: 'Charles Duhigg',
    paginas: 408,
    status: 'indisponível',
    generos: ['Autoajuda', 'Psicologia'],
  },
  {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    paginas: 256,
    status: 'disponível',
    generos: ['Clássico', 'Romance'],
  },
  {
    titulo: 'Duna',
    autor: 'Frank Herbert',
    paginas: 412,
    status: 'disponível',
    generos: ['Ficção', 'Aventura'],
  },
];


// 📌 O que deve aparecer na tela:
// Somente as obras que têm mais de 300 páginas e estão com status "disponível"
const BookAvailable = () => {
  const obrasAvailable = obrasLiterarias
    .filter(({ paginas, status }) => paginas > 300 && status === 'disponível')
    .map(({ titulo, autor, paginas, generos }, index) => {
      const isFiccao = generos.includes('Ficção');

      return (
        <div key={index}>
          <h1
            style={{
              color: isFiccao ? 'blue' : 'black',
              fontWeight: isFiccao ? 'bold' : 'normal',
            }}
          >
            {titulo}
          </h1>

          <span style={{ display: 'block' }}>Autor: {autor}</span>
          <span style={{ display: 'block' }}>Páginas: {paginas}</span>

          <div style={{ marginTop: '10px' }}>
            {generos.map((genero, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: 'gray',
                  color: 'white',
                  padding: '4px 8px',
                  marginRight: '5px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                {genero}
              </span>
            ))}
          </div>
        </div>
      );
    });

  return <>{obrasAvailable}</>;
};


export { App1, App, ListCourseAtive, BookAvailable }