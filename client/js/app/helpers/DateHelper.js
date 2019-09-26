class DateHelper{
    constructor(){
///mensagem para quando instanciar uma classe estática
        throw new Error('Date Helper não pode ser instanciada.');
    }

 /// static significa que voce não precisa instanciar pode chamar o metodo direto  ou seja não precisa do new 
    static dataParaTexto(data){

        //Isso aqui é um template string evita de ficaar usando + na concatenação
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        /*data.getDate()
                +'/' + (data.getMonth() + 1 )
                +'/' +  data.getFullYear();*/

    }

    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))trow new Error('A data deve estar no formato aaaa-mm-dd')
        return new Date(...texto.split('-').map((item,indice)=> item - indice % 2))

    }
    



}