'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    return hook.app.service('projects').get(hook.data.projectId)
    .then(project => {
      hook.data.number = project.currentNumber;
      return +project.currentNumber+1;
    })
    .then(currentNumber => hook.app.service('projects').patch(hook.data.projectId, { currentNumber }))
    .then(() => hook)
  };
};
