const props = {
  id: "btn-submit",
  className: "btn-primary",
  onClick: () => {},
  "data-acao": "enviar",
  disabled: true,
  title: "Enviar formulário"
};

function prepararPropsBotao(propriedades) {

  
  const { id, className, onClick, ...atributosNativos } = propriedades;

  
  const configuracaoPadrao = {
    id: "default-id",
    type: "button",
    disabled: false
  };

  
  const propsFinais = {
    ...configuracaoPadrao,
    ...atributosNativos,
    disabled: false 
  };

  return propsFinais;
}

const resultado = prepararPropsBotao(props);
console.log(resultado);

