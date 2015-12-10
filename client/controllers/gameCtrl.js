Template.game.helpers({
  blab: function() {
    return Blab.find({rank: 1}).fetch()[0];
  }
});

Template.game.events({
  "click li": function() {
    var hasNotVoted = true;
    var blab = Blab.find({rank: 1}).fetch()[0];
    _.each(blab.participants, function(participant) {
      if (participant.participant == "laurent") {
        hasNotVoted = false;
      }
    });
    if (hasNotVoted) {
    console.log("a voté !")
    Blab.update({_id: blab._id}, {$push: {participants: {participant: "laurent", response: this.valueOf()}}});
    }
  }
})