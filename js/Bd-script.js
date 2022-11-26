//Elenco
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


//Infos pokémon
const pokeFicha = [
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

//Itens
const itens = [
    {nome:"Botão de fuga", img:"Eject-Button" ,id:"B"},
    {nome:"Cauda Macia", img:"Fluffy-Tail" ,id:"B"},
    {nome:"Cura Total", img:"Full-Heal" ,id:"B"},
    {nome:"Acelerador Gol", img:"Goal-Getter" ,id:"B"},
    {nome:"Poção", img:"Potion" ,id:"B"},
    {nome:"Fumaça Branca", img:"Slow-Smoke" ,id:"B"},
    {nome:"Ataque X", img:"X-Attack" ,id:"B"},
    {nome:"Velocidade X", img:"X-Speed" ,id:"B"},
]

const itensFicha = [
    {
        nome:"B0tão de fuga",
        img:"Eject-Button",
        classe:"B",
        tempo:70,
        descricao:"",
        nivel: 11,
    },
]