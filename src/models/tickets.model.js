'use strict';

// tickets-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const tickets = new mongooseClient.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true },
    number: { type: Number, required: true, default: 0 },
    projectId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'projects', required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('tickets', tickets);
};
