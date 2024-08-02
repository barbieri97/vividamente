$(document).ready(function () {
  const fundadores = $("#fundadores");

  $.get("../api/fundadores.json", function (data) {
    var item = data.fundadores;
    var divFundador;

    item.forEach((element) => {
      divFundador = `
        <div class="fundador">
            <div class="fundador-id">
              <img
                class="img-fundador"
                src="${element.imgLink}"
                alt="usuario"
              />
              <div class="fundador-name">
                <h4>${element.name}</h4>
                <p>${element.cargo}</p>
              </div>
            </div>
            <div>
              <p>${element.curriculo}</p>
            </div>
          </div>
          `;

      fundadores.append(divFundador);
    });
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error(
      "Erro ao carregar as recomendacoes: ",
      textStatus,
      errorThrown
    );
  });
});
