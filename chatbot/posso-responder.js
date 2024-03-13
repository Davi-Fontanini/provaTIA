// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "Quem fundou a escola foi o Bento Quirino"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos de Informática, Publicidade, Biotecnologia, Farmacia, Games e Enfermagem. "
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a",
        "de", "meu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "quero", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular seus filhos é só contatar entrando no site ou fazendo uma visita presencial no campus, e para rematricula, basta acessar o site."
}

// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição

export const palavrasServicosSecretaria = {
    probablyWords: [
        "quem", "quero", "saber", "contrato", "meu", "filho",
        "ou", "declaração", "diploma", "filha", "sabe", "me",
        "dizer", "como", "expedição", "a", "matrícula", "segunda",
        "via", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a",
    ],
    matched: 0,
    answer: "Não sei responder sobre serviços da secretária, favor entrar em contato com o colégio."
}


function showAnswer(index) {
    switch (index) { 
        case 0:
            return palavrasEscolaFundador.answer
        case 1:
            return palavrasCursosTecnicos.answer
        case 2:
            return palavrasMatricula.answer
        case 3:
            return palavrasServicosSecretaria.answer
        default:
            return "Desculpe, só sei responder assuntos escolares, assuntos distintos não posso ajudar."
    }
    
}

export function mostProbablyQuestion(pergunta) {
    // Veja quem teve mais matches dos bancos
    // Chame a showAnswer com o parâmetro
    if (pergunta.includes("carros")) {
        return console.log("Não falo sobre carros.")
    }
    let matches = [
        palavrasEscolaFundador.matched,
        palavrasCursosTecnicos.matched,
        palavrasMatricula.matched,
        palavrasServicosSecretaria.matched,
    ]

    console.log(matches)

    console.log(Math.max(...matches))

    console.log(matches.indexOf(Math.max(...matches)))



    // esse codigo vai ver quantas palavras de cada pergunta foi usada

    return showAnswer(
        matches.indexOf(Math.max(...matches))
        )
}