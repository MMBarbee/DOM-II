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

/*

navAnchors[i].addEventListener("click", function(e){
e.preventDefault();
});

Why does this code prevent all other event listeners from functioning?
*/


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
    button[i].addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'rgba(235,145,229,1)';
        e.target.style.borderRadius = '0px';
    });
});
/* ------------------------- */
const signBtn = document.querySelectorAll('.btn');

signBtn[0].addEventListener('click', function(event) {

    console.log("Fun in the sun button was clicked!");
});
signBtn[1].addEventListener('click', function(event) {
    console.log("Mountain Excursion button was clicked!");
});

signBtn[2].addEventListener('click', function(event) {
    console.log("Island Getaway button was clicked!");
});


/* ----------- TEXT CONTENT -------- */

const h2s = document.querySelectorAll('h2');
h2s.forEach(function(element) {
    element.addEventListener('mouseover', function(event) {
      event.target.style.fontWeight = 'bold';
    });
  });

//

const pTags = document.querySelectorAll('p');

  pTags.forEach(function(element) {
    element.tabIndex = 1;
    element.addEventListener('focus', function(event) {
      event.target.style.backgroundColor = 'white';
    });
    element.addEventListener('blur', function(event) {
      event.target.style.background = '';    
    });
  });