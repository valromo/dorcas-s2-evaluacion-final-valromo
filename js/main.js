'use strict';

var button = document.querySelector(".boton");
var input = document.querySelector(".input");
var textImput = input.value;
var listContainer= document.querySelector(".lista");

function showSeries(){
  var textImput = input.value;
  fetch('http://api.tvmaze.com/search/shows?q='+ textImput)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var listContainer= document.querySelector(".lista");
      listContainer.innerHTML='';
      for (var i = 0; i < json.length; i++) {
        var newLi = document.createElement('li');
        newLi.classList.add('list-serie');
        newLi.addEventListener('click',showFavorite);

        var h2 = document.createElement('h2');
        h2.classList.add('title-serie');
        var titleText = document.createTextNode (json[i].show.name);

        var image = document.createElement('img');
        image.classList.add('image-serie');
        if (json[i].show.image === null ) {
          image.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
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
button.addEventListener('click',showSeries);
function showFavorite(event){
  event.currentTarget.classList.toggle('favorit-serie');
}
