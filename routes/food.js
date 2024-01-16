const router = require("express").Router()
router.get('/:id', (req, res) => {
    return res.send(`success to read ${req.params.id}`)
})
module.exports = router