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

$('body').on('submit', '.modal-body .myForm', function(e){
   e.preventDefault()

   $('#msg_errorNome').hide();
   $('#msg_errorEmail').hide();
   $('#msg_errorCep').hide();
   $('#msg_errorCelular').hide();
   $('#msg_errorCpf').hide();

      let erroName = false;
      let erroEmail = false;
      let erroCep = false;
      let erroCel = false;
      let erroCpf = false;

   $('#nome').focusout(function(){
      check_Name();
   });
   $('#email').focusout(function(){
      check_Email();
   });
   $('#cep').focusout(function(){
      check_Cep();
   });
   $('#celular').focusout(function(){
      check_Cel();
   });
   $('#cpf').focusout(function(){
      check_Cpf();
   });

   function check_Name(){
      let nameLength = $('#nome').val().length;

         if(nameLength < 2 || nameLength > 15){
            $('#msg_errorNome').html('Digite um nome válido.');
            $('#msg_errorNome').show();
            erroName = true;
         } else {
            $('#msg_errorNome').hide();
         }
      }

   function check_Email(){
      let regxEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(.[a-z]+)?$/gi
   
         if(regxEmail.test($('#email').val())){
            $('#msg_errorEmail').hide();
         } else {
            $('#msg_errorEmail').html('Digite um e-mail válido.');
            $('#msg_errorEmail').show();
            erroEmail = true;
         }
      }

   function check_Cep(){
      let regxCep = /^[0-9]{8}/;

         if(regxCep.test($('#cep').val())){
            $('#msg_errorCep').hide();
         } else {
            $('#msg_errorCep').html('Digite um CEP válido.');
            $('#msg_errorCep').show();
            erroCep = true;
         }
      }

   function check_Cel(){
      let regxCel = /^[0-9]{11}/;

      if(regxCel.test($('#celular').val())){
         $('#msg_errorCelular').hide();
      } else {
         $('#msg_errorCelular').html('Digite um celular válido.');
         $('#msg_errorCelular').show();
         erroCel = true;
      }
   }

   function check_Cpf(){
      let regxCpf = /^[0-9]{11}/;

         if(regxCpf.test($('#cpf').val())){
            $('#msg_errorCpf').hide();
         } else {
            $('#msg_errorCpf').html('Digite um CPF válido.');
            $('#msg_errorCpf').show();
            erroCpf = true;
         }
   }

})

$('body').on('submit', '.modal-body .myForm', function(){

   erroName = false;
   erroEmail = false;
   erroCep = false;
   erroCel = false;
   erroCpf = false;

   check_Name();
   check_Email();
   check_Cep();
   check_Cel();
   check_Cpf();
   
   if (erroName == false && erroEmail == false && erroCep == false && erroCel == false && erroCpf){
      return true;
   } else {
      return false;
   }
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