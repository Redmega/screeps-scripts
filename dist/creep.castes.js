class Caste {
  constructor(parts){
    this.body.push(MOVE);
    this.body.concat(parts);
  }

  public var body = [];
}

class Peon extends Caste {
  constructor(parts){
    super(parts);
    this.body.push(CARRY);
  }
}

class Worker extends Peon {
  constructor(parts){
    super(parts);
    this.body.push(WORK);
  }
}

class Transport extends Peon {
    constructor(parts){
      super(parts);
      this.body.concat([CARRY,MOVE])
    }
}