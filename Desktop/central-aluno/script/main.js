function handleCredentialResponse(response) {   // Funçao para Decodificar JWT TOKEN e assim passar a imagem e nome para os id FUllname e Picture da index2.html
  const data = jwt_decode(response.credential);                      
  const queryParams = `?fullName=${data.name}&picture=${data.picture}`;
  document.cookie = `welspan=${data.name}`;
  document.cookie = `picture=${data.picture}`;
  window.location.href = `index2.html${queryParams}`; 
  }
 // Funçao para animar texto Letra p/ Letra
<<<<<<< HEAD
    function animateText(elementId, message, delay) {
    const element = document.getElementById(elementId);
    let index = 0;
    const intervalId = setInterval(function() {
    element.innerHTML += message.charAt(index);
    index++;
    if (index >= message.length) {
    clearInterval(intervalId);
    }
    }, delay);
    }
=======
function animateText(elementId, message, delay) {
  const element = document.getElementById(elementId);
  let index = 0;
  const intervalId = setInterval(function() {
  element.innerHTML += message.charAt(index);
  index++;
  if (index >= message.length) {
  clearInterval(intervalId);
  }
  }, delay);
  }
>>>>>>> 10a58ed25a9a8defd3e634b1ce24bdefcbb10170
 // Funçao para animar texto Letra p/ Letra
  window.addEventListener('load', function() {
  animateText('hello', 'OLÁ!', 100);
  animateText('message', 'Acesse o Centralizador com a sua conta Google.', 100);

// Renderiza o botao do google com as configuraçoes 
    google.accounts.id.initialize({
    client_id: "857961179786-r9p4i592okbbt5eoqhvgfjhl8vparn3h.apps.googleusercontent.com",
    callback: handleCredentialResponse,
    auto_select: true,
<<<<<<< HEAD
        hosted_domain: "notredamecampinas.net.br"
=======
    hosted_domain: "notredamecampinas.net.br"
>>>>>>> 10a58ed25a9a8defd3e634b1ce24bdefcbb10170
      });

// Estilizaçao do botao google 
      google.accounts.id.renderButton(
      document.getElementById("buttonlogin"),{
      theme: "outline",
      type:"standard",
      text:"continue_with.",
      size:"large",
      logo_alignment:"center",
      width:"10",
      heigh:"10",
  }
  );
  
buttonlogin.classList.add("style-button");

<<<<<<< HEAD

// POP UP DO BOTAO GOOGLE
    google.accounts.id.prompt();
    });
=======
// POP UP DO BOTAO GOOGLE
    google.accounts.id.prompt();
    });
    
>>>>>>> 10a58ed25a9a8defd3e634b1ce24bdefcbb10170
    if (!localStorage.getItem("autenticado")) {
// Se não estiver autenticado, redireciona para a página de login
    window.location.href = "login.html";
    }

  // Armazena login na maquina do usuario 
    sessionStorage.setItem('userToken', 'meuTokenDeUsuario');
    


                    






