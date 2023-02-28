var typed = new Typed(".typing", {
    strings: ["olá", "hello", "hola"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


var typed = new Typed(".typing-2", {
    strings: ["C#", "C++", "HTML", "CSS", "JavaScript", "Python", "R"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-3", {
    strings: ["C[loa]ding..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  var boxes = document.querySelectorAll('.box');
  
  function checkVisibility() {
    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      
      if (isElementInViewport(box)) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    }
  }
  
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);