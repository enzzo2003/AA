var urlPath = window.location.pathname;
// Obtém o nome do arquivo sem a extensão .html
var fileName = urlPath.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
// As seguintes linhas de código obtêm os parâmetros da URL e, em seguida, definem o texto e a imagem do elemento HTML correspondente.
// Const de recepçao da index.html
const urlParams = new URLSearchParams(window.location.search);
const fullName = urlParams.get('fullName');      
const picture = urlParams.get('picture');
// Insere imagem e foto e salva por cookies
document.getElementById('fullName').textContent = getCookie("welspan"); 
document.getElementById('picture').setAttribute('src', getCookie("picture"));  
// Funçao para remover as informaçoes do usuario na URL
history.pushState(null, '', window.location.href.split('?')[0]);
// FUnçao para capturar os cookies e autenticar o usuario com o token
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
    }
    return "";
    }
  // Funçao para Travar o usuario Caso nao feita o login e redirecionando para pagina de login
  window.onload = function() {
  if (!sessionStorage.getItem('userToken')) {
  window.location.href = 'index.html';
  }
  };                
  // Funçao Options 0/1 Clica aparece , clica desaprece usando opacidade 
<<<<<<< HEAD
  function toggleOptions() {
=======
function toggleOptions() {
>>>>>>> 10a58ed25a9a8defd3e634b1ce24bdefcbb10170
  const options = document.querySelector('.options');
  options.classList.toggle('active');
  if (options.classList.contains('active')) {
    options.style.opacity = '1';
  } else {
    options.style.opacity = '0';
  }
  }
 // função para rolar suavemente até o topo da página
function scrollToTop() {
// obtém a posição atual da barra de rolagem
<<<<<<< HEAD
const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
=======
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
>>>>>>> 10a58ed25a9a8defd3e634b1ce24bdefcbb10170

// se a posição atual da barra de rolagem for maior que zero, anima a rolagem para o topo
if (currentScroll > 0) {
window.requestAnimationFrame(scrollToTop);
window.scrollTo(0, currentScroll - (currentScroll / 8));
  }
}

// adiciona um evento de clique ao botão que chama a função scrollToTop()
document.querySelector('#botao').addEventListener('click', scrollToTop);

// seleciona o botão
const btn = document.querySelector('#botao');

// adiciona o evento scroll à janela
window.addEventListener('scroll', () => {
// verifica se a posição atual da barra de rolagem é maior que 0
if (window.scrollY > 0) {
// exibe o botão
btn.classList.add('exibir');
} else {
// oculta o botão
btn.classList.remove('exibir');
  }
});
// Configuraçao navbar
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav.menu');

menuIcon.addEventListener('click', function() {
  // Alterna a classe 'open' no ícone do menu
  menuIcon.classList.toggle('open');

  // Mostra ou esconde o menu
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    setTimeout(function() {
      menu.style.display = 'none';
    }, 300);
  } else {
    menu.style.display = 'block';
    setTimeout(function() {
      menu.classList.add('open');
    }, 0);
  }
});

