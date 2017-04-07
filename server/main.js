import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  Players.insert({
    name: 'MarBear',
    score: 13
  });
  console.log(Players.find().fetch());
});
