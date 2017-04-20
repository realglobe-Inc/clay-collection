/**
 * Test case for clayCollection.
 * Runs with mocha.
 */
'use strict'

const Collection = require('../lib/collection.js')
const { ok, deepEqual } = require('assert')
const co = require('co')

describe('clay-collection', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clay collection', () => co(function * () {
    let collection = new Collection({
      entities: [ { id: 'foo' }, { id: 'bar' } ],
      meta: {
        total: 5,
        offset: 2,
        limit: 2
      },
      condition: {
        filter: { name: 'foo' }
      }
    })
    ok(collection.more)
    ok(collection.toHash())
    deepEqual(collection.page, { number: 2, size: 2 })
    deepEqual(collection.condition.filter, { name: 'foo' })
  }))
})

/* global describe, before, after, it */
