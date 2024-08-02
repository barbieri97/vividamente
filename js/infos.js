function construirParagrafos(texto, elemento) {
  let paragrafos = texto.split("\n");

  paragrafos.forEach((element) => {
    let newP = `<p class="text">${element}</p>`;
    console.log(newP);
    elemento.append(newP);
  });
}

$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const content = urlParams.get("info");
  const info = $("#info");
  const title = $("#tituloInfo");
  $.get("../api/infos.json", function (data) {
    var infoData;
    data.infos.forEach((element) => {
      if (element.id === content) {
        infoData = element;
      }
    });
    title.text(infoData.title);

    if (infoData.imgLink) {
      info.html(`<img href="${infoData.imgLink}" alt="${infoData.title}"`);
    }

    info.html(construirParagrafos(infoData.text, info));
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Erro ao carregar as infos: ", textStatus, errorThrown);
  });
});
