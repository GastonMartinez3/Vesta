$(document).ready(function(){
  
  $('#btnSend').click(function(){

    var errores = '';

  // Validacion nombre ======================

  if( $('#name').val() == '' ){
    errores += '<p>Escriba un nombre</p>'
    $('#name').css("border-color", "#F14B4B")
  } else{
    $('#name').css("border-color", "#d1d1d1")
  }

  // Validacion correo ======================

  if( $('#email').val() == '' ){
    errores += '<p>Ingrese un correo electronico</p>'
    $('#email').css("border-color", "#F14B4B")
  } else{
    $('#email').css("border-color", "#d1d1d1")
  }
  
  // Validacion Mensaje ======================

  if( $('#menssage').val() == '' ){
    errores += '<p>Escriba un mensaje</p>'
    $('#menssage').css("border-color", "#F14B4B")
  } else{
    $('#menssage').css("border-color", "#d1d1d1")
  }

  // ENVIANDO MENSAJE =======================

  if( errores == '' == false){
    var mensajeModal = '<div class="modal_wrap">'+
                            '<div class="mensaje_modal">'+
                                '<h3>Errores encontrados</h3>'+
                                errores+
                                '<span id="btnClose">Cerrar</span>'+      
                            '</div>'+
                        '</div>'
    $('body').append(mensajeModal);
  }

  // CERRANDO MODAL =========================

  $('#btnClose').click(function(){
    $('.modal_wrap').remove();
  });

  })

  

});

$(document).ready(function(){
  
  $('#btnSenden').click(function(){

    var errores = '';

  // Validacion nombre ======================

  if( $('#name').val() == '' ){
    errores += '<p>Put your name</p>'
    $('#name').css("border-color", "#F14B4B")
  } else{
    $('#name').css("border-color", "#d1d1d1")
  }

  // Validacion correo ======================

  if( $('#email').val() == '' ){
    errores += '<p>Complete your email</p>'
    $('#email').css("border-color", "#F14B4B")
  } else{
    $('#email').css("border-color", "#d1d1d1")
  }
  
  // Validacion Mensaje ======================

  if( $('#menssage').val() == '' ){
    errores += '<p>Write a menssage</p>'
    $('#menssage').css("border-color", "#F14B4B")
  } else{
    $('#menssage').css("border-color", "#d1d1d1")
  }

  // ENVIANDO MENSAJE =======================

  if( errores == '' == false){
    var mensajeModal = '<div class="modal_wrap">'+
                            '<div class="mensaje_modal">'+
                                '<h3>Missing information</h3>'+
                                errores+
                                '<span id="btnClose">Close</span>'+      
                            '</div>'+
                        '</div>'
    $('body').append(mensajeModal);
  }

  // CERRANDO MODAL =========================

  $('#btnClose').click(function(){
    $('.modal_wrap').remove();
  });

  })

  

});

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="en/index.html";
    }else{
        location.href="../index.html";
    }
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}