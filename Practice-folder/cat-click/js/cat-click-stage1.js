$(document).ready(function() {
    $('img').on('click', function() {
        var i = 0;
        i+=1;

        $(this).closest('#img-box').find('p').text('点击次数：' + i);
    });
});
