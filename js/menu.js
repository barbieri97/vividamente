$(document).ready(function () {
  $.get("../api/item_menu.json", function (data) {
    var menu = data.menu;
    var navMenu = $("#navMenu");
    var menuHtml = "<ul>";

    menu.forEach((element) => {
      menuHtml +=
        '<li><a href="' + element.link + '">' + element.name + "</a></li>";
    });

    menuHtml += "</ul>";

    navMenu.html(menuHtml);
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Erro ao carregar o menu: ", textStatus, errorThrown);
  });

  $("#menuIcon").on("click", function () {
    $("#navMenu").toggle("slow");
  });
});
