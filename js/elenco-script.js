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

const ficha = [
    {
        nome: "Aegislash",
        pokemonImg: "stat-aegislash" ,
        ataque: "F", 
        evoNome:["Honedge","Doublade"],
        evoNivel:[5,7],
        passivaImg:["Indefeso","Stance-Change"] ,
        passivaNome:["Indefeso","Mudança de Posição"],
        passivaDescri:["Honedge e Doublade não ganham os benefícios estatísticos da Mudança em Posição, no entanto, suas funções de ataque reforçadas, como o ataque reforçado da Postura da Espada de Aegislash.",
            "Aegislash pode alternar entre Blade Stance e Shield Stance. Usar um movimento de lâmina muda a postura para a postura da lâmina; que aumenta o ataque, a velocidade de movimento em 5% e a velocidade de ataque em 15%. Usar um movimento de escudo muda a postura para a postura de escudo; que aumenta a Defesa e Sp. Defesa e reduz a velocidade de ataque em 20%. Depois de trocar de posição, a velocidade de movimento e a velocidade de ataque básico são aumentadas em 15% por 3,5s."],
        decriAtaque: "Golpeie os inimigos na frente de Aegislash; causando dano a eles. Se a contagem de reforço for um ou mais, os ataques básicos se tornam um ataque reforçado. Quando em Forma Lâmina ou Indefeso: perfura os inimigos, causando dano. Quando em Forma Escudo: acerte inimigos, causando dano e deixando-os incapazes de agir por 0,1s, restaura HP e reduz o cooldown de Espada Secreta e Garra Sombria em 1s quando este ataque atinge. Cada ataque reforçado consome uma contagem de reforço. Até 4 ataques reforçados podem ser armazenados.",
        inicialNome: ["Furtividade nas Sombras","Defesa de Ferro"],
        inicialImg: ["Shadow-Sneak","Iron-Defense"],
        inicialTempo: [6.00,7.00],
        inicialTipo: ["Investida","Buff"],
        inicialDescri:["Projete uma sombra na direção designada; causando dano aos inimigos atingidos. Depois que a sombra atinge um inimigo ou percorre sua distância máxima, Aegislash se teletransporta para o local da sombra, causando dano a inimigos próximos e aumentando a contagem de impulso em 1.",
            "Envolve Aegislash em uma poderosa força protetora por 3s ou após bloquear um ataque. Se este movimento bloquear um ataque, aumente a contagem de reforço em 1."],
        habilidades:[
            {habilidadeNome:["Espada Secreta","Garra Sombria"],
            habilidadeNivel:5,
            habilidadeImg:["Sacred-Sword","Shadow-Claw"],
            habilidadeTempo:[7.50,5.50],
            habilidadeTipo: ["Area","Investida"],
            habilidadeDescri:["Aegislash enfia sua lâmina no chão; criando uma zona triangular. Esta zona explode com um poder oculto, causando dano aos inimigos na área e os jogando no ar por 0,6s. Também aumenta a contagem de impulsos em 1 para cada inimigo atingido (limitado a 2 para wilds, 4 para jogadores). Ao mesmo tempo que a erupção, Aegislash corta para frente, causando dano adicional aos inimigos atingidos. Por 3s após este golpe atingir, o dano causado por Aegislash ignora 45% da Defesa do inimigo.",
                "Aegislash corta com sua lâmina duas vezes na direção designada, causando dano aos inimigos atingidos. Siga com uma barra ascendente final que causa dano aos inimigos atingidos e os joga no ar por 0,75s. A contagem de reforço aumenta em 1 quando pelo menos uma das três barras atinge."]},
            
            {habilidadeNome:["Vasta Proteção","Cabeça de Ferro"],
            habilidadeNivel:7,
            habilidadeImg:["Wide-Guard","Iron-Head"],
            habilidadeTempo:[9.00,7.00],
            habilidadeTipo: ["Buff","Buff"],
            habilidadeDescri:["Concentre-se no lugar por um curto período de tempo para criar um grande escudo no Aegislash por 1,2s. Quando este grande escudo aparece, a contagem de reforço aumenta em 1, concedendo um escudo ao Aegislash e empurra os inimigos na frente. Enquanto este grande escudo estiver ativo, os ataques de jogadores inimigos aumentam a contagem de impulsos em 1 para cada inimigo diferente (limitando em 2). Quando este movimento termina, empurre os inimigos por .75s na frente de Aegislash mais uma vez e reduza a velocidade deles em 45% por 2s. Ganhe 1 contagem reforçada se o empurrão no final atingir pelo menos um inimigo. Se o grande escudo se esgotar antes que a duração deste movimento termine, a contagem reforçada é concedida independentemente de um inimigo ser atingido.",
            "Dash na direção designada; causando dano aos inimigos atingidos. Também aumenta a contagem de impulsos em 1 e protege Aegislash com um escudo especial por 1s depois. Este escudo não protege de obstáculos, mas pode anular o dano. Quando o escudo bloqueia um ataque; ele desaparece, o cooldown é reduzido em 50% e a contagem de boosts é aumentada em 1."]}
        ],
        ultNome:"Golpe de Misericórdia",
        ultImg:"Coup-de-Grace",
        ultNivel: 9,
        ultTipo: "Area",
        ultDescricao: "Desfere um corte que fende o chão na direção designada, causando dano aos Pokémon oponentes atingidos. Quanto menor a porcantagem de PS restante dos Pokémon oponentes, mais dano o movimento causa. Se este Movimento Unite nocautear um Pokémon oponente, o contador de potência aumenta.",
        ultBuffDescri: "30% de velocidade de movimento, 30% de CDR, 20% de escudo HP máximo"

    },
    {
        nome: "Cinderace",
        pokemonImg: "stat-cinderace" ,
        ataque: "F", 
        evoNome:["Scorbunny","Raboot"],
        evoNivel:[5,7],
        passivaImg:["Blaze"] ,
        passivaNome:["Incêndio"],
        passivaDescri:["Quando estiver com metade do HP ou menos, a taxa de acerto crítico é aumentada em 10% e a velocidade de ataque automático é aumentada em 20% por 5s (30s cooldown). Ao atingir um inimigo com um ataque automático, uma cinza é colocada nesse inimigo por 5s. Ataques e movimentos reforçados aplicam 2 cinzas. Quando o alvo recebe sua 5ª cinza, todos eles serão consumidos para causar dano adicional ao inimigo. Contra Pokémon Selvagem: O dano total é limitado a 500."],
        decriAtaque: "Torna-se um ataque reforçado a cada terceiro ataque ou ao usar um movimento, causando dano aumentado. Contra Pokémon Selvagens: O dano do Ataque Básico é limitado a 1000 e o dano do Ataque Reforçado é limitado a 1300.",
        inicialNome: ["Brasa","Movimento Baixo"],
        inicialImg: ["Ember","Low-Sweep"],
        inicialTempo: [6.00,7.50],
        inicialTipo: ["Acerto Certo","Investida"],
        inicialDescri:["Cinderace dispara uma pequena chama, causando dano e aplicando queimadura para atingir os inimigos. A queima dura 3s e reduz o Ataque e Sp do inimigo. Ataque em 5%.",
            "Cinderace faz uma rápida varredura baixa na direção designada, causando dano a qualquer inimigo atingido."],
        habilidades:[
            {habilidadeNome:["Bola Incendiária","Chute Labareda"],
            habilidadeNivel:7,
            habilidadeImg:["Pyro-Ball","Blaze-Kick"],
            habilidadeTempo:[5.00,8.00],
            habilidadeTipo: ["Longo Alcance","Acerto Certo"],
            habilidadeDescri:["Cinderace chuta uma bola de fogo em uma direção designada, queimando e causando dano aos inimigos atingidos. A queima dura 3s e reduz o Ataque e Sp do inimigo. Ataque em 5%.",
                "Execute um chute voador de fogo, pulando em direção a um inimigo designado; empurrando e queimando-os. Cinderace pode pousar em uma direção direcionada após esse movimento atingir. Além disso, Cinderace é imune a obstáculos durante este movimento e é sempre um acerto crítico. A queima dura 3s e reduz o Ataque e Sp do inimigo. Ataque em 5%."]},
            
            {habilidadeNome:["Ataque de Chamas","Fintar"],
            habilidadeNivel:8,
            habilidadeImg:["Flame-Charge","Feint"],
            habilidadeTempo:[5.00,11.00],
            habilidadeTipo: ["Investida","Buff"],
            habilidadeDescri:["Cinderace avança, causando dano a todos os inimigos atingidos.",
            	"Cinderace se esquiva, aumentando a velocidade de movimento em 25% por 2s e tornando-se brevemente invencível por 44 quadros (0,73s)."]}
        ],
        ultNome:"Bicicleta Flamejante",
        ultImg:"Blazing-Bicycle-Kick",
        ultNivel: 9,
        ultTipo: "Acerto Certo",
        ultDescricao: "Crie uma bola de fogo gigante e chute-a em direção ao inimigo designado para um golpe certeiro, causando dano aos inimigos na área de efeito. Aplique 2 pilhas de cinzas no alvo e cause dano adicional com base no HP perdido.",
        ultBuffDescri: "30% de velocidade de movimento, 35% de velocidade de ataque, 20% de escudo máximo de HP"

    },
]

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

            //Criação de Evo
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