/**
 * Create a Collection instance
 * @function create
 * @param {...*} args
 * @returns {Collection}
 */
'use strict'

const Collection = require('./collection')

/** @lends create */
function create (...args) {
  return new Collection(...args)
}

module.exports = create
