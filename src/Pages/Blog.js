
$(function () {
    let mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    mybutton.addEventListener("click", backToTop);
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    $(".loader").hide().toggleClass('d-flex')
    $(window).scroll(function () {
        if ($(this).scrollTop() >= _LastPos && $(this).scrollTop() - _LastPos >= 1000) {
            _LastPos = $(this).scrollTop()
            $.ajax({
                type: 'GET',
                url: '/' + _Lang + "/LoadBlogsPages",
                data: { pageNumber: ++_PageNumber, isHomeOnly: _IsHomeArticlesOnly, catId: _CategoryId },
                beforeSend: function (e) {
                    $(".loader").show().toggleClass('d-flex')
                },
                success: function (e) {
                    $("#mainEle").append(e)
                },
                complete: function (e) {
                    $(".loader").hide().toggleClass('d-flex')
                }
            })
        }
    })
})