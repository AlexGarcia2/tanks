import { Tanks } from './../src/tanks.js';

describe('player health', function(){
  let player;
  beforeEach(function(){
    player = new Tanks('Bob', 3, 4, 6);
  });

  it('should return a positive for attack being true', function(){
    expect(player.playerLife()).toEqual(2);

  })
})
