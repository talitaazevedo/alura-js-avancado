//Está classe aqui tem uma ação 

class NegociacaoController {

    constructor() {
        //este metodo faz com que bind(document) o $ não perca a associação com document. Permitindo assim executar  a paradinha igual no Jquery
        let $ = document.querySelector.bind(document);
        //isso aqui  é uma boa prática bem legal 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($("#negociacoes-view"));
        // metodo update recebe lista de negociacoes 
        this._negociacoesView.update(this._listaNegociacoes);

    }


    adiciona(event) {
        event.preventDefault();
        //alert("Chamei ação do Controller");
        //... signiffica que o array será desmembrado spread
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        //console.log(this._listaNegociacoes.negociacoes);
        this._limpaFormulario();
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
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
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