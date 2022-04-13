   $(document).ready(function(){
   
      $('.owl-carousel').owlCarousel();
      
      let titulos = $('h4') // tag
      let itens = $('.featured-item') // class
      let destaques = $('#featured') // id
})

   $('.featured-item h4').dblclick( function(){

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
         });
});

   $('#form-submit').on('click', function(e){
      e.preventDefault()
   
      if( $('#email').val() != '' ){
         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, 500, function(){
               console.log($(this).val())
         })
      }
}); 

/*
* Ouvinte de eventos .nav-modal-open
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
* Validação do Formulário
*/

function validate( elem ){
   if( elem.val() == '') {

      console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

      elem.parent().find('.text-muted').show()

      elem.addClass('invalid')

      return false
   } else {
      elem.parent().find('.text-muted').hide()
      elem.removeClass('invalid')
   }
}

$(document).on('submit', function(e){
   e.preventDefault();

})

/*
* Máscaras 
*/
$(document).ready(function(){
   $('#date').mask('00/00/0000', {placeholder: '__/__/____'});
   $('time').mask('00:00', {placeholder: '00:00'});
   $('#cep').mask('00000-000', {placeholder: '_____-___'});
   $('#telefone').mask('(00)00000-0000',{placeholder: '(__)_____-____'});
   $('#cpf').mask('000.000.000-00', {reverse: true, placeholder:'___.___.___-__'});
})