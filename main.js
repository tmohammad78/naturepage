$(document).ready(function(){
    $('.navigation__button').on("click",()=>{
        $('.navigation__icon').toggleClass("navigation__icon-isactive");
        $('.navigation__nav').toggleClass("navigation__nav-isactive");
        $('.navigation__background').toggle();
        $('.navigation__background').toggleClass("navigation__background-isactive");
    });
});