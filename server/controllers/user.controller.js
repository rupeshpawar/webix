import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../../config/config';
import UsersModel from '../models/user.model';
import _ from "lodash";

function saveUser(req, res) {

  var data = req.body.data;

  console.log(data);
  console.log(typeof data);
  UsersModel.insert(JSON.parse(data), function (err, newUser) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {

      res.json(newUser);
    }
  });

}

function getUsers(req, res) {

  UsersModel.find({}, function (err, Users) {
    if (err) {
      res.send(err);

      return;
    }

    _.map(Users, function (o) {
      var temp = o;
      o.id = o._id;
      return temp;
    })
    res.json(Users);
  });

}

function updateUser(req, res) {

  var data = JSON.parse(req.body.data);

  UsersModel.update({ _id: data.id }, data, {}, function (err, numReplaced) {
    res.json({});
  });

}

function deleteUser(req, res) {

  var id = req.body.id;
  // console.log("data"+ JSON.parse(id).row);

  UsersModel.remove({ _id: JSON.parse(id).row }, {}, function (err, numRemoved) {
    res.json(numRemoved);
  });


}

export default { saveUser, getUsers, updateUser, deleteUser };
