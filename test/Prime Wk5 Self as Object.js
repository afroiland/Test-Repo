

var andrewFroiland = {
  name: "Andrew Froiland",
  age: 35,
  siblings: ["David Froiland", "Amy Froiland"],
  spiritAnimal: "white-tailed deer",
  favoriteBackstreetBoy: "Howie",
  stanceOnChildAbuse: "opposed",
  placesLived: ["Twin Cities", "Madison, WI", "Austin, TX", "Newark, DE", "Portland, OR", "Hongseong, South Korea"],
  interests: ["drinking beer", "listening to music", "playing video games", "playing tabletop games", "rollerskating",
  "keeping it real", "taking long walks on the beach", "being a chill dude", "smashing the patriarchy", "hanging out"]
};

console.log(andrewFroiland.name+" is a chill dude who enjoys "+andrewFroiland.interests[Math.floor(Math.random()*10)]+
" while "+andrewFroiland.interests[Math.floor(Math.random()*10)]+".");

console.log(andrewFroiland);
