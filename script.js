window.addEventListener("load", function () {
  this.fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      console.log(json[0]);
    });
  });
});
