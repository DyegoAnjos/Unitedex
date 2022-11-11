const versatil = document.getElementById('versatil')
const atacante = document.getElementById('atacante')
const defensor = document.getElementById('defensor')
const velocista = document.getElementById('velocista')
const suporte = document.getElementById('suporte')

const icones = [
    {nome:"Aegislash", id:"V"},
    {nome:"Azumarill", id:"V"},
    {nome:"Buzzwole", id:"V"},
    {nome:"Cinderace", id:"A"},
    {nome:"Cramorant", id:"A" },
    {nome:"Decidueye", id:"A"},
    {nome:"Blastoise", id:"D"},
    {nome:"Crustle", id:"D"},
    {nome:"Greedent", id:"D"},
    {nome:"Absol", id:"Vl"},
    {nome:"Dodrio", id:"Vl"},
    {nome:"Gengar", id:"Vl"},
    {nome:"Blissey", id:"S"},
    {nome:"Clefable", id:"S"},
    {nome:"Eldegoss", id:"S"},
]

function caixas(){
    for(let i=0;i<=icones.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src","../imgs/iconePokemon/"+icones[i].nome+".png")
        pokeicone.setAttribute("alt",icones[i].nome)
        pokeicone.setAttribute("class","poke-icon")

        icones[i].valor=i
        pokeicone.setAttribute("onclick", `pokeinfo("${icones[i].nome}")`)

        switch (icones[i].id){
            case "V":
                versatil.appendChild(pokeicone)
            break;
            case "A":
                atacante.appendChild(pokeicone)
            break;
            case "D":
                defensor.appendChild(pokeicone)
            break;
            case "Vl":
                velocista.appendChild(pokeicone)
            break;
            case "S":
                suporte.appendChild(pokeicone)
            break;
        }
    }
}

const header = document.getElementById("header")
const passivaBox = document.getElementsByClassName("passiva")
// const textosBox = document.getElementsByClassName("textos")

const ficha = [
    {nome: "Aegislash", pokemonImg: "stat-aegislash" ,ataque: "F", passivaImg:["Indefeso","Stance-Change"] ,passivaNome:["Indefeso","Mudança de Posição"],
    passivaDescri:["Honedge e Doublade não ganham os benefícios estatísticos da Mudança em Posição, no entanto, suas funções de ataque reforçadas, como o ataque reforçado da Postura da Espada de Aegislash.",
    "Aegislash pode alternar entre Blade Stance e Shield Stance. Usar um movimento de lâmina muda a postura para a postura da lâmina; que aumenta o ataque, a velocidade de movimento em 5% e a velocidade de ataque em 15%. Usar um movimento de escudo muda a postura para a postura de escudo; que aumenta a Defesa e Sp. Defesa e reduz a velocidade de ataque em 20%. Depois de trocar de posição, a velocidade de movimento e a velocidade de ataque básico são aumentadas em 15% por 3,5s."],
    decriAtaque: "Golpeie os inimigos na frente de Aegislash; causando dano a eles. Se a contagem de reforço for um ou mais, os ataques básicos se tornam um ataque reforçado. Quando em Forma Lâmina ou Indefeso: perfura os inimigos, causando dano. Quando em Forma Escudo: acerte inimigos, causando dano e deixando-os incapazes de agir por 0,1s, restaura HP e reduz o cooldown de Espada Secreta e Garra Sombria em 1s quando este ataque atinge. Cada ataque reforçado consome uma contagem de reforço. Até 4 ataques reforçados podem ser armazenados.",

}
]

{/* <source src="../imgs/pokecard/Aegislash/Indefeso.png"> */}
function pokeinfo(id){
    for(let i=0;i<=ficha.length-1;i++){
        if(id === ficha[i].nome){
            //Header
            const infoPokeImg = document.createElement("img")
            infoPokeImg.setAttribute("src", `../imgs/pokecard/${ficha[i].nome}/${ficha[i].pokemonImg}.png`)
            infoPokeImg.setAttribute("alt", ficha[i].nome)
            infoPokeImg.setAttribute("class", "pokeimg")

            header.appendChild(infoPokeImg)

            const infoNome = document.createElement("h2")
            infoNome.setAttribute("class", "nomePokemon")
            infoNome.innerText = ficha[i].nome

            header.appendChild(infoNome)

            const infoAtaque = document.createElement("h4")
            infoAtaque.setAttribute("class","tipoAtaque")

            if(ficha[i].ataque === "F"){
                infoAtaque.style = "red"
                infoAtaque.innerText = "Ataque Físico"
            }
                
            else if(ficha[i].ataque === "E"){
                infoAtaque.style = "purple"
                infoAtaque.innerText = "Ataque Especial"
            }

            header.appendChild(infoAtaque)
            //Falta colocar as evos
            
            //Passiva
            for(let j=0;j<=ficha[i].passivaImg.length-1;j++){
                const infoPassivaImg = document.createElement("img")
                infoPassivaImg.setAttribute("src","../imgs/pokecard/"+ficha[i].nome+"/"+ficha[i].passivaImg[j]+".png")
                infoPassivaImg.setAttribute("alt",ficha.passivaNome)
                infoPassivaImg.setAttribute("class","habilidadeIcone")
                passivaBox[j].appendChild(infoPassivaImg)

                const textosBox = document.createElement("div")
                textosBox.setAttribute("class", "textos")
                passivaBox[j].appendChild(textosBox)
                const textosBoxs = document.getElementsByClassName("textos")

                const infoPassivaNome = document.createElement("h2")
                infoPassivaNome.setAttribute("class","nomeHabilidade")
                infoPassivaNome.innerText= ficha[i].passivaNome[j]
                textosBoxs[j].appendChild(infoPassivaNome)

                const infoTipoHabilidade = document.createElement("p")
                infoTipoHabilidade.setAttribute("class","tipoHabilidade")
                infoTipoHabilidade.innerText = "Habilidade passiva"
                textosBoxs[j].appendChild(infoTipoHabilidade)

                const infoPassivaDescricao = document.createElement("p")
                infoPassivaDescricao.setAttribute("class","descricao")
                infoPassivaDescricao.innerText = ficha[i].passivaDescri[j]
                textosBoxs[j].appendChild(infoPassivaDescricao)
            }

        }
    }
}