const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtraporDisponibilidade() : filtraPorCategoria(categoria);
   exibirLivrosNaTela(livrosFiltrados)
   if(categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisp(livrosFiltrados)
    exibirValorTotalLivros(valorTotal)
   }
}

function filtraPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtraporDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivros(valorTotal) {
    elementoComValorTotalLivrosDisp.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}