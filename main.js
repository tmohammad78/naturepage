$(document).ready(function(){
    $('.navigation__button').on("click",()=>{
        $('.navigation__icon').toggleClass("navigation__icon-isactive");
        $('.navigation__nav').toggleClass("navigation__nav-isactive");
        $('.navigation__background').toggle();
        $('.navigation__background').toggleClass("navigation__background-isactive");
    });
    $('#popup').on("click",()=>{
        $('.test').addClass("popup").append(`  <div class="popup__content">
        <div class="popup__left">
            <img src="img/nat-8.jpg" alt="tour photo" class="popup__img">
            <img src="img/nat-9.jpg" alt="tour photo" class="popup__img"> 
        </div>
        <div class="popup__right">
            <a href="" class="popup__close" >&times;</a>
            <h3 class="heading-secondary u-margin-bottom-medium ">Start Booking Now</h3>
            <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms bofore booking </h3>
            <p class="popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Pharetra sit amet aliquam id diam maecenas. Et ultrices neque ornare aenean euismod elementum. Odio eu feugiat pretium nibh ipsum consequat. At tellus at urna condimentum mattis. Odio tempor orci dapibus ultrices in iaculis nunc. Ipsum dolor sit amet consectetur adipiscing. Facilisis leo vel fringilla est ullamcorper eget. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Gravida cum sociis natoque penatibus. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Duis at consectetur lorem donec massa sapien. Mi proin sed libero enim sed faucibus turpis in eu</p>
            <a href="" class="btn btn--green">Book Now</a>
        </div>
    </div>
        `);
    });
    $('.popup__close').on("click",()=>{
        $('.test').removeClass("popup");
    });
    
});