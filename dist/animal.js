"use strict";

var _get = function get(object, property, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};

var _inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }

  _prototypeProperties(Animal, null, {
    talk: {
      value: function talk(msg) {
        alert(this.name + " says " + msg);
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Animal;
})();

exports.Animal = Animal;
var Panda = (function (Animal) {
  function Panda() {
    if (Object.getPrototypeOf(Panda) !== null) {
      Object.getPrototypeOf(Panda).apply(this, arguments);
    }
  }

  _inherits(Panda, Animal);

  _prototypeProperties(Panda, null, {
    talk: {
      value: function talk() {
        var msg = arguments[0] === undefined ? "hi" : arguments[0];
        _get(Object.getPrototypeOf(Panda.prototype), "talk", this).call(this, msg);
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Panda;
})(Animal);

exports.Panda = Panda;
//# sourceMappingURL=animal.js.map