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
          <div class="star-rating" data-rating="${element.rating}">
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
          </div>
        </div>
        `;

      recomendacoes.append(divRecomendacoes);
    });

    // Preenche as estrelas
    $(".star-rating").each(function () {
      const $starRating = $(this);
      const rating = parseFloat($starRating.data("rating"));
      const $stars = $starRating.find(".star");

      const filledStars = Math.floor(rating);
      const hasHalfStart = rating % 1 >= 0.5;
      $stars.each(function (index) {
        if (index < filledStars) {
          $(this).addClass("filled");
        } else if (index === filledStars && hasHalfStart) {
          $(this).addClass("half-filled");
        }
      });
    });
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error(
      "Erro ao carregar as recomendacoes: ",
      textStatus,
      errorThrown
    );
  });
});
