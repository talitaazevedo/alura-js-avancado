//Está classe aqui tem uma ação 

class NegociacaoController {

    constructor() {
        //este metodo faz com que bind(document) o $ não perca a associação com document. Permitindo assim executar  a paradinha igual no Jquery
        let $ = document.querySelector.bind(document);
        //isso aqui  é uma boa prática bem legal 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //Nova Instancia de Classe
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._mensagemView = new MensagemView($("#mensagem-view"));
        this._mensagem = new Mensagem();
        

        //Instancia de classe que pega elementos no html view
        this._negociacoesView = new NegociacoesView($("#negociacoes-view"));
        
        //Apos receber a o elemento recebe a instancia da classe criada em models
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagemView.update(this._mensagem);

    }


    adiciona(event) {
        event.preventDefault();
        //alert("Chamei ação do Controller");
        //... signiffica que o array será desmembrado spread
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        // Aplica o update após receber a mensagem
        this._mensagem.texto = 'Negociação Adicionada com sucesso!!';
        this._mensagemView.update(this._mensagem);
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