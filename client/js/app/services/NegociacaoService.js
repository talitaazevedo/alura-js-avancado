class NegociacaoService {
    constructor(){
        this._http = new HttpService();
    }
  obterNegociacoesDaSemana() {

    return new Promise ((resolve, reject) => {
        this._http
            .get("negociacoes/semana")
            .then(negociacoes =>{
                resolve(negociacoes.map(objeto => new Negociacao( 
                    new Date(objeto.data), objeto.quantidade, objeto.valor)));
            })
            .catch(error => {
                console.log(error);
                reject("Não foi possível sincronizar as negociações do servidor");
            });
    });
   
  }
  obterNegociacoesDaSemanaAnterior() {

    return new Promise((resolve,reject)=>{
        this._http
            .get('negociacoes/anterior')
            .then(negociacoes =>{
                resolve(negociacoes.map(objeto => new Negociacao(
                    new Date(objeto.data), objeto.quantidade,objeto.valor)));
            })
            .catch( error => {
                console.log(error);
                reject('Não foi possível sincronizar as negociações da semana anterior');
            });
        

    });
    
  }

  obterNegociacoesDaSemanaRetrasada() {
    return new Promise((resolve,reject)=>{
        this._http  
            .get('negociacoes/retrasada')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(
                    new Date(objeto.data), objeto.quantidade,objeto.valor )));
            })
            .catch(error => {
                console.log(error)
                reject('Não foi possível sincronizar negociações da semana retrasada!! ');
            });
        
    });
  }
}



             /**
              * 0: Requisição não iniciada
              * 1: Conexão com o servidor estabelecida
              * 2: Requisição recebida
              * 3: Processando Requisção
              * 4: Requisição concluida resposta pronta
              */