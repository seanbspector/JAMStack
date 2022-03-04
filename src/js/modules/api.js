var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=ykqdlBNRjsHIBnsqgxRYJ6Jdm9pUG3T6";

export function getStories() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}
