const { authenticate } = require('@feathersjs/authentication').hooks;
//TODO: set the hooks to the boards - not working right now I dont know why
const { setField } = require('feathers-authentication-hooks');

const restrictToOwner = setField({
  from: 'params.users.ownerId',
  as: 'params.query.ownerId',
});

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [restrictToOwner],
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
