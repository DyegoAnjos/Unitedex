

const elencoBox = document.getElementById("elenco")
const pokeinfoBox = document.getElementById("pokeinfo")
const header = document.getElementById("header")
const pokeImg = document.getElementById("pokeimg")
const pokeNome = document.getElementById("nomePokemon")
const tipoAtaque = document.getElementById("tipoAtaque")

const passivaImg = document.getElementsByClassName("habilidadeIcone passiva")
const passivaNome = document.getElementsByClassName("nomeHabilidade passiva")
const passivaDescricao = document.getElementsByClassName("descricao passiva")
const passivaTipo = document.getElementsByClassName("tipoHabilidade passiva")

const ataqueDescricao = document.getElementsByClassName("descricao ataque")

const primariaImg = document.getElementsByClassName("habilidadeIcone inicial")
const primariaNome = document.getElementsByClassName("nomeHabilidade inicial")
const primariaDescricao = document.getElementsByClassName("descricao inicial")
const primariaTempo = document.getElementsByClassName("inicial tempo")
const primariaTipo = document.getElementsByClassName("inicialtipo")

const habilidade1Img = document.getElementsByClassName("habilidadeIcone escolha1")
const habilidade1Nome = document.getElementsByClassName("nomeHabilidade escolha1")
const habilidade1Nivel = document.getElementsByClassName("tipoHabilidade escolha1")
const habilidade1Descricao = document.getElementsByClassName("descricao escolha1")
const habilidade1Tempo = document.getElementsByClassName("escolha1Tempo")
const habilidade1Tipo = document.getElementsByClassName("escolha1Tipo")

const habilidade2Img = document.getElementsByClassName("habilidadeIcone escolha2")
const habilidade2Nome = document.getElementsByClassName("nomeHabilidade escolha2")
const habilidade2Nivel = document.getElementsByClassName("tipoHabilidade escolha2")
const habilidade2Descricao = document.getElementsByClassName("descricao escolha2")
const habilidade2Tempo = document.getElementsByClassName("escolha2Tempo")
const habilidade2Tipo = document.getElementsByClassName("escolha2Tipo")

const ultImg = document.getElementsByClassName("habilidadeIcone ult")
const ultNome = document.getElementsByClassName("ultNome")
const ultNivel = document.getElementsByClassName("ultNivel")
const ultTipo = document.getElementsByClassName("ultTipo")
const ultDescricao = document.getElementsByClassName("ultDescricao")
const ultBuff = document.getElementsByClassName("ultBuffDescri")



function pokeinfo(id){
    elencoBox.style.display = "none"
    pokeinfoBox.style.display = "flex"

    for(let i=0;i<=ficha.length-1;i++){
        if(id === ficha[i].nome){
            pokeImg.setAttribute("src", "../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].pokemonImg+".png")
            pokeImg.setAttribute("alt", ficha[i].nome)

            pokeNome.innerText = ficha[i].nome

            if(ficha[i].ataque === "F"){
                tipoAtaque.style.color = "red"
                tipoAtaque.innerText = "Ataque Físico"
            }
                
            else if(ficha[i].ataque === "E"){
                tipoAtaque.style.color = "purple"
                tipoAtaque.innerText = "Ataque Especial"
            }

            const evo = document.createElement("div")
            evo.setAttribute("id", "evo")

            header.appendChild(evo)
            const evoBox = document.getElementById("evo")

            for(let j=0;j<=ficha[i].evoNome.length-1;j++){
                const miniCarde = document.createElement("div")
                miniCarde.setAttribute("class", "miniCard")

                evoBox.appendChild(miniCarde)
                const miniCard = document.getElementsByClassName("miniCard")

                const infoEvoImg = document.createElement("img")
                infoEvoImg.setAttribute("src","../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].evoNome[j]+".png")
                infoEvoImg.setAttribute("alt",ficha[i].evoNome[j])
                infoEvoImg.setAttribute("class","evoIcone")

                miniCard[j].appendChild(infoEvoImg)

                const descriEvos = document.createElement("div")
                descriEvos.setAttribute("class", "descriEvo")

                miniCard[j].appendChild(descriEvos)
                const descriEvo = document.getElementsByClassName("descriEvo")

                const infoEvoNome = document.createElement("h3")
                infoEvoNome.setAttribute("class","nomeEvo")
                infoEvoNome.innerText = ficha[i].evoNome[j]

                descriEvo[j].appendChild(infoEvoNome)

                const infoEvoNivel = document.createElement("p")
                infoEvoNivel.setAttribute("class","nivel")
                infoEvoNivel.innerText = "Evolução no "+ficha[i].evoNivel[j]

                descriEvo[j].appendChild(infoEvoNivel)
            }

            for(let j=0;j<=ficha[i].passivaNome.length-1;j++){
                passivaImg[j].setAttribute("src","../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].passivaImg[j]+".png")
                passivaImg[j].setAttribute("alt", ficha[i].passivaNome[j])

                passivaNome[j].innerText = ficha[i].passivaNome[j]
                passivaDescricao[j].innerText = ficha[i].passivaDescri[j]
                passivaTipo[j].innerText ="Habilidade Passiva"
            }

            ataqueDescricao[0].innerText = ficha[i].decriAtaque

            for(let j=0;j<=ficha[i].inicialNome.length-1;j++){
                primariaImg[j].setAttribute("src", "../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].inicialImg[j]+".png")
                primariaImg[j].setAttribute("alt", ficha[i].inicialNome[j])

                primariaNome[j].innerText = ficha[i].inicialNome[j]
                primariaTempo[j].innerText = "Duração:"+ficha[i].inicialTempo[j]+"s"
                primariaTipo[j].innerText = "Tipo:"+ficha[i].inicialTipo[j]
                primariaDescricao[j].innerText = ficha[i].inicialDescri[j]   
            }

            for(let k=0;k<=ficha[i].habilidades.length-1;k++){
                habilidade1Img[k].setAttribute("src","../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].habilidades[0].habilidadeImg[k]+".png")
                habilidade1Img[k].setAttribute("alt", ficha[i].habilidades[0].habilidadeNome[k])
                habilidade1Nome[k].innerText = ficha[i].habilidades[0].habilidadeNome[k]
                habilidade1Nivel[k].innerText = "Nivel:"+ficha[i].habilidades[0].habilidadeNivel
                habilidade1Tempo[k].innerText = "Duração:"+ficha[i].habilidades[0].habilidadeTempo[k]+"s"
                habilidade1Tipo[k].innerText = "Tipo:"+ficha[i].habilidades[0].habilidadeTipo[k]
                habilidade1Descricao[k].innerText = ficha[i].habilidades[0].habilidadeDescri[k]
                
                habilidade2Img[k].setAttribute("src","../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].habilidades[1].habilidadeImg[k]+".png")
                habilidade2Img[k].setAttribute("alt", ficha[i].habilidades[1].habilidadeNome[k])
                habilidade2Nome[k].innerText = ficha[i].habilidades[1].habilidadeNome[k]
                habilidade2Nivel[k].innerText = "Nivel:"+ficha[i].habilidades[1].habilidadeNivel
                habilidade2Tipo[k].innerText = "Tipo:"+ficha[i].habilidades[1].habilidadeTipo[k]
                habilidade2Tempo[k].innerText = "Duração:"+ficha[i].habilidades[1].habilidadeTempo[k]+"s"
                habilidade2Descricao[k].innerText = ficha[i].habilidades[1].habilidadeDescri[k]
            }

            ultImg[0].setAttribute("src", "../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].ultImg+".png")
            ultImg[0].setAttribute("alt", ficha[i].ultNome)

            ultNome[0].innerText = ficha[i].ultNome

            ultNivel[0].innerText = "Nivel: "+ficha[i].ultNivel

            ultTipo[0].innerText = "Tipo: "+ficha[i].ultTipo

            ultDescricao[0].innerText = ficha[i].ultDescricao

            ultBuff[0].innerText = ficha[i].ultBuffDescri
        }
    }
}