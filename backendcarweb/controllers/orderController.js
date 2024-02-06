const Order = require('../model/bookingModel');
const stripe = require("stripe")("sk_test_51Nw5ZFGtDzrOQD3FjkoGtgSoJ3LHqVJpeOaSzmheaJ1AYjYQpTFlMRLnmaGou70X9pKAmm6uDWHCazqdA1SQxmI3005nIkhCkU");

const nodemailer = require("nodemailer");

const order = async (req,res)=>{
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map(item => {
                return{
                    price_data:{
                        currency: "pkr",
                        product_data: {
                            name: item.name
                        },
                        unit_amount: (item.price)*100
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/singlecar/${req.body.id}`,
        })

        
        res.json({session: session})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}



// const getOrderDetails = async (req,res) => {
//     try {
//         // Retrieve payment intent or session details from Stripe
//         const session = await stripe.checkout.sessions.retrieve(req.body.id);
//         res.send(session)
//         // Check if payment was successful
//         // if (session.payment_status === "paid") {
//           // Send email on payment success
//           // sendEmail(session.customer_email, "Payment Successful");
      
//           // Respond to the client
//           // res.json({ success: true });
//         // } else {
//           // res.status(400).json({ error: "Payment not successful" });
//         // }
//       } catch (error) {
//         console.error("Error handling success:", error);
//         res.status(500).json({ error: "Internal server error", details: error.message });
//       }
// }


const sendEmail = async (req, res) => {
    const { name, driver, carId, userId, totalDriverDayPrice, pickupDate, dropOffDate, pickUpHour, dropOffHour, totalPrice, paymentID, emailSend } = req.body;
    try {
        console.log(req.body)
        const checkOrder = await Order.findOne({ paymentID });
        
        if (!checkOrder ) {
            // Create a new booking
            const newBooking = await Order.create({
                name,
                driver,
                car: carId,
                user: userId,
                totalDriverDayPrice,
                bookedTimeSlots: { from: pickupDate, to: dropOffDate },
                startTime: pickUpHour,
                endTime: dropOffHour,
                totalAmount: totalPrice,
                transactionId: paymentID,
                emailSend
            });
            
            res.json({ data: newBooking });
        } else {
            res.status(400).json({ error: 'Order with the given transactionId already exists' });
        }
    } catch (error) {
        console.error('Error creating new booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
    // const config = {
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.APP_PASSWORD
    //   },
    // };
    // const transporter = nodemailer.createTransport(config);
  
    // const mailOptions = {
    //   from: process.env.EMAIL,
    //   to: req.body.email,
    //   subject: req.body.subject,
    //   text: req.body.text,
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
  };







const createOrder = async(req,res)=>{
    try {
        console.log(req.body)
        // const {orderNumber, car, user, totalPrice, driver} = req.body;
        // const check = await Order.findOne({orderNumber});
        // if(!check){
        //     const order = await Order.create({orderNumber, car, user, totalPrice});
        //     res.status(200).json({order: order});
        // }
        // else{
        //     res.status(409).json({success: true,message: "orderNumber already found"});
        // }
    } catch (error) {
        res.status(404).json( {success: false ,message: "Something Went Wrong"})
    }
}

const getSingleOrder = async (req, res)=>{
    try {
        const orderId = req.params.id
        const check = await (await Order.findOne({"_id": orderId}).populate('user')).populate('car')
        if(check){
            res.status(200).json({success: true,check});
        }else{
            res.status(404).json({success: false, message: "Order not Found"});
        }
    } catch (error) {
        res.status(404).json({success: false, message: "Something went wrong"});
    }
}


module.exports = {order, createOrder, getSingleOrder, sendEmail}