//extends ou seja herda da classe view depende da classe view 
class MensagemView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : "<p></p>";
  }
}