const animes = document.querySelector('.dailyMeditation')
const selectedAnimeDiv = document.querySelector('.selectedMeditation')
const selectTag = document.querySelector("#anime-choice")

const baseUrl = "https://animechan.xyz/api/random"


fetch(baseUrl)
  .then((response) => response.json())
  .then((quote) => displayQuote(quote));

function displayQuote(anime) {
  console.log(anime)

  const animeSomething = `
      <div class="animeQuote">
        <h2>${anime.anime}</h2>
        <p>"${anime.quote}"</p>
        <h3>-&nbsp${anime.character}</h3>
      </div>
    `;

    animes.insertAdjacentHTML("beforeend", animeSomething);
}

function fetchResults(animeTitle) {
  fetch(`${baseUrl}/anime?title=${animeTitle}`) // https://animechan.xyz/api/random/anime?title=naruto
    .then((response) => response.json())
    .then((res) => {
      displaySelectedQuote(res);
    })
}

function displaySelectedQuote(anime) {
  console.log(anime)
  let quote1 = anime.quote;
  let animeName = anime.anime;
  let animeCharacter = anime.character;
  const animeSomething = `
    <div class="animeQuote">
      <div class="something">${animeName}</div>
      <div>"${quote1}"</div>
      <div class="the-goat">-&nbspNiles Toomer</div>
    </div>
    `;

    selectedAnimeDiv.innerHTML = ""

    selectedAnimeDiv.insertAdjacentHTML("beforeend", animeSomething);
}

selectTag.addEventListener("change", (e) => {
  fetchResults(e.target.value)
})