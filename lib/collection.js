/**
 * Entity collection class for ClayDB
 * @augments Array
 * @class Collection
 * @param {Object} [collection={}] - Source collection
 * @param {Entity[]} [collection.entities={}] - Entities
 * @param {CollectionMeta} [collection.meta={}] - Meta counts
 * @param {CollectionFilter} [collection.filter=null] - Collection filter
 * @param {CollectionSort} [collection.filter=null] - Collection sort
 */
'use strict'

const clayId = require('clay-id')

/** @lends Collection */
class Collection {
  constructor (collection = {}) {
    if (Array.isArray(collection)) {
      collection = { entities: collection }
    }
    let {
      entities = [],
      meta = {},
      filter = null,
      sort = null
    } = collection
    const s = this
    Object.assign(s, { entities, meta, filter, sort })
  }

  // Converter for `JSON.stringify`
  toJSON () {
    const s = this
    return Object.assign(s)
  }

  /**
   * Convert to id hash
   * @returns {Object} Id base hash
   */
  toHash () {
    const s = this
    const { entities } = s
    return entities.reduce((hash, entity) => Object.assign(hash, {
      [clayId(entity.id).toString()]: entity
    }), {})
  }

  /**
   * Has more or not
   * @type {boolean}
   */
  get more () {
    const s = this
    let { meta, entities } = s
    let { offset = 0, total } = meta
    return offset + entities.length < total
  }

  /**
   * Pagination data
   * @type {Object}
   */
  get page () {
    const s = this
    let { meta } = s
    let { offset = 0, limit } = meta
    return {
      number: parseInt(offset / limit) + 1,
      size: limit
    }
  }
}

module.exports = Collection

/**
 * Entity class
 * @typedef {Object} Entity
 * @see https://github.com/realglobe-Inc/clay-entity/issues
 */
/**
 * Meta data of collection
 * @typedef {Object} CollectionMeta
 * @property {number} total - Total entry counts
 * @property {number} offset - Offset count
 * @property {number} limit - Limit count
 */
/**
 * Collection filter
 * @typedef {Object} CollectionFilter
 */
