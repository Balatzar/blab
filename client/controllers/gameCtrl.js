Template.game.helpers({
  blab: function() {
    return Blab.find({rank: 1}).fetch()[0];
  }
});