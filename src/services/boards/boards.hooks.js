const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');

const limitToOwnerId = setField({
  from: 'ownerId',
  as: 'ownerId'
});

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [limitToOwnerId],
    get: [limitToOwnerId],
    create: [limitToOwnerId],
    update: [limitToOwnerId],
    patch: [limitToOwnerId],
    remove: [limitToOwnerId]
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
