'use strict';

const tickets = require('./tickets/tickets.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(tickets);
};
