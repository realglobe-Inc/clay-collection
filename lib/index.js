/**
 * Entity collection for ClayDB
 * @module clay-collection
 */

'use strict'

const create = require('./create')
const Collection = require('./collection')

let lib = create.bind(this)

Object.assign(lib, Collection, {
  create,
  Collection
})

module.exports = lib
