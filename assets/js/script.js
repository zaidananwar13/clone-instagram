const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let liked = false;

function like() {
    if(liked == false) {
        liked = true;
        $("#heart").attr("src", "assets/image/icons/12.png");
    }else {
        liked = false;
        $("#heart").attr("src", "assets/image/icons/5.png");
    }
}
