$(function () {
    $('.changeLang').on('click', function (e) {
        e.preventDefault();
        var lang = $(this).attr('data-lang');
        $('#changeLang').val(lang);
        $('#langForm').submit();
    });
});
