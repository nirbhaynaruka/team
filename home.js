$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
       placement: 'top',
       trigger: 'hover'
    });
 });
 $(function(){
    $('div.box1').hide();
        $('.toggle').on('click', function(){
            $('div.box, div.box1').toggle();
        });
});  
$(function(){
    $('div.box2').hide();
        $('.toggle2').on('click', function(){
            $('div.box1, div.box2').toggle();
        });
});  
