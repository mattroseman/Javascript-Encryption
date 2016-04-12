$(document).ready(function() {
    openpgp.initWorker({path: './openpgp.worker.min.compiled.js'});
    openpgp.config.aead_protect = true;

    $('.protocol_cbox').click(function() {
        $('.protocol_cbox').prop('checked', false);
        $(this).prop('checked', true);
    });

    $('.encrypt-button').click(function() {
        if ($('.cbox_rsa').is(':checked')) {
            printRsaEncryption($('.plaintext-message').val());
        }
        else if ($('.cbox_sha').is(':checked')) {
            printShaEncryption($('.plaintext-message').val());
        }
    });
});

function printRsaEncryption(plaintext) {
    var options = {
        data: plaintext
    };
    openpgp.encrypt(options).then(function(ciphertext) {
        encrypted = ciphertext.data;
    });
    $('body').append(encrypted);
}

function printShaEncryption(plaintext) {
}
