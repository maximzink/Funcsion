var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

function createEl (){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'img/pic1.jpg');
    for(var i = pic1; i < pic4; i++) {
        thumbBar.appendChild(newImage);
    }
}


var newImage = document.createElement('img');
newImage.setAttribute('src', 'img/pic1.jpg');
thumbBar.appendChild(newImage);




function darknes(){
    getAttribute('class')
    if(class = "dark")
        {btn.setAttribute('class', 'light');
    btn.textContent = 'Висвітлити';
    overlay.style.backgroundColor = rgba(0,0,0,5);

    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Затемнити';
        overlay.style.backgroundColor = rgba(0,0,0,0);
    }




}

