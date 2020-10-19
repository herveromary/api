function fetchPokemonJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (pokemon) {
      console.log("data decoded from JSON:", pokemon);
      console.log(pokemon[0].character);

      // Build a block of HTML
      const pokemonHtml = `
          <p><strong>Je suis ${pokemon[0].character}</strong></p>
          <p><strong>Je pense que : ${pokemon[0].quote}</strong></p>
          <img src="${pokemon[0].image}" />
        `;
      document.querySelector("#simpsons").innerHTML = pokemonHtml;
    });
}

fetchPokemonJSON();
