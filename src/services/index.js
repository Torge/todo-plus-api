'use strict';

const tickets = require('./tickets/tickets.service.js');

const projects = require('./projects/projects.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(tickets);
  app.configure(projects);
};
