'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'tickets\' service', () => {
  it('registered the service', () => {
    const service = app.service('tickets');

    assert.ok(service, 'Registered the service');
  });
});
