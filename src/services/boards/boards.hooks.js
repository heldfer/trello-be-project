const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');

const restrictToOwner = setField({
  from: 'params.user._id',
  as: 'data.ownerId',
});

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [restrictToOwner],
    create: [restrictToOwner],
    update: [restrictToOwner],
    patch: [restrictToOwner],
    remove: [restrictToOwner]
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
