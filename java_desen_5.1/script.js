// elementos h1 e a
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

// Inner text
titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'

// elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

// Adicionando três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
`
// Adicionando três itens com links na lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://www.youtube.com/">youtube</a></li>
  <li><a href="https://www.facebook.com/">facebook</a></li>
  <li><a href="https://www.mercadolivre.com.br/">mercado_livre</a></li>
  `