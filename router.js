const router = require('express').Router()
const bodyParser = require('body-parser')
const twilioService = require('./Services/twilioService')
const messageService = require('./Services/MessageService')

module.exports.router = function () {
    router.use(bodyParser.json())

    router.get('/call', async (req, res) => {
        const phone = req.query.phone
        const message = req.query.message
        const say = messageService.getMessage(message)
        twilioService.makeCall(phone, say)
        res.status(200).json({'Success': 'true'});
    })

    router.get('/phones', async (req, res) => {
        twilioService.phones()
        res.status(200).json({'Success': 'true'});
    })

    return router
}
