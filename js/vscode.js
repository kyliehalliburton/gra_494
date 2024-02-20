$(document).ready(function () {
    $(".lightbox-close").click(function () {
        var iframeSrc = $(".lightbox-target iframe").attr("src");
        $(".lightbox-target iframe").attr("src", "");
        $(".lightbox-target iframe").attr("src", iframeSrc);
    });
  });