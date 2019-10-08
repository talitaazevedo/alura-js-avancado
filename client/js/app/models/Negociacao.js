//crie sempre arquivos de classes com letra  maiuscula.
//sempre use new para declarar instancias de classe feitas com o construtor
//classes tem dados e comportamentos.
//use _valor no atributo para encapsular ou seja apenas os metodos da classe vão poder acessar 

class Negociacao{


    //Define os atributos de Classe com construtor propriedades
    constructor(data, quantidade, valor){
        //programação defensiva
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //Aqui este atribudo congela os objetos da classe  depois que atribui valor pela primeira vez
        Object.freeze(this);
    }
    //isso aqui é um metodo, é uma especie de função

    get volume(){
        return this._quantidade * this._valor;
    }

    //metodos acessadores para quando os atributos  são encapsulados
    get data(){
        //isso aqui é programação defensiva, ele cria um novo objeto baseado no atributo _data
        return new Date(this._data.getTime());
    }
    //este tipo de metodo não precisa de () para ser executado é como se fosse somente leitura
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }


}

