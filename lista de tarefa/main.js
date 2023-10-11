$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');

        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $('ul').on('click', 'li', function(){
            $(this).css('text-decoration', 'line-through');
        });

        novoItem.css("cursor", "pointer");

        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })
    
    
})