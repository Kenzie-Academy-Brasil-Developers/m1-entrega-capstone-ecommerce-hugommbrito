const productList = [
    {
    id: 1,
    img: "./img/HP/AlbusDumbledoreActionFigure.png",
    nameItem: "Alvo Dumbledore Discussando",
    description:
        'Professor Alvo Percival Wulfrik Brian Dumbledore durante o discusso de início das aulas "Não vale a pena viver sonhando e se esquecer de viver.". Imagem de 30cm de altura, réplica de alta qualidade',
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 2,
    img: "./img/HP/AragogueActionFigure.png",
    nameItem: "Aragogue",
    description:
        "A fiel amiga do nosso querido Hagrid. Aragogue saiu das profundezas da Floresta Proibida e pode fazer morada em sua prateleira. Imagem de 12cm de altura, réplica de alta qualidade",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 3,
    img: "./img/HP/BelatrixAdaga.png",
    nameItem: "Adaga de Belatrix",
    description:
        "Este é o infame objeto que tirou a vida de um elfo livre. Você pode ser o responsável por tirar esse objeto de circulação para que não faça mal a mais ninguém. Imagem de 11cm, réplica de alta qualidade",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 4,
    img: "./img/HP/BolasQuadriball.png",
    nameItem: "Caixote de Quadribol",
    description:
        "Para se tornar o melhor apanhador de todos os tempos, você precisa ter os acessórios para treinar em casa. Imagem com 12 x 20 x 7cm, réplica de alta qualidade.",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 5,
    img: "./img/HP/ElderWand.png",
    nameItem: "Varinha das Varinhas",
    description:
        "A famosa varinha de Sabugueiro com núcleo de Pelo de Testrálio, fabricada pelo irmão Antioco Peverell pode ser sua e lhe deixar mais perto de se tornar o Senhor da Morte. Imagem com 37cm, réplica de alta qualidade.",
    value: 120,
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
    qtd: 1,
    },
    {
    id: 6,
    img: "./img/HP/FilchWand.png",
    nameItem: "Varinha de Argo Filtch",
    description:
        "Nem todos nascem com o dom da magia, correto? Ainda assim, as caixinhas do olivaras são lindas.. Imagem com 37cm, réplica de alta qualidade.",
    value: 90,
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
    qtd: 1,
    },
    {
    id: 7,
    img: "./img/HP/grifinCombo.png",
    nameItem: "Cachecol e Gorro Grifinória",
    description:
        "Para manter aquecido esse coração de Leão. Feito em algodão tingido",
    value: 60,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 8,
    img: "./img/HP/grifinRobe.png",
    nameItem: "Vestes Grifinória",
    description:
        "Um verdadeiro grifinório não pode se vestir com um trouxa, correto? Vestes em linho de alta qualidade.",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 9,
    img: "./img/HP/grifinScarf.png",
    nameItem: "Cachecol Grifinória",
    description:
        "Para manter aquecido esse coração de Leão. Feito em algodão tingido",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 10,
    img: "./img/HP/GringotsDragonActionFigure.png",
    nameItem: "Dragão de Gringots",
    description:
        "Está planejando um assalto a um banco bruxo? Não se esqueça de pensar em uma forma de sair. Imagem com 45cm, réplica de alta qualidade.",
    value: 110,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 11,
    img: "./img/HP/HarryHagridMoto.png",
    nameItem: "Hagrid e Harry na moto",
    description:
        "O momento iconico da saída de Harry de Little Wigin deve ser sempre lembrado, mas cuidado, pode ser uma emboscada. Imagem com 25cm, réplica de alta qualidade.",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 12,
    img: "./img/HP/HarryPotterWand.png",
    nameItem: "Varinha de Harry Potter",
    description:
        "A varinha de Azevinho com núcleo de Pena da calda de Feniz pode ser a sua maior aliada quando enfrentando as artes das trevas. Imagem com 37cm, réplica de alta qualidade.",
    value: 110,
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
    qtd: 1,
    },
    {
    id: 13,
    img: "./img/HP/HermionWand.png",
    nameItem: "Varinha de Hermione Granger",
    description:
        "Varinha de videira com núcleo de fibra de coração de dragão, é tudo o que você precisa para os seus estudos e preparos de poções. Imagem com 37cm, réplica de alta qualidade.",
    value: 90,
    addCart: "Adicionar ao carrinho",
    tag: "Varinha",
    qtd: 1,
    },
    {
    id: 14,
    img: "./img/HP/HogwartsCastle.png",
    nameItem: "Castelo de Hogwarts",
    description:
        "Durante as férias de verão te bate uma saudade da escola? Calma bruxão, é normal! Ms você pode ter essa réplica em casa para amenizar a nostalgia. Imagem com 15cm, réplica de alta qualidade.",
    value: 230,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 15,
    img: "./img/HP/HogwartsHousesPins.png",
    nameItem: "Botons das Casas de Hogwarts",
    description:
        "Um pouco indeciso? Não tem problema, você pode sair de casa mostrando o seu mood do dia, de acordo com a casa que colocar no peito. Botons com 4.5cm.",
    value: 75,
    addCart: "Adicionar ao carrinho",
    tag: "Colecionáveis",
    qtd: 1,
    },
    {
    id: 16,
    img: "./img/HP/huffleRobe.png",
    nameItem: "Vestes Lufa-Lufa",
    description:
        "Um verdadeiro lufano não pode se vestir com um trouxa, correto? Vestes em linho de alta qualidade.",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 17,
    img: "./img/HP/huffleScarf.png",
    nameItem: "Cachecol Lufa-Lufa",
    description:
        "Ouvi dizer que está muito frio nas estufas de Hogwarts, mas isso não é desculpa para perder a aula de Herbologia. Se agaselhe e vá cuidar das mandrágoras. Feito em algodão tingido",
    value: 60,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 18,
    img: "./img/HP/RavenCombo.png",
    nameItem: "Combo de Frio da Cornival",
    description:
        "O ideal apra um corvino orgulhoso, não deixe que ninguém tenha dúvida de que sua inteligência acima da média te levou para a casa da águia. contém uma par de lucas, um cachecol e um gorro, feitos em algodão tingido",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 19,
    img: "./img/HP/ravenRobe.png",
    nameItem: "vestes Corvinal",
    description:
        "Um verdadeiro corvino não pode se vestir com um trouxa, correto? Vestes em linho de alta qualidade.",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 20,
    img: "./img/HP/RavenScarf.png",
    nameItem: "Cachecol Corvinal",
    description:
        "O professor flitwick vai ensinar a manipular o clima em sua sala de aula, e você não vai perder essa aula por causa de um pouco de neve, não é? Feito em algodão tingido",
    value: 60,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 21,
    img: "./img/HP/slitherCombo.png",
    nameItem: "Combo de Frio da Cornival",
    description:
        "O orgulho de ser puro sangue deve ser estampado para que todos possam ver, não deixe que esses sangues ruins se confundam com você. contém uma par de lucas, um cachecol e um gorro, feitos em algodão tingido",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 22,
    img: "./img/HP/slitherRobe.png",
    nameItem: "vestes Sonserina",
    description:
        "Um verdadeiro sonserino não pode se vestir com um trouxa, correto? Vestes em linho de alta qualidade.",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    },
    {
    id: 23,
    img: "./img/HP/SlitherScarf.png",
    nameItem: "Cachecol Corvinal",
    description:
        "Está muito frio nas masmorras, se agasalhe antes de descer para o salão comunal. Feito em algodão tingido",
    value: 60,
    addCart: "Adicionar ao carrinho",
    tag: "Vestes",
    qtd: 1,
    }
]

let produtosCarrinho = []

let produtosFiltrados = []

let produtosPesquisados = []