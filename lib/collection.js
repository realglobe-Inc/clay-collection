/**
 * Entity collection class for ClayDB
 * @augments Array
 * @class Collection
 * @param {Object} [collection={}] - Source collection
 * @param {Entity[]} [collection.entities={}] - Entities
 * @param {CollectionMeta} [collection.meta={}] - Meta counts
 * @param {CollectionDemand} [collection.demand={}] - Demanded condition
 */
'use strict'

const clayId = require('clay-id')

/** @lends Collection */
class Collection {
  constructor (collection = {}) {
    if (Array.isArray(collection)) {
      collection = {entities: collection}
    }
    const {entities = [], meta = {}, demand = {}} = collection
    Object.assign(this, {entities, meta, demand})
  }

  get $$collection () {
    return true
  }

  // noinspection JSAnnotator
  set $$collection ($$collection) {
    if (!$$collection) {
      throw new Error('`$$collection` must always true')
    }
  }

  // Converter for `JSON.stringify`
  toJSON () {
    return Object.assign({}, this, {$$collection: true})
  }

  /**
   * Convert to id hash
   * @returns {Object} Id base hash
   */
  toHash () {
    const {entities} = this
    return entities.reduce((hash, entity) => Object.assign(hash, {
      [clayId(entity.id).toString()]: entity
    }), {})
  }

  /**
   * Has more or not
   * @type {boolean}
   */
  get more () {
    const {meta, entities} = this
    const {offset = 0, total} = meta
    return offset + entities.length < total
  }

  /**
   * Pagination data
   * @type {Object}
   */
  get page () {
    const {meta} = this
    const {offset = 0, limit} = meta
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
 * Collection demand
 * @typedef {Object} CollectionDemand
 * @property {?Object} filter
 * @property {?Object} page
 * @property {?Array} sort
 */

