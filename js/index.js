// Your code goes here


/* ----------- NAV -------- */
let navAnchors = document.querySelectorAll('.nav-link');

navAnchors.forEach(function(index, i){
    navAnchors[i].addEventListener('mouseover', function(e) {
        e.target.style.color = '#fcc100';
        e.target.style.textDecoration = 'underline';
    });
});

navAnchors.forEach(function(index, i){
    navAnchors[i].addEventListener('mouseout', function(e) {
        e.target.style.color = '';
        e.target.style.textDecoration = 'none';
    });
});

//

/* ----------- BODY -------- */

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("colour").className = "test";
  } else {
    document.getElementById("colour").className = "";
  }
}

/* ----------- BUTTON -------- */

let button = document.querySelectorAll('.btn');

button.forEach(function(index, i){
    button[i].addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'rgba(235,145,229,1)';
        e.target.style.borderRadius = '0px';
    });
});