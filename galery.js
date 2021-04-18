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
        const img = ["img/SP3.jpg", "img/SP4.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item01 .carousel img').attr('src', img[i]);

    }
);

$('#forward01').click(
    () => {
        const img = ["img/SP3.jpg", "img/SP4.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item01 .carousel img').attr('src', img[i]);

    }
);

$('#back02').click(
    () => {
        const img = ["img/SEED2.jpg", "img/logoseed.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item02 .carousel img').attr('src', img[i]);

    }
);

$('#forward02').click(
    () => {
        const img = ["img/SEED2.jpg", "img/logoseed.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item02 .carousel img').attr('src', img[i]);

    }
);

$('#back03').click(
    () => {
        const img = ["img/Lucas35.jpg", "img/Lucas33.jpg", "img/Lucas34.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item03 .carousel img').attr('src', img[i]);

    }
);

$('#forward03').click(
    () => {
        const img = ["img/Lucas35.jpg", "img/Lucas33.jpg", "img/Lucas34.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item03 .carousel img').attr('src', img[i]);

    }
);

$('#back04').click(
    () => {
        const img = ["img/nouilles2.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item04 .carousel img').attr('src', img[i]);

    }
);

$('#forward04').click(
    () => {
        const img = ["img/nouilles2.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item04 .carousel img').attr('src', img[i]);

    }
);

$('#back05').click(
    () => {
        const img = ["img/mat2.jpg", "img/mat3.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item05 .carousel img').attr('src', img[i]);

    }
);

$('#forward05').click(
    () => {
        const img = ["img/mat2.jpg", "img/mat3.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item05 .carousel img').attr('src', img[i]);

    }
);

$('#back06').click(
    () => {
        const img = ["img/music2.jpg", "img/music3.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item06 .carousel img').attr('src', img[i]);

    }
);

$('#forward06').click(
    () => {
        const img = ["img/music2.jpg", "img/music3.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item06 .carousel img').attr('src', img[i]);

    }
);

$('#back07').click(
    () => {
        const img = ["img/voyage2.jpg", "img/voyage3.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item07 .carousel img').attr('src', img[i]);

    }
);

$('#forward07').click(
    () => {
        const img = ["img/voyage2.jpg", "img/voyage3.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item07 .carousel img').attr('src', img[i]);

    }
);

$('#back08').click(
    () => {
        const img = ["img/mat2.jpg", "img/mat3.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item08 .carousel img').attr('src', img[i]);

    }
);

$('#forward08').click(
    () => {
        const img = ["img/mat2.jpg", "img/mat3.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item08 .carousel img').attr('src', img[i]);

    }
);

$('#back09').click(
    () => {
        const img = ["img/kpop2.jpg", "img/kpop3.jpg", "img/kpop4.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item09 .carousel img').attr('src', img[i]);

    }
);

$('#forward09').click(
    () => {
        const img = ["img/kpop2.jpg", "img/kpop3.jpg", "img/kpop4.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item09 .carousel img').attr('src', img[i]);

    }
);

$('#back10').click(
    () => {
        const img = ["img/story2.jpg", "img/story3.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item10 .carousel img').attr('src', img[i]);

    }
);

$('#forward10').click(
    () => {
        const img = ["img/story2.jpg", "img/story3.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item10 .carousel img').attr('src', img[i]);

    }
);

$('#back11').click(
    () => {
        const img = ["img/kpop2.jpg", "img/kpop3.jpg", "img/kpop4.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item11 .carousel img').attr('src', img[i]);

    }
);

$('#forward11').click(
    () => {
        const img = ["img/kpop2.jpg", "img/kpop3.jpg", "img/kpop4.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item11 .carousel img').attr('src', img[i]);

    }
);

$('#back13').click(
    () => {
        const img = ["img/bar5.jpg", "img/bar2.jpg", "img/bar3.jpg", "img/bar4.jpg"]
        i <= 0 ? i = img.length - 1 : i--;
        $('#item13 .carousel img').attr('src', img[i]);

    }
);

$('#forward13').click(
    () => {
        const img = ["img/bar5.jpg",, "img/bar2.jpg", "img/bar3.jpg", "img/bar4.jpg"]
        i >= img.length -1 ? i = 0 : i++;
        $('#item13 .carousel img').attr('src', img[i]);

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