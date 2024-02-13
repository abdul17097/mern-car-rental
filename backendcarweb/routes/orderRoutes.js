const router = require("express").Router();
const {
  order,
  getSingleOrder,
  sendEmail,
  allOrder,
  allBookingsByUser,
} = require("../controllers/orderController");
const { verifyToken } = require("../utils/verifyToken");
router.get("/order", order);
// router.post('/createOrder', createOrder);
router.get("/getSingleOrder/:id", verifyToken, getSingleOrder);
router.get("/getOrder/:id", allBookingsByUser);
router.post("/checkout", order);
router.post("/send-email", sendEmail);
router.get("/allorder", allOrder);

module.exports = router;

// id: 1,
// name: item.name,
// totalPrice : item.totalPrice,
// pickUpHour: item.pickUpHour,
// dropOffHour: item.dropOffHour,
// pickupDate: item.pickUpDate,
// dropOffDate: item.dropOffDate,
// totalDriverDayPrice: item.totalDriverDayPrice,
// driver: item.driver,
// totalRentalDay: item.total
