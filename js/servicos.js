$(document).ready(function () {
  const servicos = $("#servicos");

  $.get("../api/servicos.json", function (data) {
    var infos = data.servicos;
    var divServico;

    infos.forEach((element) => {
      console.log(element.link);
      divServico = `
        <div class="servico">
        <img src="${element.imageLink}" alt="${element.name}" />
        <h4>${element.name}</h4>
        <button class="button-purple-servico">Agendar sessão!</button>
        </div>
        `;
      servicos.append(divServico);
    });
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Erro ao carregar os serviços: ", textStatus, errorThrown);
  });
});
