Meteor.setInterval(function(){
  Meteor.setTimeout(function() {
  }, 9000);
  var actualBlab = Blab.find({rank: 1}).fetch()[0];
  _.each(actualBlab.participants, function(participant) {
    if (participant.response == actualBlab.answer) {
      Blabeur.update({username: participant.participant}, {$inc: {points: 1}});
    }
  });

  Blab.update({rank: 1}, {$set: {participants: []}});

  console.log(Blab.find({rank: 1}).fetch());

  var blabs = Blab.find().fetch();
  var len = blabs.length;
  _.each(blabs, function(blab) {
    if (blab.rank == 1) {
      Blab.update({_id: blab._id}, {$set: {rank: len}});
    } else {
      Blab.update({_id: blab._id}, {$set: {rank: blab.rank - 1}});
    }
  });
}, 10000);