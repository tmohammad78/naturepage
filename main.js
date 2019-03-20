$(document).ready(function(){
    $('.navigation__button').on("click",()=>{
        $('.navigation__icon').toggleClass("navigation__icon-isactive");
        $('.navigation__nav').toggle();
        $('.navigation__background').toggle().css({
            transition:"all 4.5s"
        });
    });
});