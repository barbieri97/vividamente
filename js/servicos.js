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
        <a style="width: 100%;" target="_blank" href="https://wa.me/5511958714718?text=Olá, gostaria de mais informações sobre os seus serviços."> <button class="button-purple-servico">Agendar sessão!</button></a>
        </div>
        `;
      servicos.append(divServico);
    });
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Erro ao carregar os serviços: ", textStatus, errorThrown);
  });
});
