'use strict';

// Initializes the `tickets` service on path `/tickets`
const createService = require('feathers-mongoose');
const createModel = require('../../models/tickets.model');
const hooks = require('./tickets.hooks');
const filters = require('./tickets.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tickets',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tickets', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tickets');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
