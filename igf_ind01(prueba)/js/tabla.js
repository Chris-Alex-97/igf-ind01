$(document).ready(function(){
    $('.btn-editar').on('click',function(){
        console.log($(this).attr('data-id-estudiante'));
    });

    $('.btn-eliminar').on('click',function(){
        $(this).closest('tr').hide();
    });

    $('#btnNuevoReistro').on('click',function(){
        location.href=$(this).attr('data-url-formulario');
    });
});