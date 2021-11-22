const router = require('express').Router()
const authenticate = require('./verifyTokens')
const Lender = require("../Models/Lender")
const Barrower = require("../Models/Barrower")
router.post('/sendmoney', authenticate, (req, res) => {

})

router.post('/reqmoney', authenticate, async (req, res) => {
    // input format 
    // {
    //     amount
    //     token as header
    // }
    if (req.user.who == 'Lender') {
        try {
            const user = await Lender.findOne({ "mail": req.user.mail })
            const inmessage = [...user.in]
            const balance = user.balance
            const message = user.messages
            message.push(`Added ${req.body.amount} to your account`)
            inmessage.push({
                "from": "Admin",
                "Amount": `${req.body.amount}`,
                "on": new Date()
            })
            const userUpdate = await Lender.updateOne({ "_id": req.user._id }, {
                $set: {
                    "in": inmessage,
                    "messages": message,
                    "balance": balance + req.body.amount
                }
            })
            return res.json({
                "message": "Amount added"
            })
        } catch (err) {
            console.log(err)
            return res.json({
                "message": "Please try again"
            })
        }
    } else {
        return res.json({
            "message": "Barrower is not allowed"
        })
    }
})

router.post('/withdraw', authenticate, async (req, res) => {
    // input format: {
    //     token as header,
    //     amount
    // }
    if (req.user.who == "Lender") {
        try {
            const user = await Lender.findOne({ "_id": req.user._id })
            if (user.balance < req.body.amount) {
                return res.json({
                    "message": "No required balance",
                    "balance": user.balance
                })
            } else {
                const out = [...user.out, {
                    "to": "Account",
                    "amount": `${req.body.amount}`,
                    "on": new Date()
                }]
                const message = [...user.messages, `You withdrew ${req.body.amount} on ${new Date()}`]
                const balance = user.balance - req.body.amount
                const updateUser = await Lender.updateOne({ "_id": req.user._id }, {
                    $set: {
                        "out": out,
                        "messages": message,
                        "balance": balance
                    }
                })
                return res.json({
                    "message": "success"
                })
            }

        } catch (err) {
            console.log(err)
            return res.json({
                "message": "Please try again"
            })
        }
    } else {
        const user = await Barrower.findOne({ "_id": req.user._id })
        if (user.balance < req.body.amount) {
            return res.json({
                "message": "No required balance",
                "balance": user.balance
            })
        } else {
            const out = [...user.out, {
                "to": "Account",
                "amount": `${req.body.amount}`,
                "on": new Date()
            }]
            const message = [...user.messages, `You withdrew ${req.body.amount} on ${new Date()}`]
            const balance = user.balance - req.body.amount
            const updateUser = await Barrower.updateOne({ "_id": req.user._id }, {
                $set: {
                    "out": out,
                    "messages": message,
                    "balance": balance
                }
            })
            return res.json({
                "message": "success"
            })
        }
    }
})

module.exports = router