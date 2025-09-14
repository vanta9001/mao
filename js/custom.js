(function ($, Drupal, once) {
    'use strict';

    Drupal.behaviors.convention_code = {
        attach: function (context) {
            // Use `once` to ensure this behavior runs only once per element.
            once('conventionCodeBehavior', document).forEach(function () {
                var listAdded = $(".view-convention-registered-sponsor-list a", context)
                    .map(function () {
                        return $(this).attr("sponsor-val");
                    })
                    .get();

                var listAval = $(".view-convention-sponsor-list a", context)
                    .map(function () {
                        return $(this).attr("sponsor-val");
                    })
                    .get();

                listAval.forEach(function (item) {
                    if (jQuery.inArray(item, listAdded) !== -1) {
                        var Inp = '[sponsor-val="' + item + '"]';
                        var $sponsorItem = $('.view-convention-sponsor-list', context).find(Inp);

                        $sponsorItem.css("pointer-events", "none");
                        $sponsorItem.parents('tr').css("background", "#b7b7b7");
                        $sponsorItem.parents('tr').addClass("background");

                        // Use `once` for click events to avoid multiple bindings.
                        once('backgroundClick', $sponsorItem.parents('tr')).forEach(function (element) {
                            $(element).on('click', function (e) {
                                $("#stud-error", context).css('display', 'block').delay(1000).fadeOut();
                            });
                        });
                    }
                });
            });
        }
    };
})(jQuery, Drupal, once);
