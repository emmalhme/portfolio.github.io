AOS.init();
$(".hover").click(
    function () {
        $(this).removeClass("hover");
    }
);


// Du coup j'ai mis en commentaire ligne 507 en CSS, plus besoin de cette declaration css car on le gere ici maintenant
// J'ai également mis en commentaire ton appel à ton fichier aos dans ton head. AOS est un fichier JS, donc à appeler en fin de fichier grace à une balise script
// J'ai également appelé ton fichier JS perso que tu n'avais pas appelé


if (window.matchMedia("(max-width: 1334px)").matches) {
    // Au clic sur le burger
    $('#burger-toggle').on('click', function () {
        // si le burger est coché, faire apparaitre le bloc menu
        if ($('#burger-toggle').is(':checked')) {
            $('.nav-list').css('transform', 'none');
        } else {
            // Sinon, faire disparaitre le bloc menu
            $('.nav-list').css('transform', 'translateX(-100%)')
        }
    });

    // Au clic sur un lien du menu
    $('.nav-list a').on('click', function () {
        // faire disparaitre le bloc menu
        $('.nav-list').css('transform', 'translateX(-100%)');
        // Décoché le burger pour qu'il soit decoché si on reclique dessus
        $('#burger-toggle').prop("checked", false);
    });
}

AOS.init({
    duration: 1200,
  })

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

