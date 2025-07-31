import OrderModel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";
import stripe from "stripe";


//placing the user order from frontend

const placeOrder = async(req,res) =>{
    try {
        const { amount, productId } = req.body;
        const esewaData = {
            amt: amount,
            psc: 0,
            pdc: 0,
            tAmt: amount,
            pid: productId,
            scd: process.env.ESEWA_MERCHANT_ID,
            su: process.env.ESEWA_SUCCESS_URL,
            fu: process.env.ESEWA_FAILURE_URL,
        };

        const esewaUrl = `https://uat.esewa.com.np/epay/main`;

        res.status(200).json({ 
            url: esewaUrl, 
            data: esewaData 
        });

    } catch (error) {
        console.error('Error in eSewa payment:', error.message);
        res.status(500).json({ message: 'Server error while processing payment.' });
    }   

}


export {placeOrder};

