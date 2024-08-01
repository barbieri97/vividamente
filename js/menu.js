$(document).ready(function () {
  const navMenu = $("#navMenu");
  $.get("../api/item_menu.json", function (data) {
    var menu = data.menu;
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
    navMenu
      .slideToggle(300)
      .promise()
      .done(function () {
        if (navMenu.is(":visible")) {
          $("#menuButton").attr("src", "../assets/menu_open.png");
          console.log("open");
        } else {
          $("#menuButton").attr("src", "../assets/menu.png");
        }
      });
  });
});
