export default class Evento {
    constructor(nome, dataInicio, dataTermino, numeroParticipantes, local, custoPorParticipante) {
        this.nome = nome;
        this.dataInicio = new Date(dataInicio);
        this.dataTermino = new Date(dataTermino);
        this.numeroParticipantes = numeroParticipantes;
        this.local = local;
        this.custoPorParticipante = custoPorParticipante;
    }

    get duracaoDias() {
        const diferenca = this.dataTermino - this.dataInicio;
        return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    }

    get custoTotal() {
        return this.numeroParticipantes * this.custoPorParticipante;
    }
}
