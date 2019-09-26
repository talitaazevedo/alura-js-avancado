//Está classe aqui tem uma ação 

class NegociacaoController {

    constructor(){
         //este metodo faz com que bind(document) o $ não perca a associação com document. Permitindo assim executar  a paradinha igual no Jquery
         let $ = document.querySelector.bind(document);
         //isso aqui  é uma boa prática bem legal 
         this._inputData = $('#data');
         this._inputQuantidade = $('#quantidade');
         this._inputValor = $('#valor');

    }


    adiciona(event){
        event.preventDefault();
        alert('Chamei ação do Controller');
       
       //... signiffica que o array será desmembrado spread
       
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
          
        

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);
        let diaMesAno = negociacao.data.getDate()+'/'+ (negociacao.data.getMonth()+1) +'/'+ negociacao.data.getFullYear();
            console.log(diaMesAno);
        //adicionar a negociação em uma lista
            
        

    }

}