class Tanks {

  constructor(player, shot, hit, position) {
    this.player = {health:3 ,speed:1 ,armor:2 ,nuke:0};
    this.shot = shot;
    this.hit = hit;
    this.position = position;
    this.playableMoves = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];

  }

  // give location and postion of tank
  playerOneMove() {
    let min = Math.ceil(31);
    let max = Math.floor(33);
    return console.log(Math.floor(Math.random() * (max - min)) + min);
  }

  playerTwoMove() {
    let min = Math.ceil(34);
    let max = Math.floor(36);
    return console.log(Math.floor(Math.random() * (max - min)) + min);
  }

  playerLife() { // not working need to fix function inheritance
    if (this.player.health === 0) {
      return "You have died. Your bones rot away in the dusty swamp.";
    } else if (this.playerAttack() == true) {
      return this.player.health - 1;
    }
    return this.player.health;
  }


  // return shot distance and drop
  playerShot() {

  }

  // check if hit or a miss of a tank
  playerAttack() {
    return true;
  }

  //The maximum is exclusive and the minimum is inclusive
}
export { Tanks };
