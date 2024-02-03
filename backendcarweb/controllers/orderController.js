const Order = require('../model/bookingModel');
const stripe = require("stripe")("sk_test_51Nw5ZFGtDzrOQD3FjkoGtgSoJ3LHqVJpeOaSzmheaJ1AYjYQpTFlMRLnmaGou70X9pKAmm6uDWHCazqdA1SQxmI3005nIkhCkU");
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
            success_url: `http://localhost:5173/singlecar/${req.body.id}`,
            cancel_url: `http://localhost:5173/singlecar/${req.body.id}`,
        })

        
        res.json({url: session.url})
        console.log(session);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
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


module.exports = {order, createOrder, getSingleOrder}