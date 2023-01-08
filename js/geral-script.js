const botao=document.getElementById("botao")
const opcs=document.getElementById("opcs")

function menu(id){
    if(id ==1){
        opcs.style.display="flex"
        botao.setAttribute("onclick", "menu("+2+")")
    }

    else if(id == 2){
        opcs.style.display="none"
        botao.setAttribute("onclick", "menu("+1+")")
    }
}