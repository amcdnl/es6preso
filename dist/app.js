"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var $ = _interopRequire(require("jquery"));

require("material");

require("./styles.css!");

var Animal = require("./animal").Animal;
var Panda = require("./animal").Panda;


$("#fontIncrease").click(function (e) {
  System["import"]("styles2.css!");
});

$("#createAnimal").click(function (e) {
  var txt = $("#animal_name").val();
  var animal = new Animal(txt);
  animal.talk("moo");
});

$("#createPanda").click(function (e) {
  var txt = $("#animal_name").val();
  var panda = new Panda(txt);
  panda.talk();
});
//# sourceMappingURL=app.js.map