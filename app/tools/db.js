const jsonServer = require('json-server');
const lowdb = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../data/db.json');
const db = lowdb(adapter);


db.defaults({
    post: [],
    user: {}
}).write()
db.get('posts')
    .push({ id: 1, title: 'lowdb is awesome' })
    .write()

db.set('user.name', 'typicode')
    .write()