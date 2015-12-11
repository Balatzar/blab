Template.blabler.helpers({

});

Template.blabler.events({
  "submit .hey": function (event) {
    event.preventDefault();

    var len = Blab.find().fetch().length + 1;

    console.log(len)

    var reponses = [event.target.reponse1.value, event.target.reponse2.value, event.target.reponse3.value];

    Blab.insert({
      published_at: new Date(),
      title: event.target.question.value,
      choices: reponses,
      answer: reponses[event.target.answer.value],
      votes: 0,
      creator: localStorage.getItem('user'),
      rank: len,
      participants: []
    })

    event.target.question.value = '';
    event.target.reponse1.value = '';
    event.target.reponse2.value = '';
    event.target.reponse3.value = '';
    Router.go('/home');
  },

  "click .nope": function() {
    Router.go('/home');
  }
})