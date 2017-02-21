/**
 * Test case for clayCollection.
 * Runs with mocha.
 */
'use strict'

const ClayCollection = require('../lib/clay_collection.js')
const assert = require('assert')
const co = require('co')

describe('clay-collection', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clay collection', () => co(function * () {
    let collection = new ClayCollection({
      entities: [ { id: 'foo' }, { id: 'bar' } ],
      meta: {
        total: 5,
        offset: 2,
        limit: 2
      }
    })
    assert.ok(collection.more)
    assert.ok(collection.toHash())
    assert.deepEqual(collection.page, { number: 2, size: 2 })
  }))
})

/* global describe, before, after, it */
