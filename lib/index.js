/**
 * Entity collection for ClayDB
 * @module clay-collection
 */

'use strict'

const create = require('./create')
const Collection = require('./collection')
const isCollection = require('./is_collection')
let lib = create.bind(this)

Object.assign(lib, Collection, {
  create,
  Collection,
  isCollection
})

module.exports = lib
