feather.replace();

$(document).scroll(function () { 
    var y = $(this).scrollTop();
    if (y > 80) {
        $('.navbar').addClass('navbar-bg-scroll');
    } else {
        $('.navbar').removeClass('navbar-bg-scroll');
    }
});

const menuCanvas = document.getElementById('mainMenuCanvas');
menuCanvas.addEventListener('hide.bs.offcanvas', event => {
    $('.main-menu-toggle').removeClass('menu-toggle-active');
    var y = $(this).scrollTop();
    if (y < 80) {
        $('.navbar').removeClass('navbar-bg-scroll');
    }
});
menuCanvas.addEventListener('show.bs.offcanvas', event => {
    $('.main-menu-toggle').addClass('menu-toggle-active');
    $('.navbar').addClass('navbar-bg-scroll');
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top - 30;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

reveal();
window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);