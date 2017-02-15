// Exercise

class Monster {
    constructor({name}) {
        this.name = name;
        this.health = 100;
    }
}

const monster = new Monster({name: 'test'});

// Exercise 

class Monster3 {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster3 {
    constructor(options) {
        super(options);
    }
    
    deducateHealth() {
        this.health -= 10;
    }
    
    bite(snake) {
        snake.deducateHealth();
    }
}