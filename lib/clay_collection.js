/**
 * Entity collection class for ClayDB
 * @augments Array
 * @class ClayCollection
 * @param {Object} [collection={}] - Source collection
 * @param {ClayEntity[]} [collection.entities={}] - Entities
 * @param {ClayCollectionMeta} [collection.meta={}] - Meta counts
 */
'use strict'

const clayId = require('clay-id')

/** @lends ClayCollection */
class ClayCollection {
  constructor (collection = {}) {
    if (Array.isArray(collection)) {
      collection = { entities: collection }
    }
    let { entities = [], meta = {} } = collection
    const s = this
    Object.assign(s, { entities, meta })
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
      [clayId(entity.id)]: entity
    }), {})
  }

  /**
   * Has more or not
   * @type {boolean}
   */
  get more () {
    const s = this
    let { meta, entities } = s
    let { offset = 0, limit, total } = meta
    return offset * limit + entities.length < total
  }
}

module.exports = ClayCollection

/**
 * Entity class
 * @typedef {Object} ClayEntity
 * @see https://github.com/realglobe-Inc/clay-entity/issues
 */
/**
 * Meta data of collection
 * @typedef {Object} ClayCollectionMeta
 * @property {number} total - Total entry counts
 * @property {number} offset - Offset count
 * @property {number} limit - Limit count
 */
