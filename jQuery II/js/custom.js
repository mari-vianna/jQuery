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
* Modal
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
* Validação Formulário
*/

$(document).on('submit', '.modal-body .myForm', function(e){
   e.preventDefault()

   let inputName = $('#nome').val();
   let inputEmail = $('#email').val();
   let inputCep = $('#cep').val();
   let inputCelular = $('#celular').val();
   let inputCpf = $('#cpf').val()

   if(inputName==""){
      $('#errorMsg').show();
      $('#errorMsg').text ('Campo Obrigatório.');
      return false
   } else{
      let regName = /^([a-zA-Z]{2})$/;

      if(!regName.test(inputName)){
      $('#errorMsg').show();
      $('#errorMsg').text ('Digite um nome válido.');
      return false
      }
   };  

   if(inputEmail==""){
      $('#errorMsg').show();
      $('#errorMsg').text ('Campo Obrigatório.');
      return false
   } else {
      let regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

      if(!regEmail.test(inputEmail)){
      $('#errorMsg').show();
      $('#errorMsg').text ('Digite um email válido.');
      return false
      }
   };

   if(inputCep==""){
      $('#errorMsg').show();
      $('#errorMsg').text ('Campo Obrigatório.');
      return false
   } else {
      let regCep = /^([0-9]{5}-[0-9]{3})/;

      if(!regCep.test(inputCep)){
         $('#errorMsg').show();
         $('#errorMsg').text ('Digite um CEP válido.');
         return false
         }
   };

   if(inputCelular==""){
      $('#errorMsg').show();
      $('#errorMsg').text ('Campo Obrigatório.');
      return false
   } else {
      let regCelular = /^[0-9]{11}/;

      if(!regCelular.test(inputCelular)){
         $('#errorMsg').show();
         $('#errorMsg').text ('Digite um celular válido.');
         return false
         }
   };

   if(inputCpf==""){
      $('#errorMsg').show();
      $('#errorMsg').text ('Campo Obrigatório.');
      return false
   } else {
      let regCpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

      if(!regCpf.test(inputCpf)){
         $('#errorMsg').show();
         $('#errorMsg').text ('Digite um celular válido.');
         return false
         }
   };

   return true
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
