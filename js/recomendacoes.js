$(document).ready(function () {
  const recomendacoes = $("#recomendacoes");

  $.get("../api/recomendacoes.json", function (data) {
    var item = data.avaliacoes;
    var divRecomendacoes;

    item.forEach((element) => {
      console.log(element.name);
      divRecomendacoes = `
        <div class="recomendacao">
          <div class="recomendacao-id">
            <img class="img-recomendacao" src="${element.linkProfile}" alt="usuario" />
            <div class="recomendacao-name">
              <h4>${element.name}</h4>
              <p>${element.age} anos</p>
            </div>
          </div>
          <div>
            <p>${element.text}</p>
          </div>
        </div>
        `;

      recomendacoes.append(divRecomendacoes);
    });
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error(
      "Erro ao carregar as recomendacoes: ",
      textStatus,
      errorThrown
    );
  });
});
