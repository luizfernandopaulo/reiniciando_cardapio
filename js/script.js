function verificar() {

    var nome = document.getElementById('txtn').value
    var email = document.getElementById('txte').value
    var nomeCom = document.getElementById('txtf').value
    var qtd = parseInt(document.getElementById('txtq').value)
    var res = document.getElementById('res')
  
    var nomeCli = []

    var emailCli = []

    var nomeFood = []

    var qtdP = []

    var valor = 0
  
  
      if(nome.length == 0 || email.length == 0 || nomeCom.length == 0 || qtd.length == 0) {
        res.innerHTML = `Erro tente novamente`
      } else {
        nomeCli.push(nome)
        emailCli.push(email)
        nomeFood.push(nomeCom)
        qtdP.push(qtd)
      } if(nomeFood == 'pizza') {
        valor = 25.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'hambúrguer') {
        valor = 12.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'doce') {
        valor = 1.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'bebida') {
        valor = 7.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'bolo') {
        valor = 45.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'milkshake') {
        valor = 10.50 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'sorvete') {
        valor = 12.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
      }
  }
  
  /*
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');
  menu.onclick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active')
  }
  window.onscroll = () => {
      menu.classList.remove('fa-times');
      navbar.classList.remove('active')
  }
  */
  
  document.querySelector('#search-icon').onclick = () => {
      document.querySelector('#search-form').classList.toggle('active')
  }
  
  document.querySelector('#close').onclick = () => {
      document.querySelector('#search-form').classList.remove('active')
  }
  
  
  var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
  });
  
  
  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut() {
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;


//opção menu
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

