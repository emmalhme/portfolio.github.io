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


document.addEventListener('DOMContentLoaded',function(event){

    var dataText = [ 
        "Je suis créative, appliquée,",
        "motivée, investie et curieuse",
        "Je recherche une alternance,", 
        "à partir de Septembre 2021." ,
        "N'hésitez pas à me contacter !" ,
        "Je suis créative, appliquée,",
        "motivée, investie et curieuse",
        "Je recherche une alternance,", 
        "à partir de Septembre 2021." ,
        "N'hésitez pas à me contacter !" ,
        "Je suis créative, appliquée,",
        "motivée, investie et curieuse",
        "Je recherche une alternance,", 
        "à partir de Septembre 2021." ,
        "N'hésitez pas à me contacter !" ,
        "Je suis créative, appliquée,",
        "motivée, investie et curieuse",
        "Je recherche une alternance,", 
        "à partir de Septembre 2021." ,
        "N'hésitez pas à me contacter !" ,
        "Je suis créative, appliquée,",
        "motivée, investie et curieuse",
        "Je recherche une alternance,", 
        "à partir de Septembre 2021." ,
        "N'hésitez pas à me contacter !" ,
        "Je suis créative, appliquée,",
        "motivée, investie et curieuse",
        "Je recherche une alternance,", 
        "à partir de Septembre 2021." ,
        "N'hésitez pas à me contacter !" ,
    ];
      
      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
         document.getElementById("text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 50);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 1000);
        }
      }
      // start a typewriter animation for a text in the dataText array
       function StartTextAnimation(i) {
         // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
           // after callback (and whole text has been animated), start next text
           StartTextAnimation(i + 1);
         });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });