const express = require('express');
const router = express.Router();
const sendMail = require("../services/mail");

router.post('/',async(req,res)=>{
    console.log(req.body);
    const data = req.body;
    await sendMail(data);
    res.json({ ok: true });
})
router.get('/',(req,res) => {
    res.send('sendmail');
})

module.exports = router