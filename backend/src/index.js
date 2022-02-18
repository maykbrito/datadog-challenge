const express = require('express');

const server = express();
server.use(express.json());

const CheckoutController = require('./controllers/checkoutController');
server.post('/checkout', CheckoutController.Register);

(async () => {
  const database = require('./database');

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();


server.listen(3333, () => console.log("Server is running on port 3333"));
