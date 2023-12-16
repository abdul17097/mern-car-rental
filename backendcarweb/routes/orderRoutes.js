const router = require('express').Router();
const {order, createOrder,getSingleOrder} = require('../controllers/orderController');
const {verifyToken} = require('../utils/verifyToken');
router.get('/order', order);
router.post('/createOrder', createOrder);
router.get('/getSingleOrder/:id',verifyToken ,getSingleOrder);
router.post('/create-checkout-session', createOrder);

module.exports = router;