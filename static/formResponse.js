var url = 'https://script.google.com/macros/s/AKfycbyvYFLHsFnqwOCrtJ8yuz_xZ_p76rIUjLHEvksN-yHxtgiWuTQ/exec';

$('#submit-form').on('click', function (e) {
    var Phone = $('#phone')[0].value,
        Email = $('#email')[0].value,
        Subject = $('#subject')[0].value,
        comment = $('#comment')[0].value;
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        data: {Phone, Email, Subject, comment}
    }).success(
        // do something
    );
});
