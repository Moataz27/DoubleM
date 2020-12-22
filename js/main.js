$(function(){
    window.location.hash = "";
    $('a').on('click', function(e){
        if(this.hash !== ""){
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
        if($(this).parent('.nav-item')){
            $(this).parent().addClass('active').siblings().removeClass('active');
        }
        
    });
    
    var scrollBtn = $('.scrollTop');
    $(window).on("scroll", function(){
        if(scrollY >= 300){
            $(scrollBtn).fadeIn();
        } else{
            $(scrollBtn).fadeOut();
        }
    });
    $(scrollBtn).on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        });
    });
});