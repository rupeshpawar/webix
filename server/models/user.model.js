import Promise from 'bluebird';
import Datastore from 'nedb';

  var userDb = new Datastore({
    filename: __dirname + '/../db/user.db',
    autoload: true
  });

module.exports = userDb;