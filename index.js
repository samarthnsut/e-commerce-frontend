// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var hearts = document.getElementsByClassName('heart');
for(let i = 0; i < hearts.length; i++)
{
  hearts[i].addEventListener('click',function(event){
    event.preventDefault();
    let left = hearts[i].getElementsByClassName('left');
    let right = hearts[i].getElementsByClassName('right');
    let attr = hearts[i].getAttribute('data-attr');
    if(attr === 'false')
      {
        left[0].setAttribute('style', 'background-image: linear-gradient(45deg, #feda6a 50%, #a7904c);');
        hearts[i].setAttribute('data-attr', 'true');
        right[0].setAttribute('style', 'background-image: linear-gradient(-45deg, #feda6a 50%, #a7904c);')
      }
    else
    {
      left[0].setAttribute('style', 'background: white;');
      hearts[i].setAttribute('data-attr', 'false');
      right[0].setAttribute('style', 'background: white;')
    }
  });
}