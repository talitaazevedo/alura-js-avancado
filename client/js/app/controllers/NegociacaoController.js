//Está classe aqui tem uma ação 

class NegociacaoController {
  constructor() {
    //este metodo faz com que bind(document) o $ não perca a associação com document.
    //Permitindo assim executar  a paradinha igual no Jquery
    let $ = document.querySelector.bind(document);
    //isso aqui  é uma boa prática bem legal
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    //Nova Instancia de Classe
    /**
     * this._listaNegociacoes = new ListaNegociacoes(this, function(model){
        //é uma maneira legal de aplicar o update na página
        //=> aqui o model é refetente a lista de negociacoes
        //this antes da function é equivalente ao controller
        this._negociacoesView.update(model);
    });
     * 
     */
    //este código faz a mesma coisa que o código comentado maas  vamos utilizar o padrão proxy neste projeto
    //this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoes-view")),
      "adiciona",
      "esvazia"
    );
    //this._listaNegociacoes = ProxyFactory.create(new ListaNegociacoes(),['adiciona', 'esvazia'], model =>this._negociacoesView.update(model));
    //this._mensagem = ProxyFactory.create(new Mensagem(),   ['texto'], model =>  this._mensagemView.update(model));
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagem-view")),
      "texto"
    );
    this._ordemAtual = "";  
  }

  adiciona(event) {
    event.preventDefault();
    try {
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = "Negociação Adicionada com sucesso!!";
      this._limpaFormulario();
    }catch (erro){
        this._mensagem.texto = erro;
    }
  }
  importaNegociacoes() {
    //trabalhando com xhr
    let service = new NegociacaoService();
    Promise.all([
      service.obterNegociacoesDaSemana(),
      service.obterNegociacoesDaSemanaAnterior(),
      service.obterNegociacoesDaSemanaRetrasada()
    ])
      .then(negociacoes => {
        negociacoes
          .reduce((arrAchatado, arr) => arrAchatado.concat(arr), [])
          .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        this._mensagem.texto = "Negociações adicionadas com, sucesso!! ";
      })
      .catch(error => (this._mensagem.texto = error));

    
  }
  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = "Negociações Apagadas com sucesso!!";
  }
  //_ antes do metodo significa que o metodo so pode ser chamado pela própria classe
  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  ordena(coluna) {
    if (this._ordemAtual == coluna) {
      this._listaNegociacoes.inverteOrdem();
    } else {
      this._listaNegociacoes.ordena((p, s) => p[coluna] - s[coluna]);
    }
    this._ordemAtual = coluna;
  }

  /*
           this._inputData.value
           .split('-')
           //isso aqui é muito legal => substitui function e se tem apenas uma condição não precisa utilizar {}
           .map((item, indice) => item - indice % 2)          
           
          /* .map(function(item,indice){
               //está function pega os itens do array e e tira um item da posiçao 2
            
                if(indice ==1 ){
                    return item -1;
                }
                return item;
            })*/

  //-> DATA
  //adicionar a negociação em uma lista
}