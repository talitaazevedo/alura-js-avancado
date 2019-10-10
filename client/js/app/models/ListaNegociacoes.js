class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    //this._negociacoes = [].concat(this._negociacoes, negociacao);

    this._negociacoes.push(negociacao);
    //=> essa classe tem um metodo estatico, recebe primeiro a armadilha, depois o contexto
    //o contexto é o ccontroller
    // o terceiro this é equivalente a lista de negociacoes
    //essa classe só é necessária quando  for utilizar functions no contexto de arrow não precisa
    //Reflect.apply(this._armadilha,this._contexto, [this]);
  }
  esvazia() {
    this._negociacoes = [];
    //Reflect.apply(this._armadilha, this._contexto, [this]);
  }
  get negociacoes() {
    //programação defensiva cria um novo  array de negociacoes evitando que o meu fique exposto
    return [].concat(this._negociacoes);
  }
  get volumeTotal(){
      return this._negociacoes.reduce((total,n)=> total +  n.volume,0.0);
  }
}