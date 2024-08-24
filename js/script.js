$(document).ready(function () {
  // adiciona os links nos icons do rodapé
  $.get("../api/links.json", (data) => {
    console.log(data);
    if (data.instagram) {
      $("#footer-icon-instagram").attr("href", data.instagram);
    }
    if (data.face) {
      $("#footer-icon-face").attr("href", data.face);
    }
    if (data.email) {
      $("#footer-icon-email").attr("href", data.email);
    }
  });

  $("#loadMask").toggle();
});
