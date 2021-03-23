// portfolio
$('.gallery ul li a').click(function () {
    var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function () {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});

$(".gallery ul li a").click(function () {
    $('html, body').animate({
        scrollTop: parseInt($("#realisations").offset().top - 70)
    }, 400);
});


let i = 0;
$('#back01').click(
    () => {
        const img = ["img/Artboard 1.jpg", "img/Affiche_Converse.jpg", "img/Affiche_WayV.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item01 .row img').attr('src', img[i]);

    }
);

$('#forward01').click(
    () => {
        const img = ["img/Artboard 1.jpg", "img/Affiche_Converse.jpg", "img/Affiche_WayV.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item01 .row img').attr('src', img[i]);

    }
);

$('#back02').click(
    () => {
        const img = ["img/SEED2.jpg", "img/SEED.jpg", "img/Affiche_WayV.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item02 .row img').attr('src', img[i]);

    }
);

$('#forward02').click(
    () => {
        const img = ["img/SEED2.jpg", "img/SEED.jpg", "img/Affiche_WayV.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item02 .row img').attr('src', img[i]);

    }
);

$('#back03').click(
    () => {
        const img = ["img/Artboard 1.jpg", "img/SEED2.jpg", "img/Affiche_WayV.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item03 .row img').attr('src', img[i]);

    }
);

$('#forward03').click(
    () => {
        const img = ["img/Artboard 1.jpg", "img/SEED2.jpg", "img/Affiche_WayV.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item03 .row img').attr('src', img[i]);

    }
);