import $ from 'jquery';
import 'material';
import './styles.css!';
import {Animal, Panda} from './animal';

$('#fontIncrease').click(e => {
    System.import('styles2.css!');
});

$('#createAnimal').click(e => {
  var txt = $('#animal_name').val();
  var animal = new Animal(txt);
  animal.talk('moo');
});

$('#createPanda').click(e => {
  var txt = $('#animal_name').val();
  var panda = new Panda(txt);
  panda.talk();
});
