const Razorpay = require('razorpay');
const Order = require('../models/orders');

exports.purchasePremium = async (req, res) => {
    try {
        const rzp = new Razorpay({
            key_id: 'rzp_test_A0BOeoNhMQbJ2J',
            key_secret: 'CAMJe1vWfExPHQfwOeWpqGqt',
        });
        const amount = 2500;
        const order = await rzp.orders.create({ amount, currency: 'INR' });

        await req.user.createOrder({ orderId: order.id, status: 'PENDING' });

        return res.status(201).json({ order, key_id: rzp.key_id });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        return res.status(500).json({ message: 'Something went wrong', error });
    }
};

exports.updateTransactionStatus = async (req, res) => {
    try {
        const { payment_id, order_id, status } = req.body;
        const order = await Order.findOne({ where: { orderId: order_id } });
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        const updateFields = status === 'FAILED'
            ? { status: 'FAILED' }
            : { paymentId: payment_id, status: 'SUCCESSFUL' };

        await order.update(updateFields);

        if (status === 'FAILED') {
            return res.status(202).json({ success: false, message: 'Transaction Failed' });
        }
        await req.user.update({ isPremiumUser: true });
        return res.status(202).json({ success: true, message: 'Transaction Successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong', error });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { userId: req.user.id } });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
};