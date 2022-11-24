const versatil = document.getElementById('versatil')
const atacante = document.getElementById('atacante')
const defensor = document.getElementById('defensor')
const velocista = document.getElementById('velocista')
const suporte = document.getElementById('suporte')

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