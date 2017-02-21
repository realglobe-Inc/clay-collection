/**
 * Entity collection for ClayDB
 * @module clay-collection
 */

'use strict'

const create = require('./create')
const ClayCollection = require('./clay_collection')

let lib = create.bind(this)

Object.assign(lib, ClayCollection, {
  create,
  ClayCollection
})

module.exports = lib
