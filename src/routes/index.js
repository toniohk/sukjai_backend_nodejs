const express = require('express')
const router = express.Router()

const apiAuthRouter = require('./auth')
const apiMediaRouter = require('./media')
const apiCategoryRouter = require('./category')

router.use('/auth', apiAuthRouter)
router.use('/media', apiMediaRouter)
router.use('/category', apiCategoryRouter)

module.exports = router
