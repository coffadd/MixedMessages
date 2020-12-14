const Messages = {
  m1: ["sun.", "moon", "earth", "jupiter", "venus", "mercury"],
  m2: ["good luck.", "bad omen", "great week", "surprising event"],
  m3: ["trust no one", "be positive", "be careful", "increase your awareness"],
};

let message = "";
for (let key in Messages) {
  switch (key) {
    case "m1":
      message +=
        "Your sign is: " +
        Messages[key][Math.floor(Math.random() * Messages[key].length)] +
        "\n";
      break;
    case "m2":
      message +=
        "You are having a " +
        Messages[key][Math.floor(Math.random() * Messages[key].length)] +
        "\n";
      break;
    case "m3":
      message +=
        "You should " +
        Messages[key][Math.floor(Math.random() * Messages[key].length)];
      break;
    default:
      message = "no message";
      break;
  }
}

console.log(message);
