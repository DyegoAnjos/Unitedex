const batalha = document.querySelector("#itensBox")

function caixas(){
    for(let i=0;i<=itens.length-1;i++){
        const itensicone = document.createElement("img")
        itensicone.setAttribute("src","../imgs/Itens-Batalha/"+itens[i].img+".png")
        itensicone.setAttribute("alt",itens[i].nome)
        itensicone.setAttribute("class","item-icon")

        icones[i].valor=i
        itensicone.setAttribute("onclick", `itensinfo("${itens[i].nome}")`)
        batalha.appendChild(itensicone)
    }
}