/**
 * Dê uma olhada no código fornecido em app.js. Usamos require() para incluir a
 * função checkInventory() de library.js. Ele se baseia na lógica da função
 * orderSunglasses() que você escreveu em um exercício anterior.

    -> checkInventory() recebe um array que representa um pedido e retorna uma promessa.
    Se todos os itens do pedido estiverem em estoque, essa promessa será resolvida com o
    valor "Obrigado. Seu pedido foi bem-sucedido."
    Caso contrário, a promessa rejeita com o valor "Desculpe. Seu pedido não pôde ser
    concluído porque alguns itens estão esgotados".

Usamos setTimeout() para garantir que a promessa checkInventory() seja resolvida de forma assíncrona.

Se desejar, consulte o arquivo library.js para ver como ele funciona.

2 - Escreva uma função, handleSuccess(). Você usará essa função mais tarde como seu
handler de sucesso. handleSuccess() deve ter um parâmetro, representando um valor
resolved. Dentro do corpo de handleSuccess(), registre o parâmetro no console.

3 - Escreva uma função, handleFailure(). Você usará essa função mais tarde como seu
manipulador de falhas. handleFailure() deve ter um parâmetro, representando um
motivo de rejeição. Dentro do corpo de handleFailure(), registre o parâmetro no console.
 */
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:




