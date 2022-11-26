const itensBox = document.querySelector("#itens")
const itensinfoBox = document.querySelector("#itensinfo")

const itemImg = document.querySelector("#ItemImg")
const nomeItem = document.querySelector("#ItemImg")
const classeItem = document.querySelector(".ItemImg")
const tempoItem = document.querySelector(".ItemImg")
const descricao = document.querySelector(".ItemImg")
const nivel = document.querySelector(".ItemImg")

function itensinfo(id){
    itensBox.style.display = "none"
    itensinfoBox.style.display = "flex"

    for(let i=0;i<=itensFicha.length-1;i++){
        if(id === itensFicha[i].nome){
            if(itensFicha[i].classe === "B")
                itemImg.setAttribute("src", "../imgs/Itens-Batalha"+itensFicha[i].img+".png")   
            
            else if(itensFicha[i].classe === "S")
                itemImg.setAttribute("src", "../imgs/Itens-Segurar"+itensFicha[i].img+".png")   
            
            itemImg.setAttribute("alt", itensFicha[i].nome)
            
        }
    }
}