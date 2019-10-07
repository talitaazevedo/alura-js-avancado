class ListaNegociacoes{
    constructor(){

        this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }
    get negociacoes(){
        //programação defensiva cria um novo  array de negociacoes evitando que o meu fique exposto
        return [].concat(this._negociacoes);
    }

}