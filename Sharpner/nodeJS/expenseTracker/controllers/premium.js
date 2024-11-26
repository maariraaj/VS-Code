const Expense = require('../models/expense');
const User = require('../models/user');
const sequelize = require('../util/database');

exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Expense.findAll({
            attributes: [
                'userId',
                [sequelize.fn('SUM', sequelize.col('amount')), 'totalExpense']
            ],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ],
            group: ['userId', 'User.id'],
            order: [[sequelize.fn('SUM', sequelize.col('amount')), 'DESC']]
        });

        res.status(200).json({ success: true, leaderboard });
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        res.status(500).json({ success: false, message: 'Failed to fetch leaderboard' });
    }
};