const router = require('express').Router();
const Lender = require("../Models/Lender")
const Barrower = require("../Models/Barrower")
const authenticate = require('./verifyTokens')
router.get('/barrower/:barmail&:rate&:span', authenticate, async (req, res) => {
    if (req.user.who == "Barrower") return res.json({ "message": "Invalid Request" })
    const user = await Barrower.findOne({ "mail": req.params.barmail })
    if (user == null) return res.json({ "message": "User dosent exist" })
    console.log(req.user.balance, user.money)
    if (req.user.balance > user.money) return res.json({ "message": "No proper balance" })
    let temp = user.request || []
    let messages = [...temp, {
        "from": req.user.mail,
        "rate": req.params.rate,
        "span": req.params.span
    }]
    console.log(messages)
    const updateUser = await Barrower.updateOne({ "mail": req.params.barmail }, {
        $set: {
            "request": messages
        }
    })
    console.log(updateUser)
    res.json({ "message": "success" })
})

router.get('/lender/:lendmail', authenticate, async (req, res) => {
    if (req.user.who == "Lender") return res.json({ "message": "Invalid Request" })
    const user = await Lender.findOne({ "mail": req.params.lendmail })
    let requests = [...user.request, {
        "from": req.user.mail,
        "money": req.user.money
    }]
    console.log(requests)
    const updateUser = await Lender.updateOne({ "mail": req.params.lendmail }, {
        $set: {
            request: requests
        }
    })
    return res.json({
        "message": "success"
    })
})



module.exports = router