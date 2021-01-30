var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

const Modal = {
  open() {
      // Abrir modal
      // Adicionar a class active ao modal
      document.querySelector('.modal-overlay').classList.add('active')
  }, close() {
      // Fechar o modal
      // Remover a classe active do modal
      document.querySelector('.modal-overlay').classList.remove('active')
  }
}