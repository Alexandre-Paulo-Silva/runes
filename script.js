/* =========================================================
   ORÁCULO DAS 25 RUNAS NÓRDICAS
   ========================================================= */


/* =========================================================
   BANCO DE RUNAS
   ========================================================= */

const bancoRunas = [

    {
        nome: "FEHU",
        nomeEN: "FEHU",
        simbolo: "ᚠ",

        desc:
            "Riqueza, bens materiais e sucesso merecido. Indica colheita de frutos e prosperidade financeira.",

        descEN:
            "Wealth, material goods and earned success. It indicates reaping the fruits of your efforts and financial prosperity."
    },

    {
        nome: "URUZ",
        nomeEN: "URUZ",
        simbolo: "ᚢ",

        desc:
            "Força vital, saúde e coragem. Representa transformações profundas e energia para superar desafios.",

        descEN:
            "Vital strength, health and courage. Represents deep transformation and the energy to overcome challenges."
    },

    {
        nome: "THURISAZ",
        nomeEN: "THURISAZ",
        simbolo: "ᚦ",

        desc:
            "Proteção e alertas. Uma força passiva de defesa. Pede reflexão antes de agir para evitar erros.",

        descEN:
            "Protection and warnings. A passive defensive force. Reflect before acting to avoid mistakes."
    },

    {
        nome: "ANSUZ",
        nomeEN: "ANSUZ",
        simbolo: "ᚨ",

        desc:
            "Sapiência, mensagens e comunicação. Siga conselhos de pessoas mais experientes e confie na sua intuição.",

        descEN:
            "Wisdom, messages and communication. Follow advice from experienced people and trust your intuition."
    },

    {
        nome: "RAIDO",
        nomeEN: "RAIDO",
        simbolo: "ᚱ",

        desc:
            "Jornada, viagem e evolução. Simboliza uma mudança de caminho, movimento na vida ou viagem física.",

        descEN:
            "Journey, travel and evolution. Symbolizes a change of path, movement in life, or a physical journey."
    },

    {
        nome: "KENAZ",
        nomeEN: "KENAZ",
        simbolo: "ᚲ",

        desc:
            "Iluminação, criatividade e paixão. A escuridão se dissipa dando lugar a novas ideias e clareza mental.",

        descEN:
            "Illumination, creativity and passion. Darkness gives way to new ideas and mental clarity."
    },

    {
        nome: "GEBO",
        nomeEN: "GEBO",
        simbolo: "ᚷ",

        desc:
            "União, presentes e parcerias. Sinal de equilíbrio nos relacionamentos e generosidade mútua.",

        descEN:
            "Union, gifts and partnerships. A sign of balance in relationships and mutual generosity."
    },

    {
        nome: "WUNJO",
        nomeEN: "WUNJO",
        simbolo: "ᚹ",

        desc:
            "Alegria, harmonia e satisfação. Período de celebração, paz de espírito e conquistas felizes.",

        descEN:
            "Joy, harmony and satisfaction. A period of celebration, peace of mind and happy achievements."
    },

    {
        nome: "HAGALAZ",
        nomeEN: "HAGALAZ",
        simbolo: "ᚺ",

        desc:
            "Crise, forças da natureza e disrupção. Mudanças bruscas e inevitáveis que destroem o velho para criar o novo.",

        descEN:
            "Crisis, forces of nature and disruption. Sudden, unavoidable changes that destroy the old to create the new."
    },

    {
        nome: "NAUTHIZ",
        nomeEN: "NAUTHIZ",
        simbolo: "ᚾ",

        desc:
            "Necessidade, restrição e lições. Ensina a ter paciência diante dos atrasos e focar apenas no essencial.",

        descEN:
            "Need, restriction and lessons. Teaches patience through delays and focus only on what is essential."
    },

    {
        nome: "ISA",
        nomeEN: "ISA",
        simbolo: "ᛁ",

        desc:
            "Gelo, pausa e estagnação. O momento pede congelamento dos planos. Aguarde a hora certa de agir.",

        descEN:
            "Ice, pause and stagnation. The moment calls for plans to be frozen. Wait for the right time to act."
    },

    {
        nome: "JERA",
        nomeEN: "JERA",
        simbolo: "ᛃ",

        desc:
            "Colheita, ciclo anual e recompensa. Tudo o que foi plantado com esforço agora trará retornos positivos.",

        descEN:
            "Harvest, yearly cycle and reward. Everything planted with effort now brings positive returns."
    },

    {
        nome: "EIHWAZ",
        nomeEN: "EIHWAZ",
        simbolo: "ᛇ",

        desc:
            "Resistência, estabilidade e longevidade. Você tem a força de uma árvore robusta para suportar pressões.",

        descEN:
            "Resistance, stability and longevity. You have the strength of a sturdy tree to withstand pressure."
    },

    {
        nome: "PERTHRO",
        nomeEN: "PERTHRO",
        simbolo: "ᛈ",

        desc:
            "Mistério, segredos e sorte. Destino oculto se revelando. Bom momento para jogos ou revelações inesperadas.",

        descEN:
            "Mystery, secrets and luck. A hidden destiny is being revealed. A good time for games or unexpected revelations."
    },

    {
        nome: "ALGIZ",
        nomeEN: "ALGIZ",
        simbolo: "ᛉ",

        desc:
            "Proteção divina, escudo e conexão espiritual. Você está seguro. Siga em frente sem temores.",

        descEN:
            "Divine protection, shield and spiritual connection. You are protected. Move forward without fear."
    },

    {
        nome: "SOWILO",
        nomeEN: "SOWILO",
        simbolo: "ᛊ",

        desc:
            "O Sol, vitória e sucesso absoluto. Energia vital máxima, clareza e saúde restabelecida.",

        descEN:
            "The Sun, victory and success. Maximum vital energy, clarity and restored health."
    },

    {
        nome: "TIWAZ",
        nomeEN: "TIWAZ",
        simbolo: "ᛏ",

        desc:
            "O guerreiro, justiça e sacrifício. Lute pelo que é correto. Indica vitória em disputas e processos.",

        descEN:
            "The warrior, justice and sacrifice. Fight for what is right. Indicates victory in disputes and legal matters."
    },

    {
        nome: "BERKANAN",
        nomeEN: "BERKANAN",
        simbolo: "ᛒ",

        desc:
            "Nascimento, crescimento e fertilidade. Novos começos, gestação de projetos e renovação na família.",

        descEN:
            "Birth, growth and fertility. New beginnings, the gestation of projects and renewal in the family."
    },

    {
        nome: "EHWAZ",
        nomeEN: "EHWAZ",
        simbolo: "ᛖ",

        desc:
            "Progresso, movimento e parceria de confiança. Avanço rápido em equipe ou cooperação profissional.",

        descEN:
            "Progress, movement and trusted partnership. Rapid advancement through teamwork or professional cooperation."
    },

    {
        nome: "MANNAZ",
        nomeEN: "MANNAZ",
        simbolo: "ᛗ",

        desc:
            "A humanidade, autoconhecimento e o eu interno. Olhe para dentro de si e busque o equilíbrio com o coletivo.",

        descEN:
            "Humanity, self-knowledge and the inner self. Look within and seek balance with the collective."
    },

    {
        nome: "LAGUZ",
        nomeEN: "LAGUZ",
        simbolo: "ᛚ",

        desc:
            "Água, intuição e emoções fluídas. Purificação necessária. Siga o fluxo natural da vida e seus sentimentos.",

        descEN:
            "Water, intuition and flowing emotions. Necessary purification. Follow the natural flow of life and your feelings."
    },

    {
        nome: "INGWAZ",
        nomeEN: "INGWAZ",
        simbolo: "ᛜ",

        desc:
            "Realização, semente e descanso produtivo. Conclusão bem-sucedida de um ciclo. Hora de relaxar.",

        descEN:
            "Fulfillment, seed and productive rest. Successful completion of a cycle. Time to relax."
    },

    {
        nome: "DAGAZ",
        nomeEN: "DAGAZ",
        simbolo: "ᛞ",

        desc:
            "Despertar, novo dia e transformação radical. Uma grande virada de luz que resolve problemas antigos.",

        descEN:
            "Awakening, new day and radical transformation. A great turning point of light resolves old problems."
    },

    {
        nome: "OTHALA",
        nomeEN: "OTHALA",
        simbolo: "ᛟ",

        desc:
            "Herança, lar e raízes. Ligação forte com a família, bens imobiliários ou valores herdados do passado.",

        descEN:
            "Inheritance, home and roots. A strong connection to family, property, or values inherited from the past."
    },

    {
        nome: "WYRD",
        nomeEN: "WYRD (WHITE RUNE)",
        simbolo: "",

        desc:
            "O desconhecido e o carma. O destino está totalmente em aberto e nas suas mãos. Confie no Universo.",

        descEN:
            "The unknown and karma. Destiny is completely open and in your hands. Trust the Universe."
    }

];


/* =========================================================
   TEXTOS DA INTERFACE
   ========================================================= */

const textos = {

    tituloPrincipal: {
        pt: "Oráculo das Três Runas",
        en: "Three Runes Oracle"
    },

    instrucao: {
        pt: "Concentre-se em sua questão. Vamos sortear o Passado, o Presente e o Futuro.",
        en: "Focus on your question. We will draw the Past, Present, and Future."
    },

    drawPast: {
        pt: "Sortear Primeira Runa (Passado)",
        en: "Draw First Rune (Past)"
    },

    drawPresent: {
        pt: "Sortear Segunda Runa (Presente)",
        en: "Draw Second Rune (Present)"
    },

    drawFuture: {
        pt: "Sortear Terceira Runa (Futuro)",
        en: "Draw Third Rune (Future)"
    },

    seeDestiny: {
        pt: "Ver Destino Completo",
        en: "Reveal Full Destiny"
    },

    pastRevealed: {
        pt: "➔ PASSADO SE REVELOU",
        en: "➔ PAST HAS BEEN REVEALED"
    },

    presentRevealed: {
        pt: "➔ PRESENTE SE REVELOU",
        en: "➔ PRESENT HAS BEEN REVEALED"
    },

    futureRevealed: {
        pt: "➔ FUTURO SE REVELOU",
        en: "➔ FUTURE HAS BEEN REVEALED"
    },

    verdict: {
        pt: "O Veredito do Destino",
        en: "The Verdict of Destiny"
    },

    past: {
        pt: "Passado",
        en: "Past"
    },

    present: {
        pt: "Presente",
        en: "Present"
    },

    future: {
        pt: "Futuro",
        en: "Future"
    },

    consultAgain: {
        pt: "Consultar Novamente",
        en: "Consult Again"
    },

    menuRunas: {
        pt: "Runas",
        en: "Runes"
    },

    music: {
        pt: "Música Nórdica",
        en: "Nordic Music"
    },

    libraryTitle: {
        pt: "As 25 Runas Nórdicas",
        en: "The 25 Norse Runes"
    },

    libraryInstruction: {
        pt: "Clique em uma runa para descobrir seu significado.",
        en: "Click a rune to discover its meaning."
    },

    back: {
        pt: "Voltar à Consulta",
        en: "Back to Reading"
    },

    selectRune: {
        pt: "Selecione uma runa",
        en: "Select a rune"
    },

    selectRuneDescription: {
        pt: "Escolha uma das pedras para conhecer seu significado.",
        en: "Choose one of the stones to discover its meaning."
    }

};


/* =========================================================
   ESTADO DO JOGO
   ========================================================= */

let etapa = 0;

let runasSorteadas = [];

let copiaSaco = [...bancoRunas];

let idioma = "pt";

let runaSelecionadaBiblioteca = null;


/* =========================================================
   ELEMENTOS
   ========================================================= */

const paginaConsulta =
    document.getElementById("paginaConsulta");

const paginaRunas =
    document.getElementById("paginaRunas");

const btnAbrirRunas =
    document.getElementById("btnAbrirRunas");

const btnPrincipal =
    document.getElementById("btnPrincipal");

const focoBox =
    document.getElementById("runaFocoBox");

const focoSimbolo =
    document.getElementById("focoSimbolo");

const focoNome =
    document.getElementById("focoNome");

const focoDesc =
    document.getElementById("focoDesc");

const etapaTexto =
    document.getElementById("etapaTexto");

const resultadoFinal =
    document.getElementById("resultadoFinal");

const musica =
    document.getElementById("musicaViking");

const btnMusica =
    document.getElementById("btnMusica");

const volumeMusica =
    document.getElementById("volumeMusica");


/* =========================================================
   FUNÇÃO DE TRADUÇÃO
   ========================================================= */

function t(chave) {

    return textos[chave][idioma];

}


/* =========================================================
   NOME DA RUNA
   ========================================================= */

function obterNomeRuna(runa) {

    if (idioma === "en") {

        return runa.nomeEN;

    }

    return runa.nome;

}


/* =========================================================
   DESCRIÇÃO DA RUNA
   ========================================================= */

function obterDescRuna(runa) {

    if (idioma === "en") {

        return runa.descEN;

    }

    return runa.desc;

}


/* =========================================================
   SÍMBOLO
   ========================================================= */

function obterSimbolo(runa) {

    if (runa.simbolo && runa.simbolo.trim() !== "") {

        return runa.simbolo;

    }

    return "✦";

}


/* =========================================================
   AVANÇAR CONSULTA
   ========================================================= */

function avancarJogo() {

    if (etapa < 3) {

        if (copiaSaco.length === 0) {

            copiaSaco = [...bancoRunas];

        }


        const indice =
            Math.floor(
                Math.random() * copiaSaco.length
            );


        const runa =
            copiaSaco.splice(indice, 1)[0];


        runasSorteadas.push(runa);


        focoBox.style.display = "block";

        focoSimbolo.textContent =
            obterSimbolo(runa);

        focoNome.textContent =
            obterNomeRuna(runa);

        focoDesc.textContent =
            obterDescRuna(runa);


        if (etapa === 0) {

            etapaTexto.textContent =
                t("pastRevealed");

            etapa = 1;

        }

        else if (etapa === 1) {

            etapaTexto.textContent =
                t("presentRevealed");

            etapa = 2;

        }

        else if (etapa === 2) {

            etapaTexto.textContent =
                t("futureRevealed");

            etapa = 3;

        }


        atualizarBotaoPrincipal();

    }

    else {

        mostrarResultado();

    }

}


/* =========================================================
   BOTÃO PRINCIPAL
   ========================================================= */

function atualizarBotaoPrincipal() {

    if (etapa === 0) {

        btnPrincipal.textContent =
            t("drawPast");

    }

    else if (etapa === 1) {

        btnPrincipal.textContent =
            t("drawPresent");

    }

    else if (etapa === 2) {

        btnPrincipal.textContent =
            t("drawFuture");

    }

    else {

        btnPrincipal.textContent =
            t("seeDestiny");

    }

}


/* =========================================================
   MOSTRAR RESULTADO
   ========================================================= */

function mostrarResultado() {

    focoBox.style.display = "none";

    etapaTexto.textContent = "";

    btnPrincipal.style.display = "none";

    resultadoFinal.style.display = "block";


    for (
        let i = 0;
        i < 3;
        i++
    ) {

        const runa =
            runasSorteadas[i];

        if (!runa) continue;


        document.getElementById(
            `resSimbolo${i}`
        ).textContent =
            obterSimbolo(runa);


        document.getElementById(
            `resNome${i}`
        ).textContent =
            obterNomeRuna(runa);


        document.getElementById(
            `resDesc${i}`
        ).textContent =
            obterDescRuna(runa);

    }


    document.getElementById("posicao0").textContent =
        t("past");

    document.getElementById("posicao1").textContent =
        t("present");

    document.getElementById("posicao2").textContent =
        t("future");

}


/* =========================================================
   REINICIAR JOGO
   ========================================================= */

function reiniciarJogo() {

    etapa = 0;

    runasSorteadas = [];

    copiaSaco = [...bancoRunas];


    focoBox.style.display = "none";

    resultadoFinal.style.display = "none";

    btnPrincipal.style.display = "block";

    etapaTexto.textContent = "";


    atualizarBotaoPrincipal();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   ABRIR BIBLIOTECA DE RUNAS
   ========================================================= */

function abrirBiblioteca() {

    paginaConsulta.style.display = "none";

    paginaRunas.style.display = "block";

    btnAbrirRunas.style.display = "none";


    renderizarBiblioteca();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   VOLTAR PARA CONSULTA
   ========================================================= */

function voltarConsulta() {

    paginaRunas.style.display = "none";

    paginaConsulta.style.display = "block";

    btnAbrirRunas.style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   RENDERIZAR BIBLIOTECA
   ========================================================= */

function renderizarBiblioteca() {

    const grid =
        document.getElementById("gridBiblioteca");


    grid.innerHTML = "";


    const rotacoes = [
        "-2deg",
        "1deg",
        "-1deg",
        "2deg",
        "-1.5deg",
        "1.5deg"
    ];


    bancoRunas.forEach(
        (runa, index) => {

            const pedra =
                document.createElement("button");


            pedra.type = "button";

            pedra.className =
                "pedra-runa";


            pedra.style.setProperty(
                "--rotacao",
                rotacoes[index % rotacoes.length]
            );


            if (
                index === runaSelecionadaBiblioteca
            ) {

                pedra.classList.add(
                    "selecionada"
                );

            }


            const simbolo =
                obterSimbolo(runa);


            pedra.innerHTML = `

                <span class="pedra-simbolo">
                    ${simbolo}
                </span>

                <span class="pedra-nome">
                    ${obterNomeRuna(runa)}
                </span>

            `;


            pedra.addEventListener(
                "click",
                () => {

                    mostrarDetalheRuna(index);

                }
            );


            grid.appendChild(pedra);

        }
    );

}


/* =========================================================
   MOSTRAR DETALHE DA RUNA
   ========================================================= */

function mostrarDetalheRuna(index) {

    runaSelecionadaBiblioteca = index;


    const runa =
        bancoRunas[index];


    document.getElementById(
        "detalhePlaceholder"
    ).style.display = "none";


    document.getElementById(
        "detalheConteudo"
    ).style.display = "block";


    document.getElementById(
        "detalheSimbolo"
    ).textContent =
        obterSimbolo(runa);


    document.getElementById(
        "detalheNome"
    ).textContent =
        obterNomeRuna(runa);


    document.getElementById(
        "detalheDesc"
    ).textContent =
        obterDescRuna(runa);


    renderizarBiblioteca();

}


/* =========================================================
   ALTERAR IDIOMA
   ========================================================= */

function alternarIdioma() {

    if (idioma === "pt") {

        idioma = "en";

    }

    else {

        idioma = "pt";

    }


    document.documentElement.lang =
        idioma === "pt"
            ? "pt-BR"
            : "en";


    atualizarIdioma();

}


/* =========================================================
   ATUALIZAR TODA A INTERFACE
   ========================================================= */

function atualizarIdioma() {

    document.getElementById(
        "btnIdioma"
    ).textContent =
        idioma === "pt"
            ? "🇺🇸 English"
            : "🇧🇷 Português";


    document.getElementById(
        "tituloPrincipal"
    ).textContent =
        t("tituloPrincipal");


    document.getElementById(
        "instrucao"
    ).textContent =
        t("instrucao");


    document.getElementById(
        "textoMenuRunas"
    ).textContent =
        t("menuRunas");


    document.getElementById(
        "textoMusica"
    ).textContent =
        t("music");


    document.getElementById(
        "tituloResultado"
    ).textContent =
        t("verdict");


    document.getElementById(
        "btnReiniciar"
    ).textContent =
        t("consultAgain");


    document.getElementById(
        "posicao0"
    ).textContent =
        t("past");


    document.getElementById(
        "posicao1"
    ).textContent =
        t("present");


    document.getElementById(
        "posicao2"
    ).textContent =
        t("future");


    /* BIBLIOTECA */

    document.getElementById(
        "tituloBiblioteca"
    ).textContent =
        t("libraryTitle");


    document.getElementById(
        "instrucaoBiblioteca"
    ).textContent =
        t("libraryInstruction");


    document.getElementById(
        "textoVoltar"
    ).textContent =
        t("back");


    document.getElementById(
        "textoSelecione"
    ).textContent =
        t("selectRune");


    document.getElementById(
        "textoSelecioneDescricao"
    ).textContent =
        t("selectRuneDescription");


    /* BOTÃO PRINCIPAL */

    atualizarBotaoPrincipal();


    /* ETAPA */

    if (etapa === 1) {

        etapaTexto.textContent =
            t("pastRevealed");

    }

    else if (etapa === 2) {

        etapaTexto.textContent =
            t("presentRevealed");

    }

    else if (etapa === 3) {

        etapaTexto.textContent =
            t("futureRevealed");

    }


    /* RUNA ATUAL */

    if (
        runasSorteadas.length > 0 &&
        focoBox.style.display !== "none"
    ) {

        const runaAtual =
            runasSorteadas[
                runasSorteadas.length - 1
            ];


        focoSimbolo.textContent =
            obterSimbolo(runaAtual);


        focoNome.textContent =
            obterNomeRuna(runaAtual);


        focoDesc.textContent =
            obterDescRuna(runaAtual);

    }


    /* RESULTADO */

    if (
        runasSorteadas.length === 3 &&
        resultadoFinal.style.display !== "none"
    ) {

        mostrarResultado();

    }


    /* RUNA SELECIONADA */

    if (
        runaSelecionadaBiblioteca !== null
    ) {

        const runa =
            bancoRunas[
                runaSelecionadaBiblioteca
            ];


        document.getElementById(
            "detalheSimbolo"
        ).textContent =
            obterSimbolo(runa);


        document.getElementById(
            "detalheNome"
        ).textContent =
            obterNomeRuna(runa);


        document.getElementById(
            "detalheDesc"
        ).textContent =
            obterDescRuna(runa);

    }


    renderizarBiblioteca();

}


/* =========================================================
   MÚSICA
   ========================================================= */

musica.volume = 0.35;


/* =========================================================
   TOCAR / PAUSAR
   ========================================================= */

function alternarMusica() {

    if (musica.paused) {

        musica.play()
            .then(() => {

                btnMusica.textContent = "⏸";

            })
            .catch(() => {

                alert(
                    idioma === "pt"
                        ? "Não foi possível iniciar a música. Verifique se o arquivo musica-viking.mp3 está na pasta audio."
                        : "The music could not be started. Check whether musica-viking.mp3 is inside the audio folder."
                );

            });

    }

    else {

        musica.pause();

        btnMusica.textContent = "▶";

    }

}


/* =========================================================
   VOLUME
   ========================================================= */

function alterarVolume(valor) {

    musica.volume =
        Number(valor);

}


/* =========================================================
   INICIAR MÚSICA APÓS PRIMEIRO CLIQUE
   ========================================================= */

let musicaIniciadaAutomaticamente = false;


document.addEventListener(
    "click",
    () => {

        if (
            !musicaIniciadaAutomaticamente
        ) {

            musicaIniciadaAutomaticamente = true;


            musica.play()
                .then(() => {

                    btnMusica.textContent = "⏸";

                })
                .catch(() => {

                    /*
                     O navegador pode bloquear
                     a reprodução automática.
                     Nesse caso o usuário pode
                     clicar no botão ▶.
                    */

                    btnMusica.textContent = "▶";

                });

        }

    },
    {
        once: true
    }
);


/* =========================================================
   TECLADO
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
         Espaço controla a música.
        */

        if (
            event.code === "Space" &&
            event.target.tagName !== "BUTTON" &&
            event.target.tagName !== "INPUT"
        ) {

            event.preventDefault();

            alternarMusica();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarIdioma();

        musica.volume = 0.35;

    }
);