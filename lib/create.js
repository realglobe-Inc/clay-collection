/**
 * Create a ClayCollection instance
 * @function create
 * @param {...*} args
 * @returns {ClayCollection}
 */
'use strict'

const ClayCollection = require('./clay_collection')

/** @lends create */
function create (...args) {
  return new ClayCollection(...args)
}

module.exports = create
