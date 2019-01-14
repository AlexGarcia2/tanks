class Tanks {

  constructor(player1, player2, shot, hit, position) {
    this.player1 = {health:3 ,speed:1 ,armor:2 ,nuke:0};
    this.player2 = {health:3 ,speed:1 ,armor:2 ,nuke:0};
    this.shot = shot;
    this.hit = hit;
    this.position = position;
    this.playableMoves = [0,1,2,3,4,5];

  }

  // give location and postion of tank
  playerOneMove() {
    let player1 = [];
    player1 = Math.floor(Math.random() * Math.floor(3));
    return player1;
  }

  playerTwoMove() {
    let min = Math.ceil(3);
    let max = Math.floor(6);
    return console.log(Math.floor(Math.random() * (max - min)) + min);

  }

  // return health of player
  playerLife() {
    if (this.player1.health === 0 || this.player2.health === 0) {
      return "You have died. Your bones rot away in the dusty swamp."
    } else if (playerAttack() === true){

      return this.player1.armor - 1 || this.player2.armor - 1;

    }
    return "made it";
  }


  playerShot() {
  // return shot distance and drop
  }

  // check if hit or a miss of a tank
  playerAttack() {
    return true;
  }

 //The maximum is exclusive and the minimum is inclusive
}
export { Tanks };
