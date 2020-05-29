function getChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}
console.log(getChoice());
