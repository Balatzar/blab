Template.login.helpers({

});

Template.login.events({
  "submit .form": function (event) {
    event.preventDefault();

    var blableurs = Blabeur.find().fetch();

    var ok = true;

    for (var i = 0; i < blableurs.length; i++) {
      if (event.target.username.value == blableurs[i].username) {
        if (event.target.password.value == blableurs[i].password) {
          localStorage.setItem('user', blableurs[i].username);
          Router.go('/home');
          ok = false;
          break;
        } else {
          alert("Password pas bon! pov' loser");
          event.target.password.value = "";
          ok = false;
          break;
        }
      }
    }
    if (ok != false) {
      Blabeur.insert({
        username: event.target.username.value,
        password: event.target.password.value,
        points: 0
      })
      localStorage.setItem('user', event.target.username.value);
      Router.go('/home');
    }
  }
})