// CRIANDO CARDS DE PRODUTOS
let main = document.querySelector('main')

function renderizaCardsNaMain(listaDeCards){
    main.innerText = ""
    for (let i = 0; i < listaDeCards.length; i++) {
        main.insertAdjacentHTML('beforeend', `
    
        <div class="cardContainer">
            <div class="cardImgContainer">
                <img class="imagemProduto" src="${listaDeCards[i].img}" alt="Foto de ${listaDeCards[i].nameItem}">
            </div>
            <div class="cardInfoContainer">
                <p class="tipoProduto">${listaDeCards[i].tag}</p>
                <h1 class="tituloProduto">${listaDeCards[i].nameItem}</h1>
                <p class="textoDescricao">${listaDeCards[i].description}</p>
                <p class="preco">R$${listaDeCards[i].value.toFixed(2)}</p>
                <p class="botaoAddCarrinho" id="${listaDeCards[i].id}">${listaDeCards[i].addCart}</p>
                </div>
                </div>    
                `)
    }
}
renderizaCardsNaMain(productList)
        
// ADICIONANDO PRODUTOS AO CARRINHO
// Por mais que eu saiba que não é uma boa prática usar métodos diferentes no mesmo arquivo, aqui utilizei outra forma de adicionar os elementos HTML pelo DOM, apenas para fins acadêmicos como forma de praticar mais de uma tecnica.
let carrinho = document.querySelector('.meioCarrinho')

function renderizaElementosNoCarrinho(){
    carrinho.innerHTML = ""
    
    for (let i = 0; i < produtosCarrinho.length; i++) {
        
        let divCardContainer = document.createElement('div')
        divCardContainer.className = 'carrinhoCardContainer'
        carrinho.appendChild(divCardContainer)
        
        let divCarrinhoImgContainer = document.createElement('div')
        divCarrinhoImgContainer.classList.add('carrinhoCardImgContainer')
        divCardContainer.appendChild(divCarrinhoImgContainer)
        
        let carrinhoImg = document.createElement('img')
        carrinhoImg.className = 'carrinhoImagemProduto'
        carrinhoImg.src = produtosCarrinho[i].img
        carrinhoImg.alt = `Foto de ${produtosCarrinho[i].nameItem}`
        divCarrinhoImgContainer.appendChild(carrinhoImg)
        
        let divCarrinhoCardInfoContainer = document.createElement('div')
        divCarrinhoCardInfoContainer.classList.add('carrinhoCardInfoContainer')
        divCardContainer.appendChild(divCarrinhoCardInfoContainer)
        
        let carrinhoTitulo = document.createElement('h1')
        carrinhoTitulo.className = "carrinhoTituloProduto"
        carrinhoTitulo.innerText = produtosCarrinho[i].qtd + " - " + produtosCarrinho[i].nameItem
        divCarrinhoCardInfoContainer.appendChild(carrinhoTitulo)
        
        let carrinhoPreco = document.createElement('p')
        carrinhoPreco.className = "carrinhoPreco"
        carrinhoPreco.innerText = `R$${produtosCarrinho[i].value.toFixed(2)}`
        divCarrinhoCardInfoContainer.appendChild(carrinhoPreco)
        
        let carrinhoRemove = document.createElement('p')
        carrinhoRemove.className = "carrinhoBotaoRemoveCarrinho"
        carrinhoRemove.id = produtosCarrinho[i].id
        carrinhoRemove.innerText = "Remover do Carrinho"
        divCarrinhoCardInfoContainer.appendChild(carrinhoRemove)
        
    }
}

main.addEventListener('click', function(e){
    let elementoClicado = e.target
    if(elementoClicado.className == "botaoAddCarrinho"){
        
        let produtoEstaNoCarrinho = false
        for(let i = 0; i < produtosCarrinho.length; i++){
            (produtosCarrinho[i].id == elementoClicado.id) ? produtoEstaNoCarrinho = true : ""
        }

        if(produtoEstaNoCarrinho == false){
            produtosCarrinho.push(productList[elementoClicado.id - 1])
        } else {
            for (let i = 0; i < produtosCarrinho.length; i++) {
                (produtosCarrinho[i].id == elementoClicado.id) ? produtosCarrinho[i].qtd ++ : ""                
            }
        }
    }
    renderizaElementosNoCarrinho()
    atualizaValoresCarrinho()
})


// REMOVENDO PRODUTOS DO CARRINHO
carrinho.addEventListener('click', function(e){
    let elementoClicado = e.target
    if(elementoClicado.className == "carrinhoBotaoRemoveCarrinho"){
        for (let i = 0; i < produtosCarrinho.length; i++) {
            if(elementoClicado.id == produtosCarrinho[i].id && produtosCarrinho[i].qtd > 1){
                produtosCarrinho[i].qtd--
            } else if (elementoClicado.id == produtosCarrinho[i].id && produtosCarrinho[i].qtd == 1){
                produtosCarrinho.splice(i , 1)
            }
        }
    }
    renderizaElementosNoCarrinho()
    atualizaValoresCarrinho()
})


// RENDERIZANDO QUANTIDADE E PREÇO TOTAL NO CARRIHO
function atualizaValoresCarrinho(){
    let baseCarrinho = document.querySelector('.baseCarrinho')
    
    let qtdTotal = 0
    for (let i = 0; i < produtosCarrinho.length; i++) {
        qtdTotal += produtosCarrinho[i].qtd    
    }
    
    let precoTotal = 0
    for (let i = 0; i < produtosCarrinho.length; i++) {
        precoTotal += (produtosCarrinho[i].qtd * produtosCarrinho[i].value)
    }
    
    baseCarrinho.innerText = ""
    baseCarrinho.insertAdjacentHTML('beforeend', `
        <div class="quantidade">
            <p>Quantidade:</p>
            <p>${qtdTotal}</p>
        </div>
        <div class="total">
            <p>Total:</p>
            <p>R$${precoTotal.toFixed(2)}</p>
        </div>
    `)
}


// RENDERIZANDO PRODUTOS SELECIONADOS NO MENU NAV
let nav = document.querySelector('nav')

nav.addEventListener('click', function(e){
    let elementoClicado = e.target

    if(elementoClicado.className == "navItem"){
        produtosFiltrados = []
        if(elementoClicado.id == "todos"){
            produtosFiltrados = productList
            renderizaCardsNaMain(produtosFiltrados)
        } else {
            for (let i = 0; i < productList.length; i++) {
                if(elementoClicado.id == productList[i].tag){
                    produtosFiltrados.push(productList[i])
                }            
            }
        }
        renderizaCardsNaMain(produtosFiltrados)
        }
})


// RENDERIZANDO PRODUTOS PESQUISADOS
let caixaPesquisa = document.querySelector('.caixaPesquisa')

caixaPesquisa.addEventListener('keyup', function(e){
    let elementoClicado = e.target

    produtosPesquisados = []
    for (let i = 0; i < productList.length; i++) {
        if(productList[i].nameItem.toLowerCase().includes(elementoClicado.value.toLowerCase())){
            produtosPesquisados.push(productList[i])
        }
    }
    renderizaCardsNaMain(produtosPesquisados)
})


// LIGTH/DARK MODE
let botaoLight = document.querySelector('.botaoLight')
let linkTema = document.getElementById('style')

let logo = document.getElementById('logo')
let logoDark = document.getElementById('logoDark')

botaoLight.addEventListener('click', function(e){
    // console.log(linkTema)
    if(linkTema.classList.contains("dark")){
        linkTema.setAttribute('href', "./css/styleLight.css")
        linkTema.classList.add("light")
        linkTema.classList.remove("dark")
        logoDark.setAttribute("hidden", "hidden")
        logo.removeAttribute("hidden")
    } else {
        linkTema.setAttribute('href', "./css/styleDark.css")
        linkTema.classList.add("dark")
        linkTema.classList.remove("light")
        logo.setAttribute("hidden", "hidden")
        logoDark.removeAttribute("hidden")

    }
})
