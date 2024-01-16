const router = require("express").Router()
router.get('/', (req, res) => {
    return req.send('success')
})
export default router