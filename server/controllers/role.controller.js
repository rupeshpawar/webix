import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../../config/config';
import rolesModel from '../models/role.model';
import _ from "lodash";

function saveRole(req, res) {

  var name = req.body.name;

  rolesModel.insert({ "name": name }, function (err, newUser) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {

      res.json(newUser);
    }
  });

}

function getRoles(req, res) {

  rolesModel.find({}, function (err, roles) {
    if (err) {
      res.send(err);

      return;
    }

    var rolesId = _.map(roles, function (o) {
      var temp = o;
      o.id = o._id;
      return temp;
    })
    res.json(roles);
  });

}

function updateRole(req, res) {

  var id = req.body.id;

  rolesModel.update({ _id: JSON.parse(id).row }, { "name": req.body.name }, {}, function (err, numReplaced) {
    res.json({});
  });

}

function deleteRole(req, res) {

  var id = req.body.id;
  // console.log("data"+ JSON.parse(id).row);

  rolesModel.remove({ _id: JSON.parse(id).row }, {}, function (err, numRemoved) {
    res.json(numRemoved);
  });


}

function roleForOptions(req, res) {

  rolesModel.find({}, function (err, roles) {
    if (err) {
      res.send(err);

      return;
    }

    var rolesId = _.map(roles, function (o) {
      var temp = o;
      o.id = o.name;
      o.value = o.name;
      return temp;
    })
    res.json(roles);
  });


}

export default { saveRole, getRoles, updateRole, deleteRole, roleForOptions };
