var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=ykqdlBNRjsHIBnsqgxRYJ6Jdm9pUG3T6";

function getStories() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

// store the link plus the API key in a variable
function showData(stories) {
  let content = stories
    .map(
      (item) => `
      <div class="item">
      <picture>
      <img src="${item.multimedia[1].url}" alt="" />
      <figcaption>${item.multimedia[1].caption}</figcaption>
      </picture>
        <h3><a href="${item.url}">${item.title}</a></h3>
        <p>${item.abstract}</p>
      </div>
    `
    )
    .join("");
  document.querySelector(".stories").innerHTML = content;
}

if (document.querySelector(".home")) {
  getStories();
}
