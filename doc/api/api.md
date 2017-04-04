# clay-collection@2.0.0

Entity collection for ClayDB

+ Functions
  + [create(args)](#clay-collection-function-create)
+ [`ClayCollection`](#clay-collection-class) Class
  + [new ClayCollection(collection)](#clay-collection-class-clay-collection-constructor)
  + [collection.toHash()](#clay-collection-class-clay-collection-toHash)

## Functions

<a class='md-heading-link' name="clay-collection-function-create" ></a>

### create(args) -> `ClayCollection`

Create a ClayCollection instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-collection-class"></a>

## `ClayCollection` Class

Entity collection class for ClayDB

**Extends**:

+ `Array`



<a class='md-heading-link' name="clay-collection-class-clay-collection-constructor" ></a>

### new ClayCollection(collection)

Constructor of ClayCollection class

| Param | Type | Description |
| ----- | --- | -------- |
| collection | Object | Source collection |
| collection.entities | Array.&lt;ClayEntity&gt; | Entities |
| collection.meta | ClayCollectionMeta | Meta counts |


<a class='md-heading-link' name="clay-collection-class-clay-collection-toHash" ></a>

### collection.toHash() -> `Object`

Convert to id hash



