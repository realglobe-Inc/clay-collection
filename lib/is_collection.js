/**
 * Detect a instance is collection or not
 * @function isCollection
 * @param {*} obj - Object to check
 * @returns {boolean} is collection or not
 */
'use strict'

const ClayCollection = require('./collection')

/** @lends isCollection */
function isCollection (obj) {
  if (!obj) {
    return false
  }
  return obj instanceof ClayCollection || Boolean(obj.$$collection)
}

module.exports = isCollection
