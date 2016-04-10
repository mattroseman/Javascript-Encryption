$(document).ready(function() {
    $(".protocol_cbox").click(function() {
        $(".protocol_cbox").prop("checked", false);
        $(this).prop("checked", true);
    });
});
