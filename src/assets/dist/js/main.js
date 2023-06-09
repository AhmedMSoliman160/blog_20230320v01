$(".openform").on("click", function () {
    $(this).next(".sub-dropdown").addClass("active-sub");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".closesub, .navbar-toggler, .dropdown-toggle").on("click", function () {
    $(".sub-dropdown").removeClass("active-sub");
});

$(".opensub").on("click", function () {
    $(this).next(".subsub-dropdown").addClass("active-sub");
});

$(".closesubsub, .navbar-toggler, .dropdown-toggle").on("click", function () {
    $(".subsub-dropdown").removeClass("active-sub");
});

$(".logfn").on("click", function () {
    $(".essalmodal").removeClass("show");
});

$(".parentfiled").on("click", function () {
    $(".subfileds").addClass("active-fields");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$("ul.subfileds .dropdown-item").on("click", function () {
    $(".subfileds").removeClass("active-fields");
});

$(".filterbtn").on("click", function () {
    $(".filterside").addClass("active-filter");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".closefilter").on("click", function () {
    $(".filterside").removeClass("active-filter");
});

$(".filterbtn").on("click", function () {
    $(".alert-notification").addClass("hide-alert");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".closefilter").on("click", function () {
    $(".alert-notification").removeClass("hide-alert");
});

$(".iq-chat-ui li a").on("click", function () {
    $(".tab-pane.fade").addClass("openchat");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".closechate").on("click", function () {
    $(".tab-pane.fade").removeClass("openchat");
});

$("a.pluschat").on("click", function () {
    $("#chatbox5").addClass("opennewchat");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".closenewchat, .iq-chat-ui li a").on("click", function () {
    $("#chatbox5").removeClass("opennewchat");
});

$(".filedselector").on("click", function () {
    $(".tabslid").addClass("showtop");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$("ul.find-home li button, ul.subfileds li button.dropdown-item, .nav-essal, a.nav-link").on("click", function () {
    $(".tabslid").removeClass("showtop");
});

$(".filterbtn").on("click", function () {
    $(".ourexperts").addClass("showtop");
});

$(".closefilter").on("click", function () {
    $(".ourexperts").removeClass("showtop");
});

$(".mob-show-details").on("click", function () {
    $(".sessioncard").addClass("show-session");
});

$(".mob-hide-details").on("click", function () {
    $(".sessioncard").removeClass("show-session");
});

$(".dropdown-menu li button").click(function () {
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

$(".nav-essal ul.navbar-nav li.nav-item a.dropdown-toggle i.easynav").on("click", function () {
    $(".btn-header").addClass("becoo");
});

$("body, .nav-essal ul.navbar-nav li a.nav-link i.closenav, .currencyset, .nav-essal .dropdown-item").on("click", function () {
    $(".btn-header").removeClass("becoo");
});

$(".navbar-dark.nav-essal .navbar-toggler .navbar-toggler-icon").on("click", function () {
    $(".btn-header").addClass("becoo");
});



// $('ul li:has(ul.child)').addClass('has_child');

function navFunction() {
    var element = document.getElementById("myDIV");
    element.classList.remove("navstart");
}

function changeLangAr() {
    document.documentElement.setAttribute("dir", "rtl")
    getText()
}
function changeLangEn() {
    document.documentElement.setAttribute("dir", "ltr")
    getText()
}

function getText() {
    var node = document.getElementById('text')
}


/****************************************Blog Video********************************************/

const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const video = document.getElementById('video');
const progressbar = document.getElementById('progressbar');
const timestamp = document.getElementById('timestamp');

//------------------------------------------------------------------------
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function updateProgressbar() {
  progressbar.value = (video.currentTime * 100) / video.duration;

  //set the time
  let min = Math.floor(video.currentTime / 60);
  let sec = Math.floor(video.currentTime - min * 60);
  if (min < 10) {
    min = '0' + String(min);
  }
  if (sec < 10) {
    sec = '0' + String(sec);
  }
  timestamp.innerText = `${min}:${sec}`;
}

function dragProgressbar() {
  video.currentTime = (+progressbar.value * video.duration) / 100;
}
//------------------------------------------------------------------------

playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);

video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);

stopBtn.addEventListener('click', stopVideo);

video.addEventListener('timeupdate', updateProgressbar);
progressbar.addEventListener('change', dragProgressbar);


/**************************************** End Blog Video********************************************/