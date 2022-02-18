const Sequelize = require('sequelize');
const database = require('..');

const Checkout = database.define('checkout', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.DOUBLE
    },
    type: {
        type: Sequelize.STRING
    },
})

module.exports = Checkout;