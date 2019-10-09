class ProxyFactory{
    static create(objeto,props, acao){
        return new Proxy(objeto, {
            //aqui ficam os traps
            //target objeto alvo ou seja neste caso a classe listanegociacoes
            //prop propriedade objeto
            // value valor
            //receiver referência para o proxy
            get(target, prop, receiver) {
                // console.log(`valor anterior: ${target[prop]} novo valor é: `)
                //Está linha é para  retornar o valor da propridade que passei acima
                //return Reflect.set(target,prop,receiver);
                if (props.includes(prop) && ProxyFactory._isfunction(target[prop])){
                //Se a condição do if for verdadeira, mano!!! o metodo de leitura vai ser alterado que massa!!
                    return function() {
                        console.log(`${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    };
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){
                if(props.includes(prop)) acao(target);
                let retorno = Reflect.set(target, prop, value, receiver);
                return retorno;
            }

            });

    }
    static _isfunction(fun){
        return typeof (fun) == typeof (Function);
    }
}