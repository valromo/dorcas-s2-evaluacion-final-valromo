'use strict';

var button = document.querySelector(".boton");
var input = document.querySelector(".input");
var textImput = input.value;
var listFilms = "";
var listContainer= document.querySelector(".lista");

function showFilms(){
  var textImput = input.value;
  fetch('http://api.tvmaze.com/search/shows?q='+textImput)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      for (var i = 0; i < json.length; i++) {
        var arrayFilms = json[i];
        var arrayFilmsShow = arrayFilms.show.name;
        var arrayFilmsImagen = arrayFilms.show.image.medium;
        var arrayFilmsUrl = arrayFilms.show.url;
        console.log (arrayFilmsImagen);

      }


    });
}
button.addEventListener('click',showFilms);
