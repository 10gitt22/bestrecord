window.onscroll = function showHeader() {
  let header = document.querySelector("header");
  if (window.pageYOffset > 60) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
};

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top - 60;
    $("body,html").animate({ scrollTop: top }, 700);
  });
});
