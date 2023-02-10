/**
 * 1 - Vamos criar uma promise que representa o pedido de óculos de sol em uma loja online. Primeiro, crie a função myExecutor().
 * Posteriormente, você passará essa função para o construtor Promise.

myExecutor() deve:

    Ter dois parâmetros: resolve e reject
    Verifique se a propriedade óculos de sol no objeto de inventário(inventory) possui um valor maior que zero
    Em caso afirmativo, myExecutor() deve invocar resolve() com a string 'Pedido de óculos de sol processado.'
    Caso contrário, myExecutor() deve invocar a reject() com a string 'Esse item está esgotado.'

2 - Crie uma função, orderSunglasses(). Esta função não deve ter parâmetros. Ele deve retornar uma nova
promessa construída passando sua função myExecutor() para o construtor Promise.

3 - Crie uma variável orderPromise atribuída ao valor retornado de sua função orderSunglasses().

4 - Na parte inferior do arquivo app.js, registre orderPromise no console.

 */
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below: