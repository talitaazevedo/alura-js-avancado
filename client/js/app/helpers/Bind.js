class Bind{
    //... quer dizer que a partir do 3 parametro tudo que entra é um array
    // este padrão se chama REST
    constructor(model,view,...props){
        let proxy = ProxyFactory.create(model, props,model => view.update(model));
        view.update(model);
        return proxy;
    }
}