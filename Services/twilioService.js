const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_TOKEN
const phoneFrom = process.env.TWILIO_PHONE_FROM
const client = require('twilio')(accountSid, authToken)

class TwilioService {

    makeCall(phone, message) {
        client.calls.create({
            to: phone,
            from: phoneFrom,
            twiml: message.toString()
        }).then((call) => {
            console.log(call.sid)
        }).catch((e) => {
            console.log(e)
        })
    }
}

module.exports = new TwilioService()
