/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1972007657",
    "maxSelect": 1,
    "name": "type_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Conference",
      "Atelier familial",
      "Masterclass",
      "Atelier technique"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1569729562",
    "hidden": false,
    "id": "relation1017980606",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite_associe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1872298947",
    "max": 0,
    "min": 0,
    "name": "lieu_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text222738225",
    "max": 0,
    "min": 0,
    "name": "description_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("select1972007657")

  // remove field
  collection.fields.removeById("relation1017980606")

  // remove field
  collection.fields.removeById("text1872298947")

  // remove field
  collection.fields.removeById("text222738225")

  return app.save(collection)
})
