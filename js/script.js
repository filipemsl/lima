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
          src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
          w: 964,
          h: 1024
      },
      {
          src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
          w: 1024,
          h: 683
      },
      {
        src: '../images/domenico-loia-hGV2TfOh0ns-unsplash.jpg',
        w: 5848,
        h: 3899
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