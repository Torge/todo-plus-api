'use strict';



const setNumber = require('../../hooks/set-number');



module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setNumber()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
