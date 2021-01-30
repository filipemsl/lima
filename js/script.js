  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

const Modaleaster = {
  open() {
      // Abrir modal
      // Adicionar a class active ao modal
      document.querySelector('.modal-easter-overlay').classList.add('active')
  }, close() {
      // Fechar o modal
      // Remover a classe active do modal
      document.querySelector('.modal-easter-overlay').classList.remove('active')
  }
}

function scrollToContato () {
  document.getElementById('contato').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToContatoAlt () {
  window.location.href = "index.html";
  document.getElementById('contato').scrollIntoView({
    behavior: 'smooth'
  });
}

function seguirPortfolio (){
  window.location.href = "https://bit.ly/3mKwk9h"
}


var openPhotoSwipe = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: '../images/Artesa.jpg',
          w: 5000,
          h: 3500
      },
      {
          src: '../images/DA.jpg',
          w: 1092,
          h: 764
      },
      {
        src: '../images/Passarela.jpg',
        w: 3507,
        h: 2479
      },
      {
        src: '../images/Acmed.jpg',
        w: 3500,
        h: 2520
      },
      {
        src: '../images/Emporio.jpg',
        w: 1920,
        h: 1440
      },
      {
        src: '../images/Maisa.jpg',
        w: 1629,
        h: 1141
      },
      {
        src: '../images/Vtrine.jpg',
        w: 3368,
        h: 2358
      },
      {
        src: '../images/Clay.jpg',
        w: 4824,
        h: 3376
      },
      {
        src: '../images/Cecilia.jpg',
        w: 3998,
        h: 2297
      },
      {
        src: '../images/Osiris.jpg',
        w: 2000,
        h: 1185
      },
      {
        src: '../images/Arretado.jpg',
        w: 2553,
        h: 1418
      }
  ];
  
  // define options (if needed)
  var options = {
     // history & focus options are disabled on CodePen        
      history: false,
      focus: false,

      showAnimationDuration: 0,
      hideAnimationDuration: 0
      
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;