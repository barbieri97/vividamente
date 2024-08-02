$(document).ready(function () {
  const servicos = $("#servicos");

  $.get("../api/servicos.json", function (data) {
    var infos = data.servicos;
    var divServico;

    infos.forEach((element) => {
      divServico = `
        <div class="servico">
        <a href="infos.html?info=${element.qLink}">
        <img src="${element.imageLink}" alt="${element.name}" />
        <h4>${element.name}</h4>
        </a>
        <a style="width: 100%;" href="agradecimentos.html"> <button class="button-purple-servico">Agendar sessão!</button></a>
        </div>
        `;
      servicos.append(divServico);
    });
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Erro ao carregar os serviços: ", textStatus, errorThrown);
  });
});
