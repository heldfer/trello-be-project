const { authenticate } = require('@feathersjs/authentication').hooks;
//TODO: set the hooks to the boards - not working right now I dont know why
const { setField } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      setField({
        from: 'params.user._id',
        as: 'data.ownerId',
      })
    ],
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
