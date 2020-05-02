let x = document.querySelector(".x")
let o = document.querySelector(".o") 
let boxes = document.querySelectorAll(".box")
let btns = document.querySelectorAll("#btn-container button")
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector("#message p")
let secondPlayer
let contadorJogadas = 0 
//Player
let currentPlayer = x

function addEvents(box){
    box.addEventListener("click", markGame)
}

function markGame(event){
    let clonePlayer = currentPlayer.cloneNode(true)
    if (this.childNodes.length === 0){
        this.appendChild(clonePlayer)
        changePlayer()
        checkWinner()
    }
}

function changePlayer(){
    //VERIFICA SE VAI JOGAR CONTRA IA
    if(secondPlayer == "IA-player"){
        iaPlay()
        contadorJogadas++
        currentPlayer = x
    }else{
        currentPlayer = currentPlayer == x ? o :x
    }
}

function iaPlay(){
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0
    //TENTANDO FAZER JOGADA ALEATORIA 
    boxes.forEach((box) => {
        let ramdonNumber = Math.floor(Math.random()*5)
        if(box.childNodes[0] == undefined){
            if(ramdonNumber <= 1){
                box.appendChild(cloneO)
                counter++;
            }
        } else {
            filled++
        }
    })

    if(counter == 0 && filled < 9){
        iaPlay()
    }

}

function checkWinner(){
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")

    //HORIZONTAL 1 2 3
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1Class = b1.childNodes[0].className
        let b2Class = b2.childNodes[0].className
        let b3Class = b3.childNodes[0].className

        if(b1Class == "x" && b2Class == "x" && b3Class == "x") {
            callWinner("x")
        }
        else if (b1Class == "o" && b2Class == "o" && b3Class == "o") {
            callWinner("o")
        }
    }

    // HORIZONTAL 4 5 6
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Class = b4.childNodes[0].className
        let b5Class = b5.childNodes[0].className
        let b6Class = b6.childNodes[0].className

        if(b4Class == "x" && b5Class == "x" && b6Class == "x") {
            callWinner("x")
        }
        else if (b4Class == "o" && b5Class == "o" && b6Class == "o") {
            callWinner("o")
        }
    }

    // HORIZONTAL 7 8 9 
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Class = b7.childNodes[0].className
        let b8Class = b8.childNodes[0].className
        let b9Class = b9.childNodes[0].className

        if(b7Class == "x" && b8Class == "x" && b9Class == "x") {
            callWinner("x")
        }
        else if (b7Class == "o" && b8Class == "o" && b9Class == "o") {
            callWinner("o")
        }
    }

    // VERTICAL 1 4 7
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Class = b1.childNodes[0].className
        let b4Class = b4.childNodes[0].className
        let b7Class = b7.childNodes[0].className

        if(b1Class == "x" && b4Class == "x" && b7Class == "x") {
            callWinner("x")
        }
        else if (b1Class == "o" && b4Class == "o" && b7Class == "o") {
            callWinner("o")
        }
    }

    //VERTICAL 2 5 8
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2Class = b2.childNodes[0].className
        let b5Class = b5.childNodes[0].className
        let b8Class = b8.childNodes[0].className
        //VERTICAL 3 6 9
        if(b2Class == "x" && b5Class == "x" && b8Class == "x") {
            callWinner("x")
        }
        else if (b2Class == "o" && b5Class == "o" && b8Class == "o") {
            callWinner("o")
        }
    }

    //VERTICAL 3 6 9 
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3Class = b3.childNodes[0].className
        let b6Class = b6.childNodes[0].className
        let b9Class = b9.childNodes[0].className

        if(b3Class == "x" && b6Class == "x" && b9Class == "x") {
            callWinner("x")
        }
        else if (b3Class == "o" && b6Class == "o" && b9Class == "o") {
            callWinner("o")
        }
    }

    // DIAGONAL 1 5 9
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Class = b1.childNodes[0].className
        let b5Class = b5.childNodes[0].className
        let b9Class = b9.childNodes[0].className

        if(b1Class == "x" && b5Class == "x" && b9Class == "x") {
            callWinner("x")
        }
        else if (b1Class == "o" && b5Class == "o" && b9Class == "o") {
            callWinner("o")
        }
    }

    // DIAGONAL 3 5 7 
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Class = b3.childNodes[0].className
        let b5Class = b5.childNodes[0].className
        let b7Class = b7.childNodes[0].className

        if(b3Class == "x" && b5Class == "x" && b7Class == "x") {
            callWinner("x")
        }
        else if (b3Class == "o" && b5Class == "o" && b7Class == "o") {
            callWinner("o")
        }
    }

    //DEU VELHA ...
    contadorJogadas++
    if(contadorJogadas >= 9){
        console.log("DEU VELHA")
        callWinner()
    }


}

function callWinner(winner){

    let scoreBoardX = document.querySelector("#scoreboard-1")
    let scoreBoardO = document.querySelector("#scoreboard-2")

    //VERIFICANDO O VENCEDOR E DEFININCO A MENSAGEM
    if(winner == "x"){
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        messageText.innerHTML = "O Jogador \"X\" Venceu!"
        contadorJogadas = -1
    } else if(winner == "o"){
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        messageText.innerHTML = "O Jogador \"O\" Venceu!" 
        contadorJogadas = -1 
    } else{
        messageText.innerHTML = "Deu Velha!"  
        contadorJogadas = 0
    }
    //EXIBIR MENSAGEM
    messageContainer.classList.remove("hide")

    //ESCONDER MENSAGEM

    setTimeout(function(){
        messageContainer.classList.add("hide")
    }, 3000)

    // RESTAURAR CURRENT PLAYER
    currentPlayer = x
    // REMOVENDO MARCAÇOES
    let boxesToRemove = document.querySelectorAll(".box div")
    boxesToRemove.forEach(function(box){
        box.parentNode.removeChild(box)
    })

}
//DEFININFO EVENTOS DAS CAIXAR
boxes.forEach(addEvents)
//DEFININDO EVENTOS DE CADA BOTÃO
btns[0].addEventListener("click", function(){
    btns[0].classList.add("hide")
    btns[1].classList.add("hide")
    secondPlayer = this.getAttribute("id")
    document.querySelector("#container").classList.remove("hide")
})

btns[1].addEventListener("click", function(){
    secondPlayer = this.getAttribute("id")
    btns[0].classList.add("hide")
    btns[1].classList.add("hide")

    document.querySelector("#container").classList.remove("hide")
})