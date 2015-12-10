var blabsSeeds = [
  {
    published_at: new Date(),
    title: "Qui est le plus joli",
    choices: ["Laurent", "Balthazar", "Ben"],
    answer: "Ben",
    votes: 0,
    creator: "Alexandra",
    rank: 1,
    participants: []
  },
  {
    published_at: new Date(),
    title: "C'est quoi le mieux",
    choices: ["JS", "Ruby", "PHP"],
    answer: "JS",
    votes: 0,
    creator: "Balthazar",
    rank: 2,
    participants: []
  },
  {
    published_at : new Date(),
    title: "Qu'est ce qu'est le plus bon",
    choices: ["Coca", "Cherry Coca", "Breizh Cola"],
    answer: "Breizh Cola",
    votes: 0,
    creator: "Laurent",
    rank: 3,
    participants: []
  },
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