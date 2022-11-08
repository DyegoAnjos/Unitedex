const versatil = document.getElementById('versatil')
const atacante = document.getElementById('atacante')
const defensor = document.getElementById('defensor')
const velocista = document.getElementById('velocista')
const suporte = document.getElementById('suporte')

const iconesVersatil = [
    {src:"../imgs/iconePokemon/Aegislash.png", alt:"Aegislash", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Azumarill.png", alt:"Azumarill", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Buzzwole.png", alt:"Buzzwole", clase:"poke-icon", valor:0},
]

const iconesAtacante = [
    {src:"../imgs/iconePokemon/Cinderace.png", alt:"Cinderace", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Cramorant.png", alt:"Cramorant", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Decidueye.png", alt:"Decidueye", clase:"poke-icon", valor:0},
]

const iconesDefensor = [
    {src:"../imgs/iconePokemon/Blastoise.png", alt:"Blastoise", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Crustle.png", alt:"Crustle", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Greedent.png", alt:"Greedent", clase:"poke-icon", valor:0},
]

const iconesVelocista = [
    {src:"../imgs/iconePokemon/Absol.png", alt:"Absol", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Dodrio.png", alt:"Dodrio", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Gengar.png", alt:"Gengar", clase:"poke-icon", valor:0},
]

const iconesSuporte = [
    {src:"../imgs/iconePokemon/Blissey.png", alt:"Blissey", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Clefable.png", alt:"Clefable", clase:"poke-icon", valor:0},
    {src:"../imgs/iconePokemon/Eldegoss.png", alt:"Eldegoss", clase:"poke-icon", valor:0},
]


function caixas(){
    for(var i=0;i<=iconesVersatil.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src",iconesVersatil[i].src)
        pokeicone.setAttribute("alt",iconesVersatil[i].alt)
        pokeicone.setAttribute("class",iconesVersatil[i].clase)

        iconesVersatil[i].valor=i
        pokeicone.setAttribute("onclik", `pokeinfo(${iconesVersatil[i].valor})`)
        console.log(iconesVersatil[i].valor)
        versatil.appendChild(pokeicone)
    }

    for(var i=0;i<=iconesAtacante.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src",iconesAtacante[i].src)
        pokeicone.setAttribute("alt",iconesAtacante[i].alt)
        pokeicone.setAttribute("class",iconesAtacante[i].clase)

        iconesAtacante[i].valor=iconesAtacante[i].valor+i+iconesVersatil.length
        pokeicone.setAttribute("onclik", `pokeinfo(${iconesAtacante[i].valor})`)
        console.log(iconesAtacante[i].valor)
        atacante.appendChild(pokeicone)
    }

    for(var i=0;i<=iconesDefensor.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src",iconesDefensor[i].src)
        pokeicone.setAttribute("alt",iconesDefensor[i].alt)
        pokeicone.setAttribute("class",iconesDefensor[i].clase)

        iconesDefensor[i].valor=iconesDefensor[i].valor+i+iconesAtacante.length

        pokeicone.setAttribute("onclik", `pokeinfo(${iconesDefensor[i].valor})`)
        console.log(iconesDefensor[i].valor)
        defensor.appendChild(pokeicone)
    }

    for(var i=0;i<=iconesVelocista.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src",iconesVelocista[i].src)
        pokeicone.setAttribute("alt",iconesVelocista[i].alt)
        pokeicone.setAttribute("class",iconesVelocista[i].clase)

        iconesVelocista[i].valor=iconesVelocista[i].valor+i+iconesDefensor.length

        pokeicone.setAttribute("onclik", `pokeinfo(${iconesVelocista[i].valor})`)
        console.log(iconesVelocista[i].valor)

        velocista.appendChild(pokeicone)
    }

    for(var i=0;i<=iconesSuporte.length-1;i++){
        const pokeicone = document.createElement("img")
        pokeicone.setAttribute("src",iconesSuporte[i].src)
        pokeicone.setAttribute("alt",iconesSuporte[i].alt)
        pokeicone.setAttribute("class",iconesSuporte[i].clase)
        iconesSuporte[i].valor=iconesSuporte[i].valor+i+iconesVelocista.length
        
        pokeicone.setAttribute("onclik", `pokeinfo(${iconesSuporte[i].valor})`)
        console.log(iconesSuporte[i].valor)
        suporte.appendChild(pokeicone)
    }
}