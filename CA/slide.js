(function(document){
    var position = 0, 
    $items = document.querySelectorAll('.slideshow figure'), 
    slideLen = $items.length; 
    var display = function(){
        var selected = Math.abs(position%slideLen);
        [].forEach.call( $items, function(el){
            el.classList.remove('ss');
        });
        $items[selected].classList.add('ss');    
    };
    document.querySelector('.next').addEventListener('click', function() {
        position++;
        display();
    }, false);
    document.querySelector('.prev').addEventListener('click', function() {
        position--;
        display();
    }, false);
})(document);  