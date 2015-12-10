Template.index.onRendered(function () {
  if (!localStorage.getItem("user"))
    Router.go('/');
})

Template.app.helpers({
  blabeurs: function () {
    return Blabeur.find({}, {
      sort: {
        points: -1
      }
    }).fetch();
  }
});