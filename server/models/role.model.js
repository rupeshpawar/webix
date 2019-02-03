import Promise from 'bluebird';
import Datastore from 'nedb';

  var rolesDb = new Datastore({
    filename: __dirname + '/../db/roles.db',
    autoload: true
  });

module.exports = rolesDb;