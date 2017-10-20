(function(Mozilla, $) {
    'use strict';

    /*
    TODO:

    1. Move app store badges inside modal
    2. Wire up Firefox/Focus buttons to show modal and:
        a. display correct app store badges
        b. display correct QR code
        c. set correct basket message set
    */

    // move app store badges inside modal
    var $mobileDownloadButtons = $('.mobile-download-buttons').remove();

    $('#modal-mobile-download-buttons-wrapper').append($mobileDownloadButtons);

    var $getFirefoxButtons = $('.get-firefox');
    var $getFocus = $('.get-focus');

    // links become buttons
    $('.get-product-link').attr('role', 'button')

    $('.get-firefox, .get-focus').on('click', openModal);

    var $modalOuterWrapper = $('#modal-outer-wrapper');
    var $modalContents = $('#modal-wrapper');
    var $body = $('body');

    $('#send-to-device button[type="submit"]').addClass('quantum-hollow');

    function openModal(e) {
        e.preventDefault();

        var product = $(this).data('product');

        var selectorToHide = (product === 'firefox') ? '.focus' : '.firefox';
        var selectorToShow = (product === 'firefox') ? '.firefox' : '.focus';

        // contorl styling of modal: blue for firefox, purple for focus
        $body.attr('data-modal-product', product);

        $modalContents.find(selectorToHide).addClass('hidden');
        $modalContents.find(selectorToShow).removeClass('hidden');

        Mozilla.Modal.createModal(this, $modalContents, {
            title: ''
        });
    }

    // initialize send to device widget
    var form = new Mozilla.SendToDevice();

    form.init();
})(window.Mozilla, window.jQuery);
