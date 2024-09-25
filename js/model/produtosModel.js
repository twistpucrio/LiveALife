const ProdutosModel = (() => {
    let produtos = [];

    // Carregar produtos do arquivo JSON
    const carregarProdutos = () => {
        return fetch('produtos.json')
            .then(response => response.json())
            .then(data => {
                produtos = data;
                return produtos;
            })
            .catch(error => {
                console.error("Erro ao carregar produtos:", error);
            });
    };

    const getProdutos = () => {
        return produtos;
    };

    const adicionarProduto = (produto) => {
        produtos.push(produto);
    };

    const buscarProdutos = (criterios) => {
        return produtos.filter(produto => {
            let corresponde = true;

            if (criterios.nome) {
                const nomeBusca = criterios.nome.toLowerCase();
                const nomeProduto = produto.nome.toLowerCase();
                corresponde = corresponde && nomeProduto.includes(nomeBusca);
            }

            if (criterios.precoMin !== undefined) {
                corresponde = corresponde && produto.preco >= criterios.precoMin;
            }

            if (criterios.precoMax !== undefined) {
                corresponde = corresponde && produto.preco <= criterios.precoMax;
            }

            return corresponde;
        });
    };

    return {
        carregarProdutos,
        getProdutos,
        adicionarProduto,
        buscarProdutos
    };
})();