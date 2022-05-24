/*
* Função que mostra o Carrossel
*/

$(document).ready(function(){

   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') 
   let itens = $('.featured-item') 
   let destaques = $('#featured') 
});

/*
* Evento do Subscribe Form
*/

$('#form-submit').on('click', function(e){
   e.preventDefault()

   if($('#email').val() != ''){
      $('#email').animate({
         opacity: "toggle",
         top: "-50"
      }, 500, function(){
         console.log($(this).val())
      })
   }
})

/*
* Modal: Sobre/Contato
*/

$('.nav-modal-open').on('click', function(e){
   e.preventDefault();

   let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())

   let myModal = new bootstrap.Modal($('#modelId'))
   myModal.show()
})

/*
* Modal: Produtos
*/

$('.nav-modalProdutos').on('click', function(e){
   e.preventDefault();

   let myModal = new bootstrap.Modal($('#modelProdutos'))
   myModal.show()
})

/*
* Input Validation with RegEx
*/

function validate (elem){
   if (elem.val() == ''){
      elem.parent().find('#textRequired').show()
      elem.addClass('invalid')
      return false
   } else{
      elem.parent().find('#textRequired').hide()
      elem.addClass('invalid')
      return true
   }
}

$('body').on('submit', '.modal-body .myForm', function(e){
   e.preventDefault()

   $('#textErroNome').hide();
   $('#textErroEmail').hide();
   $('#textErroCep').hide();
   $('#textErroCel').hide();
   $('#textErroCpf').hide();

   let inputName = $('#name').val().length;
      if(inputName < 2 || inputName > 15){
         $('#textErroName').html('Digite um nome válido.');
         $('#textErroName').show();
      } else {
         $('#textErroName').hide();
      }

   let inputEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(.[a-z]+)?$/gi
      if(inputEmail.test($('#email').val())){
         $('#textErroEmail').hide();
      } else {
         $('#textErroEmail').html('Digite um e-mail válido.');
         $('#textErroEmail').show();
      }
})

$('body').on('blur', '#name', function(){
   validate($(this));
})

$('body').on('blur', '#email', function(){
   validate($(this))
})

/*
* Máscaras 
*/

$(document).ready(function(){
   $('#date').mask('00/00/0000', {placeholder: '__/__/____'});
   $('#time').mask('00:00', {placeholder: '00:00'});
   $('#cep').mask('00000-000', {placeholder: '_____-___'});
   $('#celular').mask('(00)0 0000-0000',{placeholder: '(__)_ ____-____'});
   $('#cpf').mask('000.000.000-00', {reverse: true, placeholder:'___.___.___-__'});
})