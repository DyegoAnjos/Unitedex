const itensBox = document.querySelector("#itens")
const itensinfoBox = document.querySelector("#itensinfo")

const itemImg = document.querySelector("#itemImg")
const nomeItem = document.querySelector("#nomeItem")
const classeItem = document.querySelector(".classeItem")
const tempoItem = document.querySelector(".tempo")
const descricao = document.querySelector(".descricao")
const nivel = document.querySelector(".nivel")

function itensinfo(id){
    itensBox.style.display = "none"
    itensinfoBox.style.display = "flex"

    for(let i=0;i<=itensFicha.length-1;i++){
        if(id === itensFicha[i].nome){
            if(itensFicha[i].classe === "B"){
                itemImg.setAttribute("src", "../imgs/Itens-Batalha/"+itensFicha[i].img+".png")   
                classeItem.innerText = "Item de Batalha"
            }
                
            else if(itensFicha[i].classe === "S"){
                itemImg.setAttribute("src", "../imgs/Itens-Segurar/"+itensFicha[i].img+".png")   
                classeItem.innerText = "Item de Segurar"
            }
                
            
            itemImg.setAttribute("alt", itensFicha[i].nome)
            itemImg.setAttribute("id", "itemImg")

            nomeItem.innerText = itensFicha[i].nome

            tempoItem.innerText = "Recarga: "+itensFicha[i].tempo+"s"

            descricao.innerText = itensFicha[i].descricao

            nivel.innerText = "Desbloqueia no nível "+itensFicha[i].nivel
            
        }
    }
}