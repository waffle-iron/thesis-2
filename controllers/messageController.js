const Message = require('../db/models/Message');
const db = require('../db/config');
const io = require('../server');

module.exports.getMessage = (req, res) => {
  Message.find({eventId: req.body.eventId})
    .then(function(result) {
      res.status(200).json(result);
    });
};

module.exports.addMessage = (req, res) => {
  Message.create({username: req.body.username, message: req.body.message, eventId: req.body.eventId, profilePic: req.body.profilePic})
    .then(io.io.sockets.in(req.body.eventId).emit('message'))
    .then(res.status(200).send('Success'));
};

module.exports.getPinnedMessages = eventId => {
  return Message.find({eventId: eventId})
    .then( messages => {
      return messages.filter( message => message.pinned );
    });
};

module.exports.togglePin = (messageId, eventId) => {
  return Message.findOne({_id: messageId})
    .then( message => {
      Message.findOneAndUpdate({ _id: messageId },
        { 'pinned': !message.pinned })
          .then(updatedMessage => {
            console.log(updatedMessage)
            io.io.sockets.in(eventId).emit('message');
          })
    })
};

