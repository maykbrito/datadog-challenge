const Checkout = require('../database/model/checkout');

class CheckoutController {
  async Register(request, response) {
    const { amount, type } = request.body;

    const checkoutCreated = await Checkout.create({ amount, type });
    response.status(200).json(checkoutCreated);
  }
}

module.exports = new CheckoutController();