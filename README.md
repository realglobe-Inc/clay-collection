 <img src="assets/images/clay-collection-banner.png" alt="Title Banner"
                    height="148"
                    style="height:148px"
/>


<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-collection
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-collection
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-collection.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-collection
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-collection.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-collection/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-collection
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-collection.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-collection.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-collection
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-collection.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-collection
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-collection.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Entity collection for ClayDB

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-collection --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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
    },
    filter: { foo: 'bar' }
  })
  /* ... */
}

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.API.md.hbs" Start -->

<a name="section-doc-guides-03-a-p-i-md"></a>

API
---------

# clay-collection@3.0.0

Entity collection for ClayDB

+ Functions
  + [create(args)](#clay-collection-function-create)

## Functions

<a class='md-heading-link' name="clay-collection-function-create" ></a>

### create(args) -> `Collection`

Create a Collection instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |








<!-- Section from "doc/guides/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-collection/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
