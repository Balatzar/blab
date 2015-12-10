Template.app.helpers({
  blabeurs: function() {
    return Blabeur.find({}, {sort: {points: -1}}).fetch();
  }
});