var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");


smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}


smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}


smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
}


smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
}




/* pou-up */
// Lógica para mostrar o carrinho ao clicar no ícone
        document.getElementById('botao-carrinho').addEventListener('click', (event) => {
            event.preventDefault();  // Previne o redirecionamento
            const carrinhoContainer = document.getElementById('carrinho-container');
            carrinhoContainer.style.display = carrinhoContainer.style.display === 'none' ? 'block' : 'none';
        });


        // Inicializando o controlador do carrinho ao carregar a página
        CarrinhoController.init();
       
