/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4269769678",
    "max": 0,
    "min": 0,
    "name": "titre_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date624955524",
    "max": "",
    "min": "",
    "name": "date_heure_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file4215143340",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "affiche_film",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3409974709",
    "max": 0,
    "min": 0,
    "name": "synopsis_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text967403474",
    "max": 0,
    "min": 0,
    "name": "genre_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number4147320964",
    "max": null,
    "min": null,
    "name": "duree_film",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3200872840",
    "max": 0,
    "min": 0,
    "name": "langue_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url1168510124",
    "name": "bande_annonce_film",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(9, new Field({
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
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1498740022",
    "max": 0,
    "min": 0,
    "name": "production_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "date811120627",
    "max": "",
    "min": "",
    "name": "annee_sortie_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1247100682",
    "max": 0,
    "min": 0,
    "name": "liste_acteurs_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2029809916",
    "max": 0,
    "min": 0,
    "name": "realisateur_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("text4269769678")

  // remove field
  collection.fields.removeById("date624955524")

  // remove field
  collection.fields.removeById("file4215143340")

  // remove field
  collection.fields.removeById("text3409974709")

  // remove field
  collection.fields.removeById("text967403474")

  // remove field
  collection.fields.removeById("number4147320964")

  // remove field
  collection.fields.removeById("text3200872840")

  // remove field
  collection.fields.removeById("url1168510124")

  // remove field
  collection.fields.removeById("relation1017980606")

  // remove field
  collection.fields.removeById("text1498740022")

  // remove field
  collection.fields.removeById("date811120627")

  // remove field
  collection.fields.removeById("text1247100682")

  // remove field
  collection.fields.removeById("text2029809916")

  return app.save(collection)
})
