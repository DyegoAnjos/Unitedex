const versatil = document.getElementById('versatil')
const atacante = document.getElementById('atacante')
const defensor = document.getElementById('defensor')
const velocista = document.getElementById('velocista')
const suporte = document.getElementById('suporte')

const icones = [
    {nome:"Aegislash", valor:0, id:"V"},
    {nome:"Azumarill", valor:0, id:"V"},
    {nome:"Buzzwole", valor:0, id:"V"},
    {nome:"Cinderace", valor:0, id:"A"},
    {nome:"Cramorant", valor:0, id:"A" },
    {nome:"Decidueye", valor:0, id:"A"},
    {nome:"Blastoise", valor:0, id:"D"},
    {nome:"Crustle", valor:0, id:"D"},
    {nome:"Greedent", valor:0, id:"D"},
    {nome:"Absol", valor:0, id:"Vl"},
    {nome:"Dodrio", valor:0, id:"Vl"},
    {nome:"Gengar", valor:0, id:"Vl"},
    {nome:"Blissey", valor:0, id:"S"},
    {nome:"Clefable", valor:0, id:"S"},
    {nome:"Eldegoss", valor:0, id:"S"},
]

function caixas(){
    for(var i=0;i<=icones.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src","../imgs/iconePokemon/"+icones[i].nome+".png")
        pokeicone.setAttribute("alt",icones[i].nome)
        pokeicone.setAttribute("class","poke-icon")

        icones[i].valor=i
        pokeicone.setAttribute("onclick", `pokeinfo(${icones[i].valor})`)

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

const fichas = [
    {id: 0, nome:"Indefeso"}
]


function pokeinfo(id){

}