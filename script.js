var main = function() {
    $('img').click(function() {
        $('ul').toggle('.dropdown-menu'); 
    });
};
 
$(document).ready(main);