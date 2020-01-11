const VoiceResponse = require('twilio').twiml.VoiceResponse;
const response = new VoiceResponse();

class MessageService {
    getMessage(message) {
        const response = new VoiceResponse();
        response.say(message);
        return response
    }
}

module.exports = new MessageService()
