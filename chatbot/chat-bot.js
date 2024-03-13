import { palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, mostProbablyQuestion, palavrasServicosSecretaria } from "./posso-responder.js";

let pergunta = "Quem fundou a escola?"

const bancos = [
    palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasServicosSecretaria
]



for (let i = 0; i < pergunta.length; i++) { 
    // palavra i
    for (let j = 0; j < bancos.length; j++) { 
        // inicia procura da palavra i, no banco j
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}



console.log(mostProbablyQuestion(pergunta))
