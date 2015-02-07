export class Animal {
  constructor(name) {
    this.name = name;
  }
  talk(msg){
    alert(this.name + ' says ' + msg);
  }
}

export class Panda extends Animal {
  talk(msg = 'hi') {
    super(msg);
  }
}
