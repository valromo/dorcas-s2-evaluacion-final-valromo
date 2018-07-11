'use strict';

var button = document.querySelector(".boton");
var input = document.querySelector(".input");
var textImput = input.value;
var listFilms = "";
var listContainer= document.querySelector(".lista");

function showFilms(){
  var textImput = input.value;
  fetch('http://api.tvmaze.com/search/shows?q='+ textImput)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for (var i = 0; i < json.length; i++) {
        // var arrayFilms = json[i];
        // var arrayFilmsShow = arrayFilms.show.name;
        // var arrayFilmsImagen = arrayFilms.show.image;
        var listContainer= document.querySelector(".lista");
        var newLi = document.createElement('li');
        var h2 = document.createElement('h2');
        var titleText = document.createTextNode (json[i].show.name);
        var image = document.createElement('img');
        if (json[i].show.image === null ) {
          image.src = "https://via.placeholder.com/210x295/cccccc/666666/?text=TV";
        } else {
          image.src = json[i].show.image.medium;
        }
        h2.appendChild(titleText);
        newLi.appendChild(h2);
        newLi.appendChild(image);
        listContainer.appendChild(newLi);
      }
    });
}
button.addEventListener('click',showFilms);
