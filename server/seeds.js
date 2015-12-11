var blabsSeeds = [
  {
    published_at: new Date(),
    title: "Qui est le plus joli ?",
    choices: ["Laurent", "Balthazar", "Ben"],
    answer: "Ben",
    votes: 0,
    creator: "Alexandra",
    rank: 1,
    participants: []
  },
  {
    published_at: new Date(),
    title: "Quelle est la capitale du Venezuela ?",
    choices: ["Tombouctou", "Santiago", "Caracas"],
    answer: "Caracas",
    votes: 0,
    creator: "Balthazar",
    rank: 2,
    participants: []
  },
  {
    published_at: new Date(),
    title: "C'est quoi le mieux ?",
    choices: ["JS", "Ruby", "PHP"],
    answer: "JS",
    votes: 0,
    creator: "Balthazar",
    rank: 3,
    participants: []
  },
  {
    published_at : new Date(),
    title: "Qu'est ce qu'est le plus bon ?",
    choices: ["Coca", "Cherry Coca", "Breizh Cola"],
    answer: "Breizh Cola",
    votes: 0,
    creator: "Laurent",
    rank: 4,
    participants: []
  },
  {
    published_at : new Date(),
    title: "Dans quel pays se trouve le circuit automobile de Zandvoort ?",
    choices: ["La Belgique", "La Suisse", "Les Pays-Bas"],
    answer: "Les Pays-Bas",
    votes: 0,
    creator: "Laurent",
    rank: 5,
    participants: []
  },
  {
    published_at : new Date(),
    title: "Comment affiche-t-on du texte à l'écran en Python ?",
    choices: ["console.log", "print", "puts"],
    answer: "print",
    votes: 0,
    creator: "Balthazar",
    rank: 6,
    participants: []
  },
  {
    published_at : new Date(),
    title: "Quelle est la meilleure ville de France ?",
    choices: ["Paris", "La Loupe", "Rambouillet"],
    answer: "La Loupe",
    votes: 0,
    creator: "Balthazar",
    rank: 7,
    participants: []
  }
];

if (Blab.find().count() === 0) {
  _.each(blabsSeeds, function (blab) {
    Blab.insert(blab);
    console.log("Inserted ", blab.title);
  });
}

if (Blabeur.find().count() === 0) {
  var id = Blabeur.insert({
    username: "balta",
    email: "balta@test.com",
    password: "azeaze",
    points: 0
  });
  console.log("inserted balta");
  var id = Blabeur.insert({
    username: "laurent",
    email: "laurent@test.com",
    password: "azeaze",
    points: 0
  });
  console.log("inserted laurent");
  var id = Blabeur.insert({
    username: "ben",
    email: "ben@test.com",
    password: "azeaze",
    points: 0
  });
  console.log("inserted ben");
  var id = Blabeur.insert({
    username: "alexandra",
    email: "alexandra@test.com",
    password: "azeaze",
    points: 0
  });
  console.log("inserted alexandra");
  var id = Blabeur.insert({
    username: "jack",
    email: "jack@test.com",
    password: "azeaze",
    points: 0
  });
  console.log("inserted jack");
}