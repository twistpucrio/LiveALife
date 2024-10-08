// js/view/produtosView.js

const ProdutosView = (() => {
    const renderizarProdutos = (produtos, adicionarAoCarrinhoCallback,adicionarAoFavoritoCallback) => {
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');

            produtoDiv.innerHTML = `
                <div id="produtoExibido-${produto.id}" tabindex="0" aria-labelledby="nome-${produto.id} preco-${produto.id} descricao-${produto.id}">
                    <h3 id="nome-${produto.id}">${produto.nome}</h3>
                    <img tabindex="0" src="${produto.imagem}" alt="${produto.alt}" width="10%" height="10%">
                    <p id="preco-${produto.id}">Preço: R$ ${produto.preco}</p>
                    <p id="descricao-${produto.id}">${produto.descricao}</p>
                    <button aria-label="Clique aqui para adicionar ao carrinho" data-id="${produto.id}" class="adicionar-carrinho-button">
                        Adicionar ao Carrinho
                    </button>
                    <button aria-label="Clique aqui para adicionar aos favoritos" data-id="${produto.id}" class="adicionar-favorito-button">
                        Adicionar aos Favoritos
                    </button>
                </div>
            `;

            container.appendChild(produtoDiv);
        });

        // Adiciona os eventos dos botões
        container.addEventListener('click', (event) => {
            if (event.target.classList.contains('adicionar-carrinho-button')) {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                const produto = produtos.find(p => p.id === produtoId);
                if (produto) {
                    adicionarAoCarrinhoCallback(produto);
                }
            }
            if (event.target.classList.contains('adicionar-favorito-button')) {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                const produto = produtos.find(p => p.id === produtoId);
                if (produto) {
                    adicionarAoFavoritoCallback(produto);
                }
            }
        });
    };

    return {
        renderizarProdutos
    };
})();