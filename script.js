const img = document.getElementById("image");
const reset_button = document.getElementById("input-container-button");
const search_input = document.getElementById("input-container-text");
const suprise_button = document.getElementById("surprise-button");

const infoActivity = document.querySelector(".info-activity");
const infoType = document.querySelector(".info-type");
const infoParticipants = document.querySelector(".info-participants");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=ED3fwQxJTmnwLsiqP9UdWQXWESEt8rla&s=cats",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

reset_button.addEventListener("click", handleClick);

function handleClick() {
  console.log(search_input.value);

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=ED3fwQxJTmnwLsiqP9UdWQXWESEt8rla&s=${search_input.value}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

suprise_button.addEventListener("click", handleSurprise);

function handleSurprise() {
  fetch("https://www.boredapi.com/api/activity/", {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      infoActivity.innerHTML = response.activity;
      infoType.innerHTML = response.type;
      infoParticipants.innerHTML = response.participants;

      console.log(response);
    });
}
