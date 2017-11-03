'use strict';

// projects-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const projects = new mongooseClient.Schema({
    name: { type: String, required: true },
    prefix: { type: String, required: true },
    currentNumber: { type: Number, required: true, default: 0 },
    lanes: [{ type: String }],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('projects', projects);
};
