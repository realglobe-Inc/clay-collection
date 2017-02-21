'use strict'

const clayEntity = require('clay-entity')
const clayCollection = require('clay-collection')

{
  let collection = clayCollection({
    entities: [
      clayEntity({ id: 1, title: 'Foo' }),
      clayEntity({ id: 2, title: 'Bar' }),
    ],
    meta: {
      total: 100,
      offset: 0,
      limit: 2
    }
  })
  /* ... */
}
