'use strict';

var button = document.querySelector(".boton");
var input = document.querySelector(".input");
var textImput = input.value;
var listContainer= document.querySelector(".lista");
var button2 = document.querySelector(".boton2");
var input2 = document.querySelector(".input2");
var valorNombre=input2.value;
var parrafo= document.querySelector(".parrafo");

function showSeries(){
  var textImput = input.value;
  fetch('http://api.tvmaze.com/search/people?q='+ textImput)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var listContainer= document.querySelector(".lista");
      listContainer.innerHTML='';
      for (var i = 0; i < json.length; i++) {
        console.log(json[i]);
        var newLi = document.createElement('li');
        newLi.classList.add('list-serie');
        newLi.addEventListener('click',showFavorite);

        var h2 = document.createElement('h2');
        h2.classList.add('title-serie');
        var titleText = document.createTextNode (json[i].person.name);

        var image = document.createElement('img');
        image.classList.add('image-serie');
        if (json[i].person.image === null ) {
          image.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        } else {
          image.src = json[i].person.image.medium;
        }
        h2.appendChild(titleText);
        newLi.appendChild(h2);
        newLi.appendChild(image);
        listContainer.appendChild(newLi);

      }

    });
}
button.addEventListener('click',showSeries);
button2.addEventListener('click',showName);
function showFavorite(event){
  event.currentTarget.classList.toggle('favorit-serie');
}
function showName(evento){
  alert( "Bienvenida " + input2.value);
  parrafo.innerHTML= "Bienvenida " + input2.value;
}
