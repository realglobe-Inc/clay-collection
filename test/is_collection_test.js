/**
 * Test case for isCollection.
 * Runs with mocha.
 */
'use strict'

const isCollection = require('../lib/is_collection.js')
const Collection = require('../lib/collection')
const {equal} = require('assert')
const co = require('co')

describe('is-collection', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is collection', () => co(function * () {
    equal(isCollection(new Collection), true)
    equal(isCollection({$$collection: true}), true)
    equal(isCollection({}), false)
  }))
})

/* global describe, before, after, it */
