import express from 'express';
import { plcaeOrder, plcaeOrderRazorpay , plcaeOrderStripe, userOrders, updateStatus, allOrders, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

//Admin features

orderRouter.post('/list',adminAuth ,allOrders);
orderRouter.post('/status', adminAuth, updateStatus);


//Payment features
orderRouter.post('/place',authUser, plcaeOrder);
orderRouter.post('/stripe',authUser, plcaeOrderStripe);
orderRouter.post('/razorpay',authUser, plcaeOrderRazorpay);

//user Feature
orderRouter.post('/userorders',authUser,userOrders);

//verify payment
orderRouter.post('/verifyStripe',authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter;
